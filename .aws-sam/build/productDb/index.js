
const {connectToDatabase} = require ("./connection/dbConnection.js");
const {routeHandler} = require("./routes/productRoute.js")

exports.handler = async (event, context) => {
  console.log('events',event)
  context.callbackWaitsForEmptyEventLoop = false;
  
  await connectToDatabase();


  return await routeHandler(event);
  
};


