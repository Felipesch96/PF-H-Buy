const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
  .connect(proccess.env.MONGODB_URI)
  .then(() => console.log("Connected to mongoDB ATLAS"))
  .catch((error) => console.error(error));
