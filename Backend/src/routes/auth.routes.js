import { Router } from "express";
import {validateRegisterUser, validateLoginUser} from '../validator/auth.validator.js'
import authController from '../controllers/auth.controller.js'
import passport from "passport";
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
    passport.authenticate('google', {session: false}), authController.googleCallback)

export default authRouter