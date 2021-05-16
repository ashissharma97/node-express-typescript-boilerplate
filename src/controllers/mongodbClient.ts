import { MongoClient, Db } from 'mongodb';
import logger from '../controllers/logger';

const DB_URL = process.env.MONGODB_URL;

const DB_NAME = process.env.MONGODB_NAME;

let db: Db;

MongoClient.connect(DB_URL, (err, client) => {
    db = client.db(DB_NAME);
});

export default db;
