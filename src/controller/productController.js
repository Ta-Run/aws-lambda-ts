
const {Product} = require('../model/productSchema.js')

exports.getDetails = async () => {
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

exports.addProduct = async (event) => {
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

exports.updateProduct = async (event) => {
    try {
        console.log(event['queryStringParameters'])
        console.log(event.queryStringParameters._id,'parmas iddd')
        const bodyData = JSON.parse(event.body);
        const updatedProduct = await Product.findOneAndUpdate({ _id: event.queryStringParameters._id }, bodyData, { new: true });
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

exports.deleteProduct = async (event) => {
    try {

        await Product.findByIdAndDelete({_id:event.queryStringParameters._id});
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

exports.getProductById = async (event) => {
    try {
        const data = await Product.findById({_id:event.queryStringParameters._id});
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error deleting product', error: error.message })
        };
    }
};
