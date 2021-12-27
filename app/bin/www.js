"use strict"
const PORT = process.env.PORT || 2001;
const app = require('../app')

app.listen(PORT, () =>  {
    console.log("서버 가동");
});

