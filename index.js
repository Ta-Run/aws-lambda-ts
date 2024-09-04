import mongoose from "mongoose";

let conn = null;

const uri = 'mongodb+srv://tarunsharma11091999:wABPUZltxCpzKeQ6@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const productSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
  model: { type: String },
  price: { type: String },
  description: { type: String },
  color: { type: String },
  os: { type: String }
});

// Check if the model is already defined to avoid redefining it
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export const handler = async function (event, context) {
  console.log('events console======',event.requestContext)
  context.callbackWaitsForEmptyEventLoop = false;

  if (conn == null) {
    conn = mongoose.connect(uri);
    await conn;
    console.log("MongoDB connected successfully");
  }

  try {

    var response;
    if (event.requestContext.http.path === '/getProducts') {
      const getDetails = await Product.find();

      console.log(getDetails,'letsCheck routs')

      response = {
        statusCode: 200,
        body: getDetails
      }
    }

    if (event.requestContext.http.path !== '/getProducts') {
      response = {
        statusCode: 404,
        body: JSON.stringify('invalid request')
      }
    }

    if (event.requestContext.path === 'api/postProducts') {
      const postData = await Product.create({
        name: "samsung",
        category: "mobile",
        model: "2012",
        price: "5000",
        description: "lightweight slim",
        color: "black",
        os: "android-os"
      });

      response = {
        statusCode: 200,
        body: postData
      }
    }
    
    return response

  } catch (error) {
    console.error("Error inserting data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to insert data', error: error.message }),
    };
  }
};
