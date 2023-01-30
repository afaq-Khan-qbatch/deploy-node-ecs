import express from 'express';
import auth from './auth';
import user from './users';
import product from './products';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();
router.get('/', async(req, res) => res.json('App is working fine.'));
router.use('/auth', auth);
router.use('/users', authenticateAuthToken, user);
router.use('/products', product);

export default router;
