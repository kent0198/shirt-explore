import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
import { OpenAI} from 'openai';
import Configuration from "openai"

dotenv.config()
const router=express.Router();

const config= new Configuration({
    apiKey:process.env.OPENAL_API_KEY
})
const openai= new OpenAI(config)


router.route('/').get((req:Request,res:Response)=>{
    res.status(200).json({message:'Hello from DALL.E ROUTERS'})
})
export default router
