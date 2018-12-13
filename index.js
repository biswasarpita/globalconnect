/*eslint no-undef: "error"*/
/*eslint-env node*/
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./server/config/config");
const users = require("./server/routes/users");
const passport = require("passport");
const log = require("log");
const path = require("path");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//
//Routes
//
app.use("/api/users", users);

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//Passport Middleware
app.use(passport.initialize());

//Passport config
require('./server/config/passport')(passport);

app.listen(config.serverPort, () => {
  log(`Server is listening on post ${config.serverPort}`);
});
