import express from 'express'
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from './db/connecttoMongoDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.listen(PORT,()=>
{   connectToMongoDB();
    console.log(`on port ${PORT}`)
})