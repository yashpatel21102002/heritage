import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    reruired: true,
  },

  name: {
    type: String,
    required: true,
  },

  children: {
    type: Number,
    required: true,
  },
  adult: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
    default: 100,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
