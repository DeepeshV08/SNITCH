import { Router } from "express";
import {validateRegisterUser, validateLoginUser} from '../validator/auth.validator.js'
import authController from '../controllers/auth.controller.js'
import passport from "passport";
import { config } from "../config/config.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
const authRouter = Router();

/**
 * @route POST - /api/auth/register
 * @description used to register user 
 */
authRouter.post('/register', validateRegisterUser, authController.register)

authRouter.post('/login',validateLoginUser,authController.login)

authRouter.get('/google',
    passport.authenticate('google', {scope: ["profile",'email']}))

authRouter.get('/google/callback', 
    passport.authenticate('google', {session: false,failureRedirect:config.NODE_ENV == 'development' ? 'http:/localhost:5173/login' : '/login'}), authController.googleCallback)


authRouter.get('/get-me',authenticateUser, authController.getMe)

export default authRouter