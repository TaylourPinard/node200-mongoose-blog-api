const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

if(process.env.ENV === 'production'){
    mongoose.connect(process.env.MONGODB_URI);
}else{
mongoose.connect('mongodb://localhost/my-blog');
}

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

 app.get('/', (req,res)=> {res.status(200).send("its working");});

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))

module.exports= app;