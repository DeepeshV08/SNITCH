import { Router } from "express";
import {validateRegisterUser} from '../validator/auth.validator.js'
import authController from '../controllers/auth.controller.js'
const authRouter = Router();


authRouter.post('/register', validateRegisterUser, authController.register)
export default authRouter