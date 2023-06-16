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
        console.log("fuck you bitch")
        return res.status(401).json("you are not authenticated!")
    }
};

export default verifyToken