import React from 'react'
import LoginForm from '../components/auth/RegisterForm'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import RegisterForm from '../components/auth/RegisterForm'

const page = () => {
  return (
    <div>
    <Header/>
    <RegisterForm/>
    <Footer/>
    </div>

  )
}

export default page