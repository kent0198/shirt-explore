import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import dalleRouter from '@route/dalle.router'
dotenv.config();

const app: Express = express();


app.set("trust proxy", 1);
app.use('/api/v1/dalle',dalleRouter)
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

