const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Bistro Boss");
});

app.listen(port, () => {
  console.log(`Bistro Boss running on ${port}`);
});

// BistroDB
