export const APIGatewayRequest = (data) => ({
  body: JSON.stringify(data),
  requestContext: {
    http: {
      path: '/getProducts' // Or any path relevant to your function
    }
  },
  // Other properties as required
});
