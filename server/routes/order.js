import express from "express";

import Order from "../models/Order.js";
import Monument from "../models/Monument.js";
import { verifyToken } from "./verifytoken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  var ObjectId = require("mongodb").ObjectID;

  const { userEmail, monumentId, children, adult } = req.body;

  try {
    const monument = await Monument.findOne({
      _id: ObjectId("`${monumentId}`"),
    });
    const cprice = monument.price[0].child_price;
    const aprice = monument.price[0].adult_price;
    const total = cprice * req.body.children + aprice * req.body.adult;
    const name = monument.name;
    console.log(name);
    const order = await Order.create({ userEmail, name, children, adult, total });
    order.save();
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
});

router.get("/order",verifyToken,async (req,res)=>{
    const useremail=req.userEmail;
    try{
          const order=await Order.find({userEmail:useremail});
          res.status(500).send(order);
    }
    catch(e){
        res.status(404).send("There is error")
    }

})

export default router;
