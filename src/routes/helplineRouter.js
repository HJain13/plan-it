var express = require('express');
var app = express();
var helplineRouter = express.Router();

// Require BusinessBusiness model in our routes module
var Helpline = require('../models/Helpline');

// Defined store route
helplineRouter.route('/add/post').post(function (req, res) {
  var helpline= new Helpline(req.body);
      helpline.save()
    .then(helpline => {
    res.json('Helpline added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

helplineRouter.route('/findByEmail').get(function (req, res) {
  Helpline.findOne({'helpline.email': req.body.helpline.email}, 'helpline', function (err, itms) {
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
helplineRouter.route('/').get(function (req, res) {
  Helpline.find(function (err, itms){
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
helplineRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Helpline.findById(id, function (err, helpline){
      res.json(helpline);
  });
});

helplineRouter.route('/auth').post(function (req, res) {
  Helpline.findOne({'helpline.email': req.body.helpline.email, 'helpline.pass': req.body.helpline.pass}, 'helpline', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});


//  Defined update route
helplineRouter.route('/update/:id').post(function (req, res) {
  Helpline.findById(req.params.id, function(err, helplineFound) {
    if (!helplineFound)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      helplineFound.helpline = req.body.helpline;
      helplineFound.save().then(helpline=> {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
helplineRouter.route('/delete/:id').get(function (req, res) {
  Helpline.findByIdAndRemove({_id: req.params.id},
       function(err, helpline){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = helplineRouter;