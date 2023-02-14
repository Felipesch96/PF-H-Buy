const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB)
  .then(() => console.log("Connected to mongoDB ATLAS"))
  .catch((error) => console.error(error));
