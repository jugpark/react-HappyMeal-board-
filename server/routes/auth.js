const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  });
});

module.exports = router;
