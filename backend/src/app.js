import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express() 

//cors config -> allows frontend to run on different port/domain 
app.use(cors
    (
        {
            origin: process.env.CORS_ORIGIN || "http://localhost:8000",
            credentials: true
        }
    )
)

//common middleware config 
app.use(express.json({limit: "10mb"})) //parses incoming json data from req.body - supports larger payloads for profiles, images, etc.
app.use(express.urlencoded({extended: true})) //parses urlencoded data from forms - supports larger payloads for profiles, images, etc.
app.use(cookieParser())  //parses cookies sent by the client required to read jwt refresh tokens

export { app }