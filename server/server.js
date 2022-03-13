const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const boardRouter = require("./routes/board");
const commentRouter = require("./routes/comment");
const userRouter = require("./routes/user");
const likeRouter = require("./routes/like");
const authRouter = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected")) //
  .catch((err) => console.log(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users/register", registerRouter);
app.use("/api/users/login", loginRouter);
app.use("/api/users/logout", logoutRouter);
app.use("/api/users/auth", authRouter);
app.use("/api/users/board", boardRouter);
app.use("/api/users/comment", commentRouter);
app.use("/api/users/user", userRouter);
app.use("/api/users/like", likeRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
