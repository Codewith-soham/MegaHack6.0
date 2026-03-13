import dotenv from 'dotenv';
dotenv.config({             //setup dotenv to load environment variables from .env file
    path: "./.env"
});

console.log("SECRET:", process.env.ACCESS_TOKEN_SECRET)
console.log("MONGO:", process.env.MONGO_URL)

import { app } from './src/app.js';
import connectDB from './src/config/db.js';

const port = process.env.PORT || 8000;   //get the port from environment variable or use default 8000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
    })