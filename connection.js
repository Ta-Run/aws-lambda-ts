import { MongoClient } from "mongodb";
  console.log('mongoclient',MongoClient)

const MONGODB_URI =
  "mongodb+srv://tsharma:NLX8qfgpL1EzlJlo@cluster0.akmqi8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    // Connect to our MongoDB database hosted on MongoDB Atlas
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Optional: timeout after 5 seconds
    });
    console.log('Connected to MongoDB Atlas');

    // Specify which database we want to use
    const db = client.db("products_Db");

    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
    throw error;
  }

}

export {connectToDatabase}

