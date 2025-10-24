import React from 'react'
import PreHeader from './components/headers/PreHeader'
import Header from './components/headers/Header'
import Hero from './components/Hero/Hero'
import Partner from './components/partners/Partner'
import Supports from './components/support/Supports'
import Work from './components/works/Work'
import ProductSlider from './components/Slides/ProductSlider'
import Details from './components/Deatails/Details'
import Specialist from './components/Specialist/Specialist'
import RatingSection from './components/rating/RatingSection'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='font-roboto'>
      <PreHeader/>
      <Header/>
      <Hero/>
      <Partner/>
      <Supports/>
      <Work/>
      <ProductSlider/>
      <Details/>
      <Specialist/>
      <RatingSection/>
      <Footer/>
      
    </div>
  )
}

export default App