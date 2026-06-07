import { createProduct , getSellerProducts , getAllProduct, getProductById, addProductVariant} from "../services/product.api";
import { useCallback } from 'react'
import {useDispatch} from 'react-redux'
import { setSellerProducts , setProduct} from "../state/product.slice";

export const useProduct = () => {

    const dispatch = useDispatch()

    const handleCreateProduct = useCallback(async (fromData) => {
        const data = await createProduct(fromData)
        return data.product
    }, [])

    const handleGetSellerProduct = useCallback(async () => {
        const data = await getSellerProducts()
        dispatch(setSellerProducts(data.products))
        return data.products
    }, [dispatch])

    async function handleGetAllProduct(){

        const data = await getAllProduct()
        dispatch(setProduct(data.products))
    }
    async function handleGetProductById(productId){

        const data = await getProductById(productId)

        return data.product
    }
    async function handleAddProductVariant(productId, newProductVariant){

        const data = await addProductVariant(productId, newProductVariant)

        return data
    }
    return {handleCreateProduct, handleGetSellerProduct, handleGetAllProduct, handleGetProductById, handleAddProductVariant}
}