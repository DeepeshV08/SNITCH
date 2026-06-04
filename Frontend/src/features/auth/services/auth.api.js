import axios from "axios";

const authApiInstance = axios.create({
    baseURL: '/api/auth',
    withCredentials: true
})

export async function register({email, contact, password, fullname, isSeller}){

     /**
     * @route - /api/auth/register
     */

    try{
        const response = await authApiInstance.post('/register',{
            email,
            fullname,
            contact,
            password,
            isSeller
        })
        return response.data
    }
    catch(err){
        if(err.response){
            console.error('Registration error response:', err.response.data)
        } else {
            console.error('Registration error:', err)
        }
        throw err
    }
}

export async function login({email , password}){

    /**
     * @route - /api/auth/login
     */
    try{
        const response = await authApiInstance.post('/login',{
            email,
            password
        })
        return response.data
    }catch(err){
        if(err.response){
            console.error('Login error response:', err.response.data)
        } else {
            console.error('Login error:', err)
        }
        throw err
    }
}