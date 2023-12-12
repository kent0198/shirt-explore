import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import { ClientOptions, OpenAI } from "openai";
import Configuration from "openai";

dotenv.config();
const router = express.Router();

router.route("/").get((req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTERS" });
});

const config = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) as unknown as ClientOptions;

const openai = new OpenAI(config);
interface Image {
  data: any[];
}

router.route("/").post(async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const images = response.data as any;
    console.log(images)
    let firstImageData;
    if (
      images &&
      images.length > 0 
    ) {
      firstImageData = images[0].b64_json;
    } else {
      res.status(500).json({ message: "Invalid image data format" });
      return;
    }
    res.status(200).json({ photo: firstImageData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
