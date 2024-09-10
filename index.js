import { connectToDatabase } from "./src/connection/dbConnection.js";
import { routeHandler } from "./src/routes/productRoute.js";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  await connectToDatabase();

  return await routeHandler(event);
};


