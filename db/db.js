var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://niranjan:ninjarlnd@ninja-1wpbq.mongodb.net/test?';
mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
var db = mongoose.connection;
module.exports = db;
