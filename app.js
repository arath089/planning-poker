const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const pollsRouter = require("./routes/polls");

dotenv.config({ path: path.resolve(__dirname, "./.env") });
async function initDB() {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

initDB();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 80;
app.set("port", PORT);
app.listen(
  PORT,
  console.log(`Server started on port ${PORT}. http://localhost:${PORT}`)
);

app.use("/", indexRouter);
app.use("/polls", pollsRouter);

module.exports = app;
