const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const url = "mongodb+srv://Rajesh:123Rajesh@cluster0.6nldq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const restaurents = require('./src/routes/restaurent-route');

mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on("open", function () {
    {
        console.log(`
    ###########################################
    `);
        console.log(`         ✅"Connected to mongo server." ✅
    ###########################################`)
    }
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

module.exports = (app) => {
    app.use('/restaurents', restaurents);

}