import express from 'express';

import { GetProducts, AddProduct } from '../controllers/products';

// import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();

router.get('/', GetProducts);
router.post('/', AddProduct);

export default router;
