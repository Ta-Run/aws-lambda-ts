export const APIGatewayRequest = (data) => {
    return {
      body: JSON.stringify(data),
      httpMethod: 'GET',
      path: '/product',
      headers: {
        "Content-Type": "application/json"
      }
    };
  };