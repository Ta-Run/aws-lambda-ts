import mongoose from "mongoose";

let conn = null;

const uri = 'mongodb+srv://tarunsharma11091999:wABPUZltxCpzKeQ6@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const handler = async function(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  if (conn == null) {
    conn = mongoose.connect(uri);
    await conn;
  }

  // Define your model only if it's not already defined
  const M = mongoose.models.Test || mongoose.model('Test', new mongoose.Schema({ name: String }));

  const doc = await M.create({name:'ram'});
  console.log(doc);

  const response = {
    statusCode: 200,
    body: JSON.stringify('connect susscfullu'),
  };

  return response;
};
