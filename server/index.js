const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./routes");
const app = express();
const PORT = process.env.PORT || 4000;
require("dotenv").config();

app.use(cors());app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);
app.use(express.json());
app.use(Router);

mongoose.connect("mongodb://127.0.0.1:27017/path_to_abroad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});