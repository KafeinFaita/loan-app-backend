const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config()

app.set('trust proxy', 1);

app.use(cors({
    origin: ['https://andres-loaning-app.onrender.com', 'http://localhost:5173'],
    credentials: true
}));
app.use(cookieSession({
    name: 'loaning_session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV
     }
}));

console.log(`This API is in production: ${process.env.NODE_ENV === 'production'}`)

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
    console.log(req.headers)
    console.log(req.headers['x-forwarded-for'])
    res.json({ msg: 'updated3' })
})