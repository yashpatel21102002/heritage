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
    monumentName:{
        type:String,
        
    },
    monumentState:{
        type:String,
        
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
},{timestamps:true},{collection:"TicketInfo"})

const Ticket = mongoose.model("Ticket",ticketSchema);
export default Ticket;