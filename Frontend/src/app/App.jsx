import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './app.routes.jsx'
import { useSelector } from 'react-redux'
import { useAuth } from '../features/auth/hook/useAuth.js'
import { useEffect } from 'react'

const App = () => {

  const { handleGetMe } = useAuth()

  const user = useSelector(state => state.auth.user)

  // console.log(user)

  useEffect(()=>{
    handleGetMe()
  },[])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
