var express = require('express');
var app = express();
var businessRouter = express.Router();

// Require Business model in our routes module
var Business = require('../models/Business');

// Defined store route
businessRouter.route('/add/post').post(function (req, res) {
  var business = new Business(req.body);
      business.save()
    .then(business => {
    res.json('Business added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

businessRouter.route('/findByEmail').get(function (req, res) {
  Business.findOne({'business.email': req.body.business.email}, 'business', function (err, itms) {
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
businessRouter.route('/').get(function (req, res) {
  Business.find(function (err, itms){
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
businessRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

businessRouter.route('/auth').post(function (req, res) {
  Business.findOne({'business.email': req.body.business.email, 'business.pass': req.body.business.pass}, 'business', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});


//  Defined update route
businessRouter.route('/update/:id').post(function (req, res) {
  Business.findById(req.params.id, function(err, businessFound) {
    if (!businessFound)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      businessFound.business = req.body.business;
      businessFound.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRouter.route('/delete/:id').get(function (req, res) {
  Business.findByIdAndRemove({_id: req.params.id},
       function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRouter;