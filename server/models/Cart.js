import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({

    userId : {
        type:String,
        required:true,
        unique:true,
    },
    tickets:[
        {
            ticketId:{
                type:String,
                unique:true,
                required:true,

            },
            adults:{
                type:Number,
                required:true,
                default:1,

            },
            children:{
                type:Number,
                required:true,
                default:0,
            },
        

        }
    ]
},{timestamps:true},{collection:"Cart"})

const Cart = mongoose.model("Cart",cartSchema);

export default Cart;