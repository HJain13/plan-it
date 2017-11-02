var express = require('express');
var app = express();
var packageRouter = express.Router();

// Require Package model in our routes module
var Package = require('../models/Package');

// Defined store route
packageRouter.route('/add/post').post(function (req, res) {
  console.log(req.body);
  var package = new Package(req.body.business, req.body.package);
      package.save()
    .then(package => {
    res.json('Package added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

packageRouter.route('/findByEmail').get(function (req, res) {
  Package.findOne({'package.email': req.body.package.email}, 'package', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      if(itms=="null") res.json("false");      
      else res.json("true");
    }
  });
});


// Defined get data(index or listing) route
packageRouter.route('/').get(function (req, res) {
  Package.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      console.log("Hey");
      res.json(itms);
    }
  });
});

// Defined edit route
packageRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Package.findById(id, function (err, package){
      res.json(package);
  });
});

//  Defined update route
packageRouter.route('/update/:id').post(function (req, res) {
  Package.findById(req.params.id, function(err, packageFound) {
    if (!packageFound)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      packageFound.package = req.body.package;
      packageFound.save().then(package => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
packageRouter.route('/delete/:id').get(function (req, res) {
  Package.findByIdAndRemove({_id: req.params.id},
       function(err, package){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = packageRouter;