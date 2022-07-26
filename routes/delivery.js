"use strict";
import express from 'express'
import availabilityService from '../services/availability'

const deliveryRouter = express.Router()

const ERRS = {
  "Invalid Part": 404,
  "Invalid Store": 404,
  "Invalid Params": 400
};

// Response Handler
const responseStatus = async(res,statusCode,displayMessage,data)=>{
  switch(statusCode) {
  case 200:
    return res.json({
          status: "Success",
          statusCode: 200,
          statusMessage: "OK",
          displayMessage: displayMessage,
          data: data
    })
  case 400:
    return res.json({
          status: "Failure",
          statusCode: 400,
          statusMessage:"Bad Request",
          displayMessage: displayMessage,
          error: data
    })
  case 500:
    return res.json({
          status: "Failure",
          statusCode: 500,
          statusMessage:"Internal Server Error",
          displayMessage: displayMessage,
          error: data
    })
}

}

// Validation Handling
const validationError =async (res, desc) =>{
    return res.json({
        status: 'Failure',
        statusCode: 400,
        statusMessage:'Validation Error',
        displayMessage: desc,
        error: desc
  })
}


// Controller
const availabilityController=async(req, res)=> {
  try {
      const postcode = (req.params.postcode);
      if(parseInt(postcode)!==3000 || typeof postcode!=='string')return await validationError(res, "invalid postcode specified");
      const partNumber = req.query.partNumber ;
      if ( partNumber === '' || partNumber===undefined) return await validationError(res, "invalid part number specified");
      const result=await availabilityService.getByPostcode(req,res,postcode, partNumber);
      await responseStatus(res,200,"Successfully Fetched !!",result)
  } catch (error) {
      await responseStatus(res,200,"Something Went Wrong !!",result)
  }
}

//Routes
deliveryRouter.get("/:postcode", availabilityController);

export default deliveryRouter;
