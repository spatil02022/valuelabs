"use strict"
import express from 'express'
import bodyParser from "body-parser";
import winston from "express-winston"
import logger from './services/logger'

/**
 * Import Routes
 */
import deliveryRouter from './routes/delivery'

process.on("uncaughtException", function (error) {
  console.dir(error)
  console.log("uncaughtException")

  if (error.stack) console.log(error.stack)
})

export const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(
  winston.logger({
    winstonInstance: logger,
    meta: false,
    msg: "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) {
      return false
    },
  })
)


app.use("/api/delivery", deliveryRouter)

var port = process.env.PORT || "3000"
app.listen(port)

console.log("Server listening on port: " + port)
