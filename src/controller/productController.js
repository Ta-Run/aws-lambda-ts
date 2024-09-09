import { Product } from "../model/productSchema.js";

export const getDetails = async () => {
    try {
        const products = await Product.find();
        return {
            statusCode: 200,
            body: JSON.stringify(products)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching products', error: error.message })
        };
    }
};

export const addProduct = async (event) => {
    try {
        const bodyData = JSON.parse(event.body);
        const newProduct = await Product.create(bodyData);
        return {
            statusCode: 200,
            body: JSON.stringify(newProduct)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error adding product', error: error.message })
        };
    }
};

export const updateProduct = async (event) => {
    try {
        console.log('update event ',event)
        const bodyData = JSON.parse(event.body);
        const updatedProduct = await Product.findOneAndUpdate({ _id: bodyData.id }, bodyData, { new: true });
        return {
            statusCode: 200,
            body: JSON.stringify(updatedProduct)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error updating product', error: error.message })
        };
    }
};

export const deleteProduct = async (event) => {
    try {
        console.log('delete event ',event)
        const { id } = JSON.parse(event.body);
        await Product.findByIdAndDelete(id);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Product deleted successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error deleting product', error: error.message })
        };
    }
};
