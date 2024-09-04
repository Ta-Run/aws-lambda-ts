import { MongoClient } from "mongodb";

const MONGODB_URI = "your_mongodb_connection_string";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB Atlas');

    const db = client.db("products_Db");
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
    throw error;
  }
}

export { connectToDatabase };
