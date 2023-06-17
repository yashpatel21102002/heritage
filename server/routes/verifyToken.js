import jwt from 'jsonwebtoken'
// middle ware to verify the token 

const verifyToken = (req, res, next) => {
    const authHeader = req.body.token;
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err)  return res.status(403).json("Token is not valid");
            req.user = user;
           next()
        })

    } else {
        console.log("ok i am very dangourous error")
        return res.status(401).json("you are not authenticated!")
    }
};

const verifyGetRequest = (req,res,next) => {
    const authHeader_dup = req.params.token;
    const authHeader = JSON.parse(authHeader_dup);
    if(authHeader){
        const token = authHeader;
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err) return res.status(403).json("token is not valid");
            req.user = user;
            next();
        })
    }else{
        console.log("ok i am very dangourous error")
        
        return res.status(401).json("you are not authenticated!")
    }
}

export {verifyToken,verifyGetRequest}