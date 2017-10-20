var express = require('express');
var app = express();
var adminRouter = express.Router();

// Adding Admin model in our routes module
var Admin = require('../models/Admin');

// Defined Route for adding Admins with Data passed as an object in POST request
adminRouter.route('/add/post').post(function (req, res) {
  var admin = new Admin(req.body);
      admin.save()
    .then(admin => {
    res.json('Admin added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

// Defined Route for finding if an Admin exists with Email passed as an GET request
adminRouter.route('/findByEmail').get(function (req, res) {
  Admin.findOne({'admin.email': req.body.admin.email}, 'admin', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      // Response is Boolean 
      if(itms=="null") res.json("false");      
      else res.json("true");
    }
  });
});


// Defined Route for listing all Admins that exist in DB on GET request
adminRouter.route('/').get(function (req, res) {
  Admin.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      console.log("Hey");
      res.json(itms);
    }
  });
});

// Defined Route for editing details of pre-exisiting Admin exists with changes passed as an GET request
adminRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Admin.findById(id, function (err, admin){
      res.json(admin);
  });
});

// Defined Route for authenticating Login for Admin portal with Email & Password passed as an POST request
adminRouter.route('/auth').post(function (req, res) {
  Admin.findOne({'admin.email': req.body.admin.email, 'admin.pass': req.body.admin.pass}, 'admin', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined Route for updating Admin on POST request
adminRouter.route('/update/:id').post(function (req, res) {
  Admin.findById(req.params.id, function(err, admin) {
    if (!admin)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      admin.admin = req.body.admin;

      admin.save().then(admin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adminRouter.route('/delete/:id').get(function (req, res) {
  Admin.findByIdAndRemove({_id: req.params.id},
       function(err, admin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adminRouter;