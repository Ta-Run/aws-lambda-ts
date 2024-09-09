# aws-lambda-ts
Here's a sample `README.md` file that you can use for your GitHub repository, based on your project setup:

---

# AWS Lambda Node.js API with API Gateway

This project demonstrates the use of **AWS Lambda** and **API Gateway** to build a CRUD API for managing products. The API is written in **Node.js** and includes endpoints for creating, reading, updating, and deleting product data. Additionally, it integrates with **CloudWatch** for logging and uses **GitHub Actions** for CI/CD deployment.

## Features

- **AWS Lambda** for serverless API endpoints
- **API Gateway** for HTTP method routing
- **CloudWatch** for logging and monitoring
- **GitHub Actions** for continuous integration and deployment

## Endpoints

Below are the available API endpoints:

1. **GET /getProducts**  
   Retrieves a list of all products.

2. **POST /addProducts**  
   Adds a new product to the database.

3. **PUT /updateProduct**  
   Updates an existing product based on the provided product ID.

4. **GET /getProductDetailsById/{id}**  
   Retrieves details of a product by its ID.

5. **DELETE /deleteProducts/{id}**  
   Deletes a product by its ID.

## Setup and Installation

### Prerequisites

- **Node.js** (v12 or higher)
- **AWS CLI** configured with the appropriate permissions
- **AWS Lambda**
- **API Gateway**
- **CloudWatch**
- **GitHub Actions** for CI/CD

### Steps to Set Up Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure AWS Credentials**:
   Ensure your AWS CLI is configured with credentials that have access to Lambda, API Gateway, and CloudWatch.

4. **Deploy to AWS Lambda**:
   You can deploy the Lambda function manually or use the GitHub Actions CI/CD pipeline for deployment.

### Environment Variables

You may need to set the following environment variables in your AWS Lambda function:

- `DB_HOST`@cluster0.1driiqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0:
- `DB_USER`:tarunsharma11091999.
- `DB_PASSWORD`: wABPUZltxCpzKeQ6.
- `DB_NAME`: productsdb.

### CI/CD with GitHub Actions

This project uses GitHub Actions for continuous integration and deployment. The workflow file is located in `.github/workflows/deploy.yml` and is triggered on every push to the main branch.

The GitHub Actions workflow automates the following tasks:

- Linting and testing the code.
- Packaging the Lambda function.
- Deploying the code to AWS Lambda.

### Logs and Monitoring

- All Lambda function logs are captured and monitored using **CloudWatch**.
- You can view the logs in the AWS CloudWatch console.

## Usage

- **Testing with Postman or cURL**:
  You can test the API endpoints using Postman or cURL by sending requests to the appropriate API Gateway URL.

- Example cURL requests:
  
  **Get Products**:
  ```bash
  curl -X GEThttps://7czje40kh6.execute-api.us-east-1.amazonaws.com/getProducts
  ```

  **Add Product**:
  ```bash
  curl -X POST https://https://7czje40kh6.execute-api.us-east-1.amazonaws.com/addProducts
  -H 'Content-Type: application/json' \
  -d '{"name": "Product Name", "price": 10.99}'
  ```

## License

This project is licensed under the MIT License.
