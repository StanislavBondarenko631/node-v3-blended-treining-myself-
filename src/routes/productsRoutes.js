import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
} from '../controllers/productsController.js';

const router = Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', createProduct);

export default router;
