"use strict"
const PORT = 2001;
const app = require('../app')

app.listen(PORT, () =>  {
    console.log("서버 가동");
});

