import { availability } from '../model/Availability'

export const getByPostcode =async(postcode, itemCode)=>{
    try {
        var foundItems = [];
        itemCode.forEach(function(item) {
            var foundItem = availability.find({ id: item, postcode })[0];
            foundItems.push(foundItem);
        });
         return foundItems?foundItems:[];
    } catch (error) {
       return error.message 
    }
}