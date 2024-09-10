import { getDetails, addProduct, updateProduct, deleteProduct, getProductById } from "../controller/productController.js";
export const routeHandler = async (event) => {
  const { http } = event.requestContext || {}; // Default to empty object if undefined

  if (!http) {
    return {
      statusCode: 400,
      body: JSON.stringify('Invalid request context')
    };
  }

  switch (http.path) {
    case '/getProducts':
      return await getDetails();
    case '/addProduct':
      return await addProduct(event);
    case '/updateProduct':
      return await updateProduct(event);
    case '/deleteProduct':
      return await deleteProduct(event);
    case '/getProductByID':
      return await getProductById(event);
    default:
      return {
        statusCode: 404,
        body: JSON.stringify('Invalid request')
      };
  }
};
