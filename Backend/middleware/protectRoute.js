import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        if(!decoded){
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({ error: "user not found"});
        }

        req.user = user

        next();

    } catch (error) {
        console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute