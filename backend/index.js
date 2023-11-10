import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './db/connectionDB';
import authRoutes from './routers/userRoutes.js'
import listRoutes from "./routers/listRoutes.js"


// config
const app = express();
dotenv.config({path:'./env'})

const port = process.env.PORT || 300


// middlewares
app.use(cors({
    origin:process.env.ORIGIN,
}))

app.use(helmet())

// router
app.use('/auth',authRoutes)
app.use('/task',listRoutes)


connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("server connect");
    })
}).catch((error)=>{
    console.log("the ERROR is", error);
    process.exit(1)
})

