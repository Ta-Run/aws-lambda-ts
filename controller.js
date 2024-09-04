import ProductsSchema from './productSchema'
const productsdb = async (body) => {
  try {
    const result = await ProductsSchema.create(body);
    return result;
  } catch (error) {
    console.error("Error in productsdb", error);
    throw error;
  }
};

export { productsdb };
