/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
const mongoose = require("mongoose");

let user = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fav_stops: [{ type: String }],
  comments: [{ type: String }],
});

let User = mongoose.model("User", user);

module.exports = User;
