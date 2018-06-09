var Students = require('../models/students');

exports.register = function(req,res){
  //Students.studentname = req.body.name;
  var db = require('../db/db');
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  var student = {
    studentname : req.body.name,
    emailid:req.body.email,
    password:req.body.password,
    contactno:req.body.contactno
  };
    console.log(req.body);
   const studobj = new Students(student);
   studobj.save(function(err){
     if(err){
       console.log(err);
     }

       res.render('index', { name: req.body.name });

   })
}
