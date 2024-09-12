const mongoose = require('mongoose')

let conn = null;
const uri = 'mongodb+srv://tarunsharma11091999:wABPUZltxCpzKeQ6@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

exports.connectToDatabase = async () => {
    if (conn == null) {
        conn = mongoose.connect(uri)
        await conn;
        console.log("MongoDB connected successfully");
    }
};
