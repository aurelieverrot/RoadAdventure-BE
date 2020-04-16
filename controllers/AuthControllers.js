const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };
  
  if (!newUser.username || !newUser.password) return res.status(400).send('username or password cannot be null');

  db.User.findOne({username: newUser.username}, (err, foundUser) => {
    if (err) return res.status(500).json(err);
    if (foundUser) return res.status(400).send('username exists');

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json(err);

      bcrypt.hash(newUser.password, salt, (err, hashedPwd) => {
        if (err) return res.status(500).json(err);
        newUser.password = hashedPwd;

        db.User.create(newUser, (err, savedUser) => {
          if (err) return res.status(500).json(err);
          const token = jwt.sign(
            {
              username: savedUser.username,
              _id: savedUser._id
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days"
            },
          );
          return res.status(200).json({
            message: 'User Created',
            token
          });
        });
      });
    });
  });

};

const login = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  if (!user.username || !user.password) return res.sendStatus(400);

  db.User.findOne({username: user.username}, (err, foundUser) => {
    if (err) return res.status(500).json(err);
    if (!foundUser) return res.sendStatus(400);


      const token = jwt.sign(
        {
          username: foundUser.username,
          _id: foundUser._id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "30 days"
        },
      );
      return res.status(200).json({
        message: 'User Logged in',
        token
      });
    
  });
};


module.exports = {
  register,
  login
};