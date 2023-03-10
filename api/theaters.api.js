const { Router } = require("express");
const { Theaters } = require("../models/theaters");

const router = Router();

router.get("/theaters", async (req, res) => {
  const {
    theaterId,
    location_address_city,
    location_address_zipcode,
  //
    // location_geo_coordinates_latitude
    // location_geo_coordinates_longitude
  //
    location_geo_coordinates_0,
    location_geo_coordinates_1,
  } = req.query;

  const dbQuery = {};

  if (theaterId) {
    dbQuery.theaterId = theaterId;
  }

  if (location_address_city) {
    dbQuery["location.address.city"] = location_address_city;
  }

// 
  // Коли ставлю це значення воно не працює, в самій базі даних на mongoDb в coordinates вказано 0 і 1.
  // latitude і longitude можливо можна в базі даних змінити назви на ці

  // if (location_geo_coordinates_latitude) {
  //   dbQuery["location.geo.coordinates.latitude"] = location_geo_coordinates_latitude;
  // }

  // if (location_geo_coordinates_longitude) {
  //   dbQuery["location.geo.coordinates.longitude"] = location_geo_coordinates_longitude;
  // }
//
  if (location_geo_coordinates_0) {
    dbQuery["location.geo.coordinates.0"] = location_geo_coordinates_0;
  }

  if (location_geo_coordinates_1) {
    dbQuery["location.geo.coordinates.1"] = location_geo_coordinates_1;
  }

  if (location_address_zipcode) {
    dbQuery["location.address.zipcode"] = location_address_zipcode;
  }

  const docs = await Theaters.find(dbQuery);

  return res.status(200).send(docs);
});

module.exports = { router };
