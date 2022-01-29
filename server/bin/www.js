"use strict"
const PORT = process.env.PORT || 2001;
const logger = require("../src/config/logger");
const app = require('../app')

app.listen(PORT, () =>  {
    logger.info(`server works on port : ${PORT}`)
});

