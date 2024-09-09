import { connectToDatabase } from "./src/connection/dbConnection.js";
import { routeHandler } from "./src/routes/productRoute.js";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
   console.log('before add connection ')
  await connectToDatabase();

  return await routeHandler(event);
  // const response = {
  //   status:200,
  //   body:JSON.stringify('it is work')

  // } 
  // return  response 
};
