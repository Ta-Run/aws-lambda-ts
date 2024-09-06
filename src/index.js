import { connectToDatabase } from "./database/db.js";
import { routeHandler } from "./routes/productRoutes.js";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connectToDatabase();

  return await routeHandler(event);
};
