import { handler } from '../index.js';
import { APIGatewayRequest } from '../testUtils/eventGenerator.js';

describe('Lambda Handler with Mock Data', () => {
  test('should return correct response for product request', async () => {
    const mockEvent = {
      ...APIGatewayRequest({ id: '66d850a5131c4aa410a2772c' }),
      requestContext: {
        http: {
          path: '/getProducts'
        }
      }
    };
    const mockContext = {
      callbackWaitsForEmptyEventLoop: true,
    };

    const result = await handler(mockEvent, mockContext);

    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body).toBeDefined();
    expect(body.name).toBe('samsung');
    expect(body.price).toBe('5000');
  });
});
