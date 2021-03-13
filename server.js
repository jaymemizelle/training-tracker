const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js");

const PORT = process.env.PORT || 3000;

const User = require("./models/User.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trainingdb", { useNewUrlParser: true });

// Import routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);




app.listen(PORT, () => {
  console.log(`App running on: http://www.localhost:${PORT}`);
});
