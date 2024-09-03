import { APIGatewayProxyEventV2, Handler, APIGatewayProxyResultV2 } from 'aws-lambda';
// import * as _ from 'lodash'

export const handler: Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2> = async (event): Promise<APIGatewayProxyResultV2> => {
    const max = 10;
    // const val = _.random(max);

    const response = {
        statusCode: 200,
        body: `The random value is ${max}` // Adjusted the message to be more meaningful
    };

    return response;
};