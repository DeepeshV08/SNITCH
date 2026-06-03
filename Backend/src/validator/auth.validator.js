import {body,validationResult} from 'express-validator';

function validateRequest(req, res, next){

    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        next();
    }

export const validateRegisterUser = [
    body('fullname')
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3 })
        .withMessage("Full name must be at least 3 characters"),

    body('email')
        .isEmail()
        .withMessage("Invalid email format"),

    body('contact')
        .notEmpty()
        .withMessage("Contact is required")
        .matches(/^\d{10}$/)
        .withMessage("Contact must be a 10-digit number"),

    body('password')
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")
        .matches(/[!@#$%^&*]/)
        .withMessage("Password must contain at least one special character"),

        body('isSeller')
        .isBoolean().withMessage("isSeller is must be a boolean value"),
        
        validateRequest
];