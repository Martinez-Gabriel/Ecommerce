import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import AppFactory from "./presentation/factories/appFactory";

void (async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const app = AppFactory.create();

    app.init();
    app.build();
    app.listen();

  } catch (e) {
    console.log("Error: can't connected to data base");
    console.log(e);
  }
})();
