const express = require("express");
const router = express.Router();
 const User = require('../Model/user.module');


 router.get("/users", async (req, res, next) => {
  try {
    const user = await User.find({},{__v: 0});
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

 router.post("/users", (req, res, next) => {
    const emp = new User({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      staus: req.body.status,
      phone: req.body.phone,
    });
  
    emp
      .save()
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err.message);
      });
  });
  
  module.exports = router;
