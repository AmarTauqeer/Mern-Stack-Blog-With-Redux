const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/postManagerDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "MongoDB connection error:" + JSON.stringify(err, undefined, 2)
      );
    }
  }
);
