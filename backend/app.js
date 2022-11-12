require("dotenv").config();
const express = require("express");
const connectDB = require("./DB/mongoose");
const cors = require("cors");
const router = require("./router/user");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/', router)

connectDB();

app.listen(port, () => {
    console.log(`server  is  up and running on ${port}`);
})