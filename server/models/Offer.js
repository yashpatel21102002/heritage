import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    title:{
        type: String,
        // require:true
    },

    desc: {
        type: String,
        require:true
    },

    img: {
        type: String,
        require:true
    },
    cupponcode: {
        type: String,
        require:true
    },
    validity: {
        type: Date,
        require: true
    }
}, { timestamps: true }, { collection: "Offers" })

const Offers = mongoose.model("Offers", offerSchema);

export default Offers;