const express = require("express");

console.info("Server started");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
