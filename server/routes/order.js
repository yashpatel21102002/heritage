import express from 'express'
import Order from "../models/Order.js"


const router = express.Router();

// CREATE
router.post("/order",async(req,res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)

    }catch(e){
        res.status(500).json(e);
        console.log(e);
    }
})

export default router;