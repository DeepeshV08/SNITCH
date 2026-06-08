import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {validateAddToCart, validateIncrementCartItemQuantity} from "../validator/cart.validator.js"
import cartController from "../controllers/cart.controller.js";
const cartRouter = Router()


cartRouter.post('/add/:productId/:variantId', authenticateUser, validateAddToCart, cartController.addToCart)

cartRouter.get('/', authenticateUser, cartController.getCart)

cartRouter.patch('/quantity/increment/:productId/:variantId', authenticateUser, validateIncrementCartItemQuantity, cartController.incrementCartItemQuantity)
export default cartRouter