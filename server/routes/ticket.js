import express from 'express'
import Ticket from '../models/Ticket.js'
import verifyToken from './verifyToken.js';
import jwt from 'jsonwebtoken'

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

router.get("/ticket", verifyToken,async (req, res) => {
    const token = req.body.token;
    const decode_email = await jwt.decode(token)?.email;
    try{
        const OutputTickets = await Ticket.find({
            userEmail:{
                $in:[decode_email]
            }
        });
    
        res.status(200).json(OutputTickets);

    }catch(e){
        res.status(500).json(e);
    }
    
})

router.get("/ticket/:id", verifyToken,async (req, res) => {
    const id = req.params.id;

     try{
        const oneTicket=await Ticket.findById(id);
        res.status(200).json(oneTicket);
    }catch(e){
        res.status(500).json(e);
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

router.put("/ticket/:id",verifyToken,async(req,res)=>{
    const id=req.params.id;

    try{

        const tobeUpdatedTicket=await Ticket.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json(tobeUpdatedTicket);


    }catch(e){
        res.status(500).json(e);
    }
})

export default router;