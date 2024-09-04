

export async function handler(event, context) {

  context.callbackWaitsForEmptyEventLoop = false;

  const response = {
    statusCode: 200,
    body: JSON.stringify('lambda function is start'),
  };

  return response;
}