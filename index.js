import { MongoClient } from "mongodb";
  console.log('mongoclient',MongoClient)

const MONGODB_URI =
  "mongodb+srv://tsharma:NLX8qfgpL1EzlJlo@cluster0.akmqi8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  console.log(MONGODB_URI)

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
    const db = client.db("sample_mflix");

    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
    throw error;
  }
}


export async function handler(event, context) {

  /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
  context.callbackWaitsForEmptyEventLoop = false;

  // Get an instance of our database
  const db = await connectToDatabase();

  // Make a MongoDB MQL Query to go into the movies collection and return the first 20 movies.
  const movies = await db.collection("movies").find({}).limit(20).toArray();

  const response = {
    statusCode: 200,
    body: JSON.stringify(movies),
  };

  return response;
}