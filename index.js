import { connectToDatabase } from "./connection.js";

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase();
  if (db) {
    console.log('data base connect successfully')
  }
  //  console.log(productsdb,'tesstt')
  const response = {
    statusCode: 200,
    body: 'data added succesfully',
  };

  return response;
}