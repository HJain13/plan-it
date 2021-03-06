var express = require('express');
var app = express();
var userRouter = express.Router();

// Require User model in our routes module
var User = require('../models/User');

// Defined store route
userRouter.route('/add/post').post(function (req, res) {
  var user = new User(req.body);
      user.save()
    .then(user => {
    res.json('User added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

userRouter.route('/auth').post(function (req, res) {
  User.findOne({'user.email': req.body.user.email, 'user.pass': req.body.user.pass}, 'user', function (err, itms) {
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

userRouter.route('/findByEmail').get(function (req, res) {
  User.findOne({'user.email': req.body.user.email}, 'user', function (err, itms) {
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
userRouter.route('/').get(function (req, res) {
  User.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined edit route
userRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRouter.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      user.user = req.body.user;

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRouter.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id},
       function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRouter;