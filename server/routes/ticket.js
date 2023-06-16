import express from 'express'
import Ticket from '../models/Ticket.js'
import {verifyToken,verifyGetRequest} from './verifyToken.js';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/ticket",verifyToken,async(req,res)=>{
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
    const ttoken = req.params.token
    const token = JSON.parse(ttoken)
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



router.delete("/ticket/:id",verifyToken, async (req, res) => {
    const id = req.params.id;

    try{
        await Ticket.findByIdAndDelete(id);
        res.status(200).json("Monument has been deleted!!")

    }catch(e){
        res.status(500).json(e);
    }
})

router.put("/ticket/:monumentId/:token",verifyGetRequest,async(req,res)=>{
    const monumentId=req.params.monumentId;


    try{

        const tobeUpdatedTicket=await Ticket.findByIdAndUpdate({monumentId:monumentId},{$set:req.body},{new:true});
        res.status(200).json(tobeUpdatedTicket);


    }catch(e){
        res.status(500).json(e);
    }
})

export default router;