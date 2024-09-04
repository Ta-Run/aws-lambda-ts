import { connectToDatabase } from "./connection.js";
import {productsdb} from "./routes.js"

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();
  if (db) {
    console.log('data base connect successfully')
  }
   console.log(productsdb,'tesstt')
  const response = {
    statusCode: 200,
    body: JSON.stringify(movies),
  };

  return response;
}