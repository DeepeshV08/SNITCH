import { Router } from "express";
import {validateRegisterUser} from '../validator/auth.validator.js'
import authController from '../controllers/auth.controller.js'
const authRouter = Router();

/**
 * @route POST - /api/auth/register
 * @description used to register user 
 */
authRouter.post('/register', validateRegisterUser, authController.register)
export default authRouter