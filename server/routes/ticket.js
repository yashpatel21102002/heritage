import express, { json } from 'express'
import Ticket from '../models/Ticket.js'
import {verifyToken,verifyGetRequest} from './verifyToken.js';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const router = express.Router();

router.post("/ticket",async(req,res)=>{
    const token = req.body.token;
    
    const data = req.body.monumentId;
    console.log(token,data)
   
    const decode_email = await jwt.decode(token).email;

    
  
    // const monumentId = req.body.data.monumentId;
    console.log(decode_email)
    const newTicket = new Ticket({userEmail:decode_email,monumentId:data});
    console.log(newTicket)
    try{
        const savedTicket = await newTicket.save()
        res.status(201).json(savedTicket)

    }catch(e){
        return res.status(500).json(e);
    }
})

router.get("/ticket/:token",verifyGetRequest,async (req, res) => {
    // const ttoken = req.params.token
    const token = req.params.token
    console.log(token)
    const decode_email = await jwt.decode(token).email;
    console.log(decode_email,token)
    try{
        const OutputTickets = await Ticket.find({
            userEmail:{
                $in:[decode_email]
            }
        });
    
        return res.status(200).json(OutputTickets);

    }catch(e){
        return res.status(500).json(e);
    }
    
})

router.get("/ticket/:token/:monumentId" , async(req,res)=>{

    const token =  req.params.token;
    const decode_email = await jwt.decode(token).email;
    const monumentId = req.params.monumentId
    try{
        const arr = await Ticket.find({
            userEmail:{
                $in:[decode_email],
            },
            monumentId:{
                $in:[monumentId],
            }
        })
        if(arr.length > 0){
            res.status(200).json(true)
        }
        else{
            res.status(200).json(false)
        }
    }catch(e){
        return res.status(500).json(e)
    }
})


router.delete("/ticket/:id",verifyToken, async (req, res) => {
    const id = req.params.id;

    try{
        await Ticket.findByIdAndDelete(id);
        res.status(200).json("Monument has been deleted!!")

    }catch(e){
        res.status(500).json(e);
    }
})

router.delete("/ticket",verifyToken, async (req, res) => {
    const token = req.body.token;
    // const ttoken=JSON.parse(token)
    const decode_email = await jwt.decode(token).email;

    try{
        await Ticket.deleteMany({ email: decode_email });
        res.status(200).json("ticket has been deleted!!")

    }catch(e){
        res.status(500).json(e);
    }
})


router.put("/ticket/:id",verifyToken,async(req,res)=>{
    // const monumentId = req.params.monumentId;
    // const monumentId = new mongoose.Types.ObjectId(req.params.monumentId);
    const id = req.params.id;
    
    //  console.log("Updating ticket:", monumentId);
    console.log("Request body:", req.body);
    const { adults, children, nationality, total ,date} = req.body;

    const updatedFields = {
      adults,
      children,
      nationality,
      total,
      date
    };

    try{

        const tobeUpdatedTicket = await Ticket.findByIdAndUpdate(id, { $set: updatedFields}, { new: true });
        
        console.log("Updated ticket:", tobeUpdatedTicket);
        res.status(200).json(tobeUpdatedTicket);

    }catch(e){
        res.status(500).json(e);
    }
})



export default router;