/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = {
  serverPort: process.env.PORT,
  dbUrl: process.env.MONGO_URI,
  key:process.env.SECRET_KEY
}