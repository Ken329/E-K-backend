import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import memoRouter from "./routes/memoRoute";
import todoRouter from "./routes/todoRoute";

dotenv.config();

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: [process.env.BASE_URL, process.env.DEPLOYED_URL],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/api', memoRouter);
app.use('/api', todoRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening to port ${process.env.PORT || 8080}`));
