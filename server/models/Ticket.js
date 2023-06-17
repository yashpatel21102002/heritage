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
                default:"INDIAN",
            },
           
    status:{
        type:String,
        default:"unused",
    }
},{timestamps:true},{collection:"TicketInfo"})

const Ticket = mongoose.model("Ticket",ticketSchema);
export default Ticket;