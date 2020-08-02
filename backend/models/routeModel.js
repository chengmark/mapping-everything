/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
const mongoose = require("mongoose");

let busRoute = new mongoose.Schema({
  route_id: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  stops: [{ type: String }],
  dir: { type: String },
});

let BusRoute = mongoose.model("Route", busRoute);

module.exports = BusRoute;
