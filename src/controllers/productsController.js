import createHttpError from 'http-errors';

import { Product } from '../models/product.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
      throw createHttpError(404, 'Product not found');
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
