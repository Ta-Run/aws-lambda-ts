import { postProductDeatails } from "./controller.js";

const productsdb = async (body) => {
  try {
    const result = await postProductDeatails(body);
    return result;
  } catch (error) {
    console.error("Error in productsdb", error);
    throw error;
  }
};

export { productsdb };
