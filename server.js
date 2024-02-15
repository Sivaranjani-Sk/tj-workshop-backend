const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { DB_URL } = require("./config");
const authRoute = require("./routes/authRoute");
const qbRoute = require("./routes/qbRoute");

const app = express();
const PORT = 3000;

app.use(cors());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

app.use("/user", authRoute);
app.use("/qb", qbRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
