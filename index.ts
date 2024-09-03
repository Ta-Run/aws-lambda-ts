import express from 'express';
import serverless from 'serverless-http';

const app = express()
const port = 9500

app.get('/check', (req:any, res:any) => {
    console.log(`server start ${port}`)
    res.send('server began on AWS Lambda');
});

export const handler = serverless(app);
