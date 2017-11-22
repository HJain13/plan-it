var express = require('express');
var app = express();
var orderRouter = express.Router();

// Require Order model in our routes module
var Order = require('../models/Order');

// Defined store route
orderRouter.route('/add/post').post(function (req, res) {
  console.log(req.body);
  var order = new Order(req.body);
      order.save()
    .then(order => {
    res.json('Order added successfully');
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

orderRouter.route('/findByEmail').get(function (req, res) {
  Order.findOne({'order.email': req.body.order.email}, 'order', function (err, itms) {
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
orderRouter.route('/').get(function (req, res) {
  Order.find(function (err, itms){
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
orderRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Order.findById(id, function (err, order){
      res.json(order);
      //console.log(order);
  });
});

//  Defined update route
orderRouter.route('/update/:id').post(function (req, res) {
  Order.findById(req.params.id, function(err, orderFound) {
    if (!orderFound)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      orderFound.order = req.body.order;
      orderFound.save().then(order => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
orderRouter.route('/delete/:id').get(function (req, res) {
  Order.findByIdAndRemove({_id: req.params.id},
       function(err, order){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = orderRouter;