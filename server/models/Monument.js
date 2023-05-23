import mongoose from 'mongoose'

const monumentSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        

    },
    desc:{
        type:String,
        default:"lorem50aojmpxepjfpapkfpkfpkafppfkkkkfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkddddddddddddddddddddddddddddddddddddddddfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjffjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        
    },
    img:{
        type:Array,
        required:true,


    },
    
    price:[
        {   
            nationality:{
            type:String,
            // required:true,
            default:"INDIAN"
           },
            adult_price:{
                type:Number,
                required:true,
            },
            child_price:{
                type:Number,
                required:true,
            }
        }
    ],
    

    
    location:{
        type:String,
        required:true,

    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    region:{
        type:String,
        required:true,
    },
    distance:[
        {
            bus:{
                type:Number,

            },
            air:{
                type:Number,
            },
            rail:{
                type:Number,
            },
            
        }
    ],
    opening:{
        type:String,
        required:true,
    },
    whether:{
        type:String,
    }
    ,
    facility:{
        type:String,
    },
    accomodation:{
        type:String,
    },
    contact:[
        {
            Name:{
                type:String,

            },
            mobile:{
                type:Number,
            },
            email:{
                type:String,
            },
            extra:{
                type:String,
            }
        }
    ],
   



})

const Monument = mongoose.model("Monument",monumentSchema);
export default Monument;