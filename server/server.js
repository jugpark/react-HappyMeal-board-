const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jugwang:Jugwang98072!@gg-project.7m6hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected")) //
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello"));
app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버가 가동되었습니다.`);
});

module.exports = app;
