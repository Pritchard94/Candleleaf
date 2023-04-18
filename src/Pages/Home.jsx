import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Home/Banner'
import Cards from '../Components/Cards'
import Products from '../Components/Home/Products'
import ProductBanner from '../Components/Home/ProductBanner'
import Testimonial from '../Components/Home/Testimonial'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Products/>
        <ProductBanner/>
        <Testimonial/>
        <Footer/>
      
    </div>
  )
}

export default Home
