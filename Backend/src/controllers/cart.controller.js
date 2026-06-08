import { stockOfVariant } from "../dao/product.dao.js";
import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

export const addToCart = async (req,res) => {

    const {productId , variantId} = req.params

    const product = await productModel.fineOne({
        _id: productId,
        "variant._id": variantId
    })

    if(!product){
        return res.status(404).json({
            message: "Product or variant not found",
            success: false
        })
    }
    const stock = await stockOfVariant(productId , variantId)

    const cart = (await cartModel.findOne({user : req.user._id})) || await cartModel.create({user: req.user._id})

    const isProductAlreadyInCart = cart.items.some(item => item.product.toString() === productId && item.variant?.toString() === variantId)
    
    if(isProductAlreadyInCart){
        const quantityinCart = cart.items.fine(item => item.product.toString() === productId && item.variant?.toString() === variantId)

        if(quantityinCart + quantity > stock){
            return res.status(400).json({
                message: `Only ${stock- quantityinCart} items left in stock, ans you already have ${quantityinCart}.`,
                success: false
            })
        }

        await cartModel.findOneAndUpdate({
            user: req.user._id , 'items.product':productId, 'items.price.variant': variantId
        },{
            $inc:{'item.$.quantity': quantity}
        },{
            new: true
        }
    )
    return res.status(200).json({
        message: "Cart updated successfully.",
        success: true
    })
    }

    if(quantity > stock){
        return res.status(400).json({
            message: `Only ${stock} items left in stock`,
            success: true
        })
    }

    cart.items.push({
        product: productId,
        variant: variantId,
        quantity,
        price: product.price
    })

    await cart.save()

    return res.status(200).json({
        message: "Product added to cart successfully.",
        success: true
    })
}

export const getCart = async (req,res) => {
    const user = req.user

    let cart = await cartModel.findOne({user: user._id}).populate('items.product')
    if(!cart){
        cart = await cartModel.create({user: user._id})
    }

    return res.status(200).json({
        message: "Cart fetched successfully.",
        success: true,
        cart
    })
}

export async function incrementCartItemQuantity(req,res){
    const {productId , variantId} = req.params
    
    const product = await productModel.fineOne({
        _id: productId,
        "variant._id": variantId
    })

    if(!product){
        return res.status(404).json({
            message: "Product or variant not found",
            success: false
        })
    }
    const stock = await stockOfVariant(productId , variantId)

    const cart = await cartModel.findOne({user : req.user._id})

    if(!cart){
        return res.status(404).json({
            message: "Cart not found",
            success: false
        })
    }
    const itemQuantityInCart = cart.items.find(item => item.product.toString() === productId && item.variant?.toString() === variantId)?.quantity || 0

    if(itemQuantityInCart + 1 > stock){
        return res.status(400).json({
            message: `Only ${stock - itemQuantityInCart} items left in stock, and you already have ${itemQuantityInCart} in your cart.`,
            success: false
        })
    }
    
    await cartModel.findOneAndUpdate({
        user: req.user._id , 'items.product':productId, 'items.price.variant': variantId
    },{ $inc:{'item.$.quantity': 1} },{ new: true })

    return res.status(200).json({
        message: "Cart updated successfully.",
        success: true
    })
}
export default {
    addToCart,
    getCart,
    incrementCartItemQuantity
}