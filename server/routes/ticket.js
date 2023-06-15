import express from 'express'
import Ticket from '../models/Ticket.js'

const router = express.Router();

router.post("/ticket",async(req,res)=>{
    const newTicket = new Ticket(req.body);
    try{
        const savedTicket = await newTicket.save()
        res.status(201).json(savedTicket)

    }catch(e){
        res.status(500).json(e);
    }
})

router.get("/tickets", async (req, res) => {
    const OutputTickets = await Ticket.find();

    res.status(200).json(OutputTickets);
})

router.get("/ticket/:id", async (req, res) => {
    const id = req.params.id;

     try{
        const oneTicket=await Ticket.findById(id);
        res.status(200).json(oneTicket);


    }catch(e){
        res.status(500).json(e);
    }
})

router.delete("/ticket/:id", async (req, res) => {
    const id = req.params.id;

    try{
        await Ticket.findByIdAndDelete(id);
        res.status(200).json("Monument has been deleted!!")

    }catch(e){
        res.status(500).json(e);
    }
})

router.put("/ticket/:id",async(req,res)=>{
    const id=req.params.id;

    try{

        const tobeUpdatedTicket=await Ticket.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json(tobeUpdatedTicket);


    }catch(e){
        res.status(500).json(e);
    }
})

export default router;