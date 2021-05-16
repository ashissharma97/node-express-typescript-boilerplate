import express, { Application } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import homeRoute from './routes/index';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT;

/*
    Express Middleware
*/

app.use(compression());
app.use(helmet());

/*
    App Routes
*/

app.use('/api', homeRoute);

app.listen(PORT, () => console.log('Service is listening on PORT:', PORT));
