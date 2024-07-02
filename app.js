const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const cors = require("cors");
require("./config/database.js");

// routes
const clientRouter = require("./routes/client.js");
const authenticationRouter = require("./routes/authentication.js");
const branchRouter = require("./routes/branch.js");
const reviewRouter = require("./routes/review.js");
const reservationRouter = require("./routes/reservation.js");
const serviceRouter = require("./routes/service.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // set to true for production mode to prevent XSS attacks on HTTPS only sites.
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/client", clientRouter);
app.use("/authentication", authenticationRouter);
app.use("/branch", branchRouter);
app.use("/review", reviewRouter);
app.use("/reservation", reservationRouter);
app.use("/service", serviceRouter);

module.exports = app;
