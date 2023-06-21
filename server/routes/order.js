import express from 'express'
import Order from "../models/Order.js"
import nodemailer from 'nodemailer'
// import Monument from '../models/Monument.js';
import axios from 'axios'


const router = express.Router();

// CREATE
router.post("/order",async(req,res)=>{
    // const newOrder = new Order(req.body);
    try{
        const savedOrder = await Order.insertMany(req.body,{ordered:true})
        res.status(201).json(savedOrder)

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              
              user: "niceperson2110@gmail.com",
              pass: "kqeprobsitgxmung",
              
            },
           });
        
        
           
           savedOrder.map((item)=>{
            
            transporter.sendMail({
                from: 'niceperson2110@gmail.com',
  to: `${item.userEmail}`,
  subject: `Order confirmation from Heritage.com for the ${item.monumentName}`,
  text: `Order number : ${item.uniqueId}\n Monument Name : ${item.monumentName} \n Monument State : ${item.monumentState} \n Email : ${item.userEmail} \n`,

  
            }, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

           })
           

    }catch(e){
        res.status(500).json(e);
        console.log(e);
    }
})


router.get("/order/:uniqueId/:monumentId",async(req,res)=>{
    const uniqueId = req.params.uniqueId;
    const monumentId = req.params.monumentId;
    try{
        const ok = await Order.find({
            monumentId:{
                $in:[monumentId]
            },
            uniqueId:{
                $in:[uniqueId]
            }
        })
        res.status(200).json(ok)
        
    }catch(e){
        res.status(500).json(e)
      
    }

})


router.put("/order/:uniqueId/:monumentId",async(req,res)=>{
    const uniqueId = req.params.uniqueId
    const monumentId = req.params.monumentId
    // const Changes = new Order()
    try{
        const ok = await Order.findOneAndUpdate({
            uniqueId:{
                $in:[uniqueId]
            },
            monumentId:{
                $in:[monumentId]
            },
        },{$set:{status:"used"}},{ new: true })
        // console.log(ok)
        res.status(200).json(ok)


        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              
              user: "niceperson2110@gmail.com",
              pass: "kqeprobsitgxmung",
              
            },
           });
        
        
           
           
            
            transporter.sendMail({
                from: 'niceperson2110@gmail.com',
  to: `${ok.userEmail}`,
  subject: `Confirmation of your visit at ${ok.monumentName} in ${ok.monumentState}`,
  text: `Happy Journey , Happy Holiday! , Your Order has been Successfully availed at the ${ok.monumentName} \n Stay connected with us!`,

  
            }, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

          
    }catch(e){
        res.status(500).json(e)
        console.log(e.message)
    }
})

export default router;