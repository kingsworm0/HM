// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  url="mongodb+srv://kings:dci@cluster0.quflrs4.mongodb.net/ops?retryWrites=true&w=majority"

  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(url,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;