const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const NODE_ENV = process.env.NODE_ENV || "development";

const HOST =
  NODE_ENV === "production" ? process.env.PROD_HOST : process.env.DEV_HOST;
const PORT =
  NODE_ENV === "production" ? process.env.PROD_PORT : process.env.DEV_PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello! Running on ${NODE_ENV} mode`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT} in ${NODE_ENV} mode`);
});
