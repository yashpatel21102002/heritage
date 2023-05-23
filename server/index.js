import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import monumentRouter from './routes/monuments.js'


const app = express();
const PORT= process.env.PORT || 8000;



//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/api",monumentRouter);



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongoDB!")
})
.catch((e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})