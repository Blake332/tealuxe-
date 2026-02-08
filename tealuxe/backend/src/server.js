// src/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables (if you have .env)
dotenv.config();

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Tealuxe Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
