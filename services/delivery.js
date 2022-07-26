import { getByPostcode } from '../repository/availability'
import { getByWeight } from '../repository/delivery'
import {uniqueArray} from '../helper'
var deliverService = {}

deliverService.getByPostcode = async function (req,res,postcode, items) {
  try {
      let checkItems = items.split(",")
      const unique =await uniqueArray(checkItems)
      const fecthByPostCode=await getByPostcode(postcode,unique)
      let final = {
          items: [],
          cost: 0,
      }
      fecthByPostCode.forEach(async(av) => {
        if(av===undefined) return 
        if (av.available != true ) {
          return final
        }
        final.items.push(av)
        getByWeight(function (err, delCosts) {
            if(err){
              return err
            }
            final.cost += delCosts.cost
        })
      })

    return final
  } catch (error) {
    return error
  }
}

export default deliverService
