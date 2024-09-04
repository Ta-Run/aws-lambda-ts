import { connectToDatabase } from "./connection.js";
import { productsdb } from "./routes.js";

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();
  if (!db) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to connect to the database" }),
    };
  }

  console.log("Database connected successfully");

  try {
    // Assuming the body is passed as a JSON string in the event
    const body = JSON.parse(event.body);

    // Call the productsdb function
    const result = await productsdb(body);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error handling request", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
}
