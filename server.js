const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express VacQ API",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files
const hospitals = require("./routes/hospitals");
const appointments = require("./routes/appointments");
const auth = require("./routes/auth");
const cors = require("cors");

const app = express();

//Enable CORS
app.use(cors());

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

app.use("/api/v1/hospitals/", hospitals);
app.use("/api/v1/auth/", auth);
app.use("/api/v1/appointments/", appointments);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    "VacQ is running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);
