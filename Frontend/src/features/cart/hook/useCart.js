import {addItem, getCart, incrementCartItemApi} from '../service/cart.api'
import {useDispatch} from 'react-redux'
import {addItem as addItemToCart, setItems,incrementCartItem} from '../state/cart.slice'

export const useCart = () => {
    const dispatch = useDispatch()

    async function handleAddItem({productId, variantId}) {
        try {
            const data = await addItem({productId, variantId})
            return data
        }catch (error) {
            console.error('Error adding item to cart:', error)
            throw error
        }
    }

    async function handleGetCart(){
        const data = await getCart()
        dispatch(setItems(data.cart.items))
    }
    async function handleIncrementCartItem({productId, variantId}){
        try {
            const data = await incrementCartItemApi({productId, variantId})
            dispatch(incrementCartItem({productId, variantId}))
            
        }catch (error) {
            console.error('Error incrementing cart item quantity:', error)
            throw error
        }
    }
    return {handleAddItem, handleGetCart, handleIncrementCartItem}
}