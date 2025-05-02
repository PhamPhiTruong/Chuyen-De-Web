import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HomeSideLeft from '../components/layout/navigation/HomeSideLeft'
import Home from '../components/home/Home'
import HomeSideRight from '../components/layout/navigation/HomeSideRight'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='flex w-full h-fit '>
            <HomeSideLeft/>
            <Home/>
            <HomeSideRight/>

        </div>

        <Footer/>
    </div>
  )
}

export default page