/*eslint no-undef: "error"*/
/*eslint-env node*/
const mongoose = require("mongoose");
const config = require("./config/config");
const log = require("log");

mongoose.Promise = global.Promise;
mongoose.connect(
  config.dbUrl,
  { useNewUrlParser: true }
);
mongoose.set("debug", false);
mongoose.connection
  .once("open", () => {
    log("DB connection success"); 
  })
  .on("error", err => {
    log(`Error occured ${err}`); 
  });
module.exports = mongoose;
