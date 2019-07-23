const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRoute');


const app = express();

//middleware
app.use(morgan('dev')); //morgan used to log requests
app.use(cors());
app.use(bodyParser.urlencoded({extended: false})); //for handling form data
app.use(bodyParser.json()); //for handling json data.


//routers

app.use('/api/users', userRouter); //user api routes

//home api route
app.get('/', (req,res) => {
    return res.send("hello");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running ${PORT}`);

    mongoose.connect("mongodb://localhost/money_mgmt",
    { useNewUrlParser: true},
    () => {
        console.log("database connected!");
    });
});
