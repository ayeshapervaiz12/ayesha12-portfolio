const mongoose = require("mongoose");


const connectDB = () => {
    mongoose.connect(process.env.mongoDB_URL).then(() => {
        console.log(`DB CONNECTED SUCCESSFULLY WITH SERVER ${mongoose.connection.host} `);
    }).catch((err) => {
        console.log(`error occured in DB : ${err}`);
    })



}
module.exports = connectDB; 