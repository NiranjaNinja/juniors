var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentSchema = new Schema(
  {
    studentname: {type: String, required: true, max: 50},
    emailid: {type: String, required: true, regex: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'},
    password: {type: String, required: true,max: 50},
    contactno: {type: String, required: true, max: 10}
  },{versionKey:false});
  module.exports = mongoose.model('Student', StudentSchema);
