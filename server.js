//imports
import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

//app config
const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}));
app.use(cors());

//routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING');
});

//port listen
const PORT = app.listen(process.env.PORT || 5000, () => {
    console.log('app is running on port '+ (process.env.PORT || 5000))
})

//mongoDB connection
mongoose.connect(process.env.CONNECTION_URL,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });