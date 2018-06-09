var Students = require('../models/students');

exports.authenticate = function(req,res){

  var db = require('../db/db');
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  console.log(req.body);
  var student = {
    emailid:req.body.email,
    password:req.body.password
  };
  console.log("above");
  Students.findOne({'emailid':student.emailid }, 'studentname emailid password', function (err,stud) {
    console.log("below");
  if (err){
    console.log(err);
  }
  else {
    if(stud.password == student.password){
       res.render('details', { user : stud });
    }
    else{
      res.redirect('login.html');
    }
  }
  })

}
