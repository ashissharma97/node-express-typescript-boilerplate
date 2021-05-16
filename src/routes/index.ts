import express, { Request, Response } from 'express';
import logger from '../controllers/logger';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    logger.info(`GET /`);
    return res.status(200).send('API is working');
});

export default router;
