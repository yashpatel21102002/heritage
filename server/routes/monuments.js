import express, { query } from 'express'
import Monument from "../models/Monument.js";


const router = express.Router();

// CREATE
router.post("/monument",async(req,res)=>{
    const newMonument = new Monument(req.body);
    try{
        const savedMonument = await newMonument.save()
        res.status(201).json(savedMonument)

    }catch(e){
        res.status(500).json(e);
    }
})

// Delete;

router.delete("/monument/:id",async(req,res)=>{
    const id=req.params.id;

    try{
        await Monument.findByIdAndDelete(id);
        res.status(200).json("Monument has been deleted!!")

    }catch(e){
        res.status(500).json(e);
    }
})

//Get All Monuments

router.get("/monuments", async (req, res) => {
    

    const searchType = req.query.searchType;
    const searchSrc = req.query.searchSrc;


    try {

        let outputMonument;
        
        if (searchType==='REGION') {
            outputMonument = await Monument.find({
                region: {
                    $in:[searchSrc]
                }
            })
        }

        else if (searchType === 'STATE') {
            outputMonument = await Monument.find({
                state: {
                    $in:[searchSrc]
                }
            })
        }

        else if (searchType === 'CITY') {
            outputMonument = await Monument.find({
                city: {
                    $in:[searchSrc]
                }
            })
        }

        else {
            outputMonument = await Monument.find();
        }

        res.status(200).json(outputMonument);
        
    }catch(e){
        res.status(500).json(e);
    }
})

//Get Element by Id

router.get("/monument/:id",async(req,res)=>{
    
    const id=req.params.id;
    try{
        const oneMonument=await Monument.findById(id);
        res.status(200).json(oneMonument);


    }catch(e){
        res.status(500).json(e);
    }
})

//Update Monument by id

router.put("/monument/:id",async(req,res)=>{
    const id=req.params.id;

    try{
        const tobeUpdatedMonument=await Monument.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json(tobeUpdatedMonument);
    }catch(e){
        res.status(500).json(e);
    }
})


// search monument according to the search term in the search bar
router.get("/searchMonuments/:searchTerm",async(req,res)=>{
    const searchTerm = req.params.searchTerm;
    // console.log(searchTerm);
    let pipeline = [
        {
            $search:{
              index:"searchMonuments",
              text:{
                query:searchTerm,
                path:["name","city","state"]
              }
            }
          }
        

    ]
    try{
        const searchedMonuments = await Monument.aggregate(pipeline);
    res.status(200).json(searchedMonuments)

    }catch(e){
        res.status(500).json(e.message)
    }

    

})


export default router;