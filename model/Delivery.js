"use strict";
import loki from "lokijs";
const db = new loki("Officeworks");
export const deliveryCost = db.addCollection("delivery");

for (var i = 1; i < 5; i++) {
  deliveryCost.insert({
    weight: i * 10,
    cost: i * 2,
    postcode: "3000"
  });
}

var Delivery = {};
export default Delivery;
