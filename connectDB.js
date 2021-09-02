const mongoose = require("mongoose");

const connectDB = () => {
    // connect with DB
    // mongoose.connect("mongodb+srv://abhi:VMzXuQzKFm8rcJ5@votechain-user-node.toapt.mongodb.net/scaler-fraud?retryWrites=true&w=majority", 
    mongoose.connect("mongodb+srv://cloudShare:oGpqkGs8mr03RYYJ@cluster0.a9u1b.mongodb.net/airdrop?retryWrites=true&w=majority", 
        { 
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        const connection = mongoose.connection;

        connection.once("open", () => {
            console.log("Connected");
        });
}

module.exports = connectDB