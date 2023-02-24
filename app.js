const express = require('express');
const app = express();

const mongoose = require('mongoose');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config()

app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
     },
     store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
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
    res.json({ msg: 'hello' })
})