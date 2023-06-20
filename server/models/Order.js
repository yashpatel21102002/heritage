import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({

    ticketId: {
        type: String,
        // required:true,
    },

    userEmail : {
        type:String,    
        // required:true,
    },
    monumentId: {
        type:String,
        // required:true,
    },
   
            adults:{
                type:Number,
                default:1

            },
            children:{
                type:Number,
                default:0,
            },
            nationality:{
                type:String,
                default:"Indian",
            },
           
    status:{
        type:String,
        default:"unused",
    },

    total: {
        type: Number,
        default:0
    },

    date: {
        type: String,
        default:""
    }
},{timestamps:true},{collection:"OrderInfo"})

const Order = mongoose.model("Order",orderSchema);
export default Order;