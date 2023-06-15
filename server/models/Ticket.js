import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
    userEmail : {
        type:String,
    
        required:true,
    },
    monumentId: {
        type:String,
       
        required:true,
    },
    ticket:[
        {
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
            nationality:{
                type:String,
                default:"INDIAN",
            },

           
        }
        
    ],
    // amount:{
    //     type:Number,
    //     required:true,
    // },
    status:{
        type:String,
        default:"unused",
    }
},{timestamps:true},{collection:"TicketInfo"})

const Ticket = mongoose.model("Ticket",ticketSchema);
export default Ticket;