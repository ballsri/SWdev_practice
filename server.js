const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db")


//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//Route files
const hospitals = require('./routes/hospitals');

const app = express();

//Body parser
app.use(express.json());

app.use('/api/v1/hospitals/', hospitals)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("VacQ is running in ", process.env.NODE_ENV, ' mode on port ', PORT));