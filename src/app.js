import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, //allowed origins
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //keep it low for security reasons 
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static('public')) //to serve static files
app.use(cookieParser()) //to parse cookies

//routes
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

export { app }