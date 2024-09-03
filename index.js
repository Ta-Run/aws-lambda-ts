
export const handler = async (event) => {
    const max = 10;
    
    const response = {
        statusCode: 200,
        body: `The random value is ${max}` 
    };

    return response;
};