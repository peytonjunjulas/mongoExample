const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//routes
app.get('/', (req,res) => {
    res.send('We are home');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db');
});
//how to start listening to server 
app.listen(3000);
