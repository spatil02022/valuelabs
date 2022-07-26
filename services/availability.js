import deliveryService from '../services/delivery'

var availabilityService = {}

availabilityService.getByPostcode = async (req,res,postcode, partCode) =>{
  try {
      var result = []
      const data= await deliveryService.getByPostcode(req,res,postcode, partCode)
      result.push(data)
      return result
  } catch (error) {
      return error
  }
}

export default availabilityService
