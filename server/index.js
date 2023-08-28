const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./routes");
const app = express();
const PORT = process.env.PORT || 4000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(Router);

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (err) {
    console.error(err);
  }
}

connectdb().then(() => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
});