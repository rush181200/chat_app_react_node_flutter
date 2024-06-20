import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res) =>{
    try{
        const {fullName, username, password, confirmpassword,gender} = req.body
        if(password!=confirmpassword){
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User already exists"})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/9?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/83?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPass,
            gender,
            profilePic: gender === "male" ? boyProfilePic:girlProfilePic
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic,
        })
        }else{
            res.status(400).json({error:"Invalid User Data"})
        }

    }catch(e){
        console.log("error",e.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const login = async (req,res)=>{
    try {
        const {username,password} =req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Username or password"});
        }       
        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        })

    } catch (error) {
        console.log("error",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};