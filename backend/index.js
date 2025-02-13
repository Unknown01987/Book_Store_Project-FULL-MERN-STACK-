import express, { request, response } from "express";
import {PORT,mongoDBURL} from  "./config.js";
import mongoose from 'mongoose';
import { Book } from "./modles/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin : 'https://localhost:3000',
//         methods : ['Get','Post' ,'Put' ,'Delete'],
//         allowedHeaders : ['Content-Type'],
//     }));

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to the page');
})
app.use('/books',booksRoutes);

mongoose.connect(mongoDBURL)
        .then(()=>{
            console.log('App is connected');
            app.listen(PORT,()=>{
                console.log(`App is listening to the port which is : ${PORT}`);
            })
        })
        .catch((error)=>{
            console.log(error);
        })