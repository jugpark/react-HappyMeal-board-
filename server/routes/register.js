const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post('/checkId/:id', (req, res) => {
  User.findOne({ id: req.body.id }, (err, user) => {
      if(!user) return res.status(200).send();
      else return res.status(404).json({
          success: false
      })
  })
})

module.exports = router;
