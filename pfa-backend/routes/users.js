const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user.model');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    state: req.body.state,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            city: user.city,
            state: user.state,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});



//CRUD
// get User by id
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, User) {
      if (err) return next(err);
      res.json(User);
  });
});
// get all Visits
router.get('/', function(req, res, next) {
  User.find({}, function (err, User) {
      if (err) return next(err);
      res.json(User);
  });
});  
// post User
router.post('/', function(req, res, next) {
  

      User.create(req.body, function (err, User) {
          if (err) {
              console.log(err);
              return next(err);
          }
          res.json(User);
      });
  
});

//update User
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, User) {
      if (err) return res.status(500).send({ message: 'update fail'});
      res.json({
          msg: "successfully updated"
      });
  });
});

//delete User
router.delete('/:id', function(req, res, next) {
  User.findByIdAndDelete(req.params.id, function (err, User) {
      if (err) return res.status(500).send({ message: 'delete fail'});
      res.json({
          User : User,
          msg: "successfully deleted"
      });
  });
});
module.exports = router;
