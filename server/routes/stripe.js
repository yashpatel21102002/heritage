const router = express.Router();
import express from 'express'
import Stripe from 'stripe';
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51NDTd8SCEbCeAi26D1xRVsVFeB5f1Fz5nZsXibaZJCf6YPLGCPQG0pxFBcRmKNBuSK1tAWESfjuJRF514qVUWewD00z32vtH0o";
const stripe = new Stripe(KEY);

router.post("/payment", async (req, res) => {

  try{
  const { token, amount } = req.body;

     const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      payment_method_types: ['card'],
      payment_method_data: {
        type: 'card',
        card: {
          token: token,
        },
      },
      confirm: true,
   });
  
   res.status(200).json(paymentIntent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }

});
export default router;