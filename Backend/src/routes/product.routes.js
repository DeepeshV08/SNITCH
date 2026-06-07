import { Router } from "express";
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import productController from "../controllers/product.controller.js";
import multer from 'multer'
import { createProductValidation } from "../validator/product.validator.js";


const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize:  5 * 1024 * 1024
    }
})
const productRouter = Router()

/**
 * @route - Private - /api/products/
 * @description - used to create product
 * 
 */
productRouter.post('/', authenticateSeller, upload.array('images',7), createProductValidation, productController.createProduct)

/**
 * @route GET - /api/products/seller
 * @description  Get all products of the authenticated seller
 * @access private (seller only)
 */
productRouter.get('/seller', authenticateSeller, productController.getSellerProducts)

productRouter.get('/', productController.getAllProduct)

productRouter.get('/detail/:id', productController.getProductDetails)

productRouter.post('/:productId/varients', authenticateSeller, upload.array('images', 7) , createProductValidation, productController.addProductVariant)
export default productRouter