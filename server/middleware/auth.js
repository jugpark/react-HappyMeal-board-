const { User } = require('../models/User');

const auth = (async (req, res, next) => {
    //authentication
    //bring token from client cookie

    const token = req.cookies.x_auth;
    // decode token and find user
    await User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next();
    })
})


module.exports = { auth };