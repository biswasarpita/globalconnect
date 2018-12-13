/*eslint no-undef: "error"*/
/*eslint-env node*/
if(process.env.NODE_ENV === 'production')
{
  module.exports = require('./keys_prod');
}
else {
  module.exports = require('./keys_dev');
}