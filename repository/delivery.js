import {deliveryCost} from '../model/Delivery'
export const getByWeight =async(callback)=>{
    try {
        return callback(null, deliveryCost.find({})[0]);
    } catch (error) {
        return error.message 
    }
}