const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { auth } = require("../middleware/auth");
const { User } = require("../models/User");
const { Board } = require("../models/Board");
const { Comment } = require("../models/Comment");

router.get("/", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (user)
      return res.status(200).json({
        id: req.user.id,
        email: req.user.email,
        nickname: req.user.nickname,
      });
    else return res.status(404).send();
  });
});

router.get('/profile', auth, (req, res) => {
  User.findOne({_id: req.user._id}, (err, user) => {
      if(user) return res.status(200).json({   
          id: req.user.id,
          nickname: req.user.nickname,
      })
      else return res.status(404).send();
  })
})


router.post("/update/nickName", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { nickname: req.body.nickname } },
    { new: true },
    (err, user) => {
      console.log(err);
      if (user) return res.status(200).send();
      else return res.status(404).send();
    }
  );
});

router.post("/update/email", auth, (req, res) => {
  User.findOne({ _id: req.body._id }, (err, user) => {
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          changeSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      else
        User.findOneAndUpdate(
          { _id: req.body._id },
          { $set: { email: req.body.email } },
          { new: true },
          (err, user) => {
            console.log(user);
            if (!user) return res.status(404).send();
            else return res.json({ changeSuccess: true });
          }
        );
    });
  });
});

router.post("/update/password", auth, (req, res) => {
  User.findOne({ _id: req.body._id }, (err, user) => {
    user.comparePassword(req.body.oldPassword, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          changeSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      else
        bcrypt.genSalt(10, function (err, salt) {
          if (err) return res.status(400).send(err);
          bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
            if (err) return res.status(400).send(err);
            User.findOneAndUpdate({ _id: req.body._id }, { password: hash })
              .then(() => res.status(200).json({ changeSuccess: true }))
              .catch((err) => res.status(500).json(err));
          });
        });
    });
  });
});

module.exports = router;
