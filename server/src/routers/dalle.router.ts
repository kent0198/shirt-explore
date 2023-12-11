import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import { ClientOptions, OpenAI } from "openai";
import Configuration from "openai";

dotenv.config();
const router = express.Router();

const config = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) as unknown as ClientOptions;

const openai = new OpenAI(config);

router.route("/").get((req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTERS" });
});

interface Image {
  data: { b64_json: string }[];
}

router.route("/").post(async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    console.log('1')
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log('2')
    const images: Image[] = response.data as Image[];
    const firstImageData = images[0]?.data[0]?.b64_json;
    console.log("First Image Data:", firstImageData);
    res.status(200).json({ photo: firstImageData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
