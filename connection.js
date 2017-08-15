var Sequelize = require('sequelize');
var connection = new Sequelize('expicker_api','root','',{
  host:'localhost',
  dialect:'mysql'
})

module.exports = connection;