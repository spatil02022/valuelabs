"use strict";

import faker from "faker";

import loki from "lokijs";

var db = new loki("Officeworks");

export const availability = db.addCollection("availability", { indices: ["id"] });

for (var i = 0; i < 10; i++) {
  availability.insert({
    id: i.toString(),
    name: faker.commerce.productName(),
    description: faker.company.catchPhrase(),
    weight: faker.random.number({
      min: 10,
      max: 50
    }),
    available: faker.random.boolean(),
    postcode: "3000"
  });
}
var Availability = {};

export default Availability;
