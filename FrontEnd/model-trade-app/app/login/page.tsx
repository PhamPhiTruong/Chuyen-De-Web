import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const page = () => {
  return (
    <div>
    <Header/>
    <div className="text-gray-700 text-2xl font-bold   mb-2 w-1/3 ml-70">CUSTOMER LOGIN
    
    </div>
    <LoginForm/>
    <Footer/>
    </div>

  )
}

export default page