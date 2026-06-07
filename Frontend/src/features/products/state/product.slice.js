import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState:{
        sellerProduct: [],
        products: []
    },
    reducers:{
        setSellerProducts: (state, action) => {
            state.sellerProducts = action.payload
        },
        setProduct: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {setSellerProducts, setProduct} = productSlice.actions

export default productSlice.reducer