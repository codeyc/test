const express = require('express');
const router = express.Router();
const app = express();
const db = require("./routes/db.js");
const port = process.env.PORT || 3000;