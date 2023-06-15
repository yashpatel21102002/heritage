import express from 'express'
import User from '../models/User.js'
//import bycrypt password hashing library
// import bycrypt from 'bycrypt'
//jwt for authorization
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()



// CREATE USER FIRSt
// Means register

// to create the user we require the hashing of the password 
// we cant store password without hashing can be danger

router.post("/auth/register",async (req,res)=>{
    let {name,email,password,contact} = new User(req.body);
    try{
        //let's check first any other person with this email is already present or not 
        // if present than we will not allow this user to register
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(400).json({error:"user already exist"})
        }

        // we will require hashing technique for password 
        const saltRounds = 10;
        const hashedPassword = await bycrypt.hash(password , saltRounds);

        
        const user = await User.create({name ,email,contact,password:hashedPassword });
        
        
        res.status(201).json(user);

        


    }catch(e){
    
        res.status(500).json(e)
    }
})

// sign in // Login 
router.post("/auth/login",async(req,res)=>{
    const user = new User({
        email : req.body.email,
        password: req.body.password
    })

    try{
        //first we will check that  what user is saying about the email is true or not?
        const checkUser = await User.findOne({email:user.email})

        if(!checkUser){
            return res.status(400).json({error:"User not found"})
        }
        else if(await bycrypt.compare(user.password , checkUser.password)){
            //in this condition we can see that user is successfully logged in 
            //so we have to provide session to this user so he/she can directly logged in
            //we will use jwt for this process
            const accessToken = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"21d"})
            if(res.status(201)){
                return res.json({status:"ok",accessToken:accessToken})
            }
            else{
                return res.json({error:"error in accesstoken"})
            }


        }
        else{
            return res.status(400).json({error:"Wrong Credentials"})
        }


    }catch(e){
        res.status(500).json(e);
    }
})


// router.get('/auth/user', (req, res) => {
//   // Assuming user details are stored in req.user
//   const userDetails = req.user;

//   res.json(userDetails);
// });


export default router;