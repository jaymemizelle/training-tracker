const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Import routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


mongoose.connection.on('error', (err) => console.log(`error in mongoose connection ${err}`));

mongoose.connection.once('open', () => {
  console.log('mongoose connected!')
  app.listen(PORT, () => {
    console.log(`App running on: http://www.localhost:${PORT}`);
  });
})

