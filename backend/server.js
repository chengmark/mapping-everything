/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const init = require("./init").initData;
const app = express();
const handleErr = require("./commonUtils").handleErr;
//const PORT = 2053
const PORT = 5000;

/*
const dbUri = "mongodb://DinethP:GatewayCollege@localhost/csci2720";
const options = {
  user: "DinethP",
  pass: "GatewayCollege",
  dbName: "csci2720",
};
*/
//const dbUri = "mongodb://perera8:x74232@localhost/perera8";
/*const options = {
  user: "perera8",
  pass: "x74232",
  dbName: "perera8",
};
*/

const dbUri = "mongodb://mongo:27017/csci2720-proj";

mongoose.connect(dbUri).then(() => {
  init(() => {
    console.log("Listening on port: " + PORT);
    app.listen(PORT);
  });
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connection is open...");
});

// flush data
app.post("/api/flush", (req, res) => {
  console.log("Flushing data");
  init(() => {
    console.log("Data flushed");
    res.json({ msg: "Reloaded from online data set.", status: 200 });
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./routes/user.js");
const stopRouter = require("./routes/stop.js");
const busRouteRouter = require("./routes/busRoute.js");
const favRouter = require("./routes/favourite.js");
const cmtRouter = require("./routes/comment.js");
const etaRouter = require("./routes/eta.js");

const locationRouter = require("./routes/locations.js");
app.use(locationRouter);

app.use(userRouter);
app.use(stopRouter);
app.use(busRouteRouter);
app.use(favRouter);
app.use(cmtRouter);
app.use(etaRouter);

/*
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
*/
