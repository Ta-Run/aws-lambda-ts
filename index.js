import mongoose from "mongoose";

let conn = null;

const uri = 'mongodb+srv://tarunsharma11091999:wABPUZltxCpzKeQ6@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const handler = async function (event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  if (conn == null) {
    conn = mongoose.connect(uri);
    await conn;
  }

  // // Define your model only if it's not already defined
  // const M = mongoose.models.Test || mongoose.model('Test', new mongoose.Schema({ name: String }));

  const productModel = new mongoose.Schema({
    name: {
      type: String
    },
    category: {
      type: String
    },
    model: {
      type: String
    },
    price: {
      type: String
    },
    description: {
      type: String
    },
    color: {
      type: String
    },
    os: {
      type: String
    }
  })
  
  const product_db = mongoose.model('productModel',productModel)
   
  const postData = await product_db.create({
    name:"samsung",
    category:"mobile",
    model:"2012",
    price:"5000",
    description:"light wegiht slim",
    color:"black",
    os:"andriod-os"
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify('connect susscfullu'),
    result:postData
  };

  return response;
};
