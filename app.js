const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config()

app.use(cors({
    origin: ['https://andres-loaning-app.onrender.com', 'http://localhost:5173'],
    credentials: true,
}));
app.use(cookieSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
        secure: process.env.NODE_ENV === "production",
     }
}));

console.log(process.env.NODE_ENV)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, function(){
            console.log("Listening on port " + process.env.PORT);
        });
    }).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({ msg: 'updated' })
})