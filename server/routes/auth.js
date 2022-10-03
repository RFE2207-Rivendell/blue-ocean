const express = require("express");
const router = express.Router();
const model = require("../models/accountModel.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// GET REQUESTS //

router.post("/register", (req, res, next) => {
  const { email, password, firstName, lastName, isTeacher } = req.body;
  if (isTeacher && !email.endsWith(".edu")) {
    res.status(400).send({ message: "Unverified email" });
  } else if (!email && password) {
    res.status(400).send({ message: "Please fill in email field" });
  } else if (!password && email) {
    res.status(400).send({ message: "Please fill in password field" });
  } else if (!email && !password) {
    res.status(400).send({ message: "Please fill in all fields" });
  } else {
    model
      .getPasswordByEmail(email)
      .then((userPass) => {
        if (userPass.rows[0]) {
          res.status(400).send({ message: "Email already in use" });
        } else {
          bcrypt.hash(password, 12, function (err, hash) {
            if (err) {
              console.log(err);
            }
            model
              .createAccount({
                email,
                passwordHash: hash,
                firstName,
                lastName,
                isTeacher,
              })
              .then((user) => {
                res
                  .status(201)
                  .send({ message: "Account successfully created" });
              })
              .catch((err) => console.log(err));
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// LOGIN
//session is established after authentication
router.post("/login", (req, res, next) => {
  console.log(req.body.email, req.body.password);
  passport.authenticate(
    "local",
    (err, user, info) => {
      if (err) return res.status(500).send();
      if (!user) return res.status(400).send("Incorrect credentials");
      req.logIn(user, function (err) {
        if (err) return next(err);
        console.log(req.session);
        return res.status(200).send("You have been successfully logged in");
      });
    }
    //is there like a homepage route?
    // successRedirect: "/dashboard",
    // failureRedirect: "/login",
  )(req, res, next);
});

//LOGOUT
router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send("You are logged out!");
  });
});

module.exports = router;