import mongoose from "mongoose";

let conn = null;

const uri = 'mongodb+srv://tarunsharma11091999:wABPUZltxCpzKeQ6@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const handler = async function (event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  if (conn == null) {
    conn = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await conn;
    console.log("MongoDB connected successfully");
  }

  const productSchema = new mongoose.Schema({
    name: { type: String },
    category: { type: String },
    model: { type: String },
    price: { type: String },
    description: { type: String },
    color: { type: String },
    os: { type: String }
  });

  // Ensure the collection name is explicit if you want a specific one
  const Product = mongoose.model('Product', productSchema);

  try {
    // const postData = await Product.create({
    //   name: "samsung",
    //   category: "mobile",
    //   model: "2012",
    //   price: "5000",
    //   description: "lightweight slim",
    //   color: "black",
    //   os: "android-os"
    // });

     const getDetails = await Product.find();

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Connected successfully', 
        getDetailsData : getDetails
       }),
    };

  } catch (error) {
    console.error("Error inserting data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to insert data', error: error.message }),
    };
  }
};
