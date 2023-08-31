const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./routes");
const app = express();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
require("dotenv").config();

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,           
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(Router);

const connectdb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_local);
		console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
	} catch (err) {
		console.error(err);
	}
};

connectdb().then(() => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
});