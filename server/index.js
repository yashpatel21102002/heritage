import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import monumentRouter from './routes/monuments.js'
import userRouter from './routes/auth.js'
import ticketRouter from './routes/ticket.js'
import stripeRouter from './routes/stripe.js'


const app = express();
const PORT= process.env.PORT || 8000;



//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/api",monumentRouter);
app.use("/api",userRouter)
app.use("/api", ticketRouter)
app.use("/api", stripeRouter);


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
})
.then(()=>{
    console.log("connected to mongoDB!")
})
.catch((e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
})