import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSectoin'
import FundraiserSlider from '../components/FundraiserSlider'
import WhyWeb from '../components/WhyWeb'
import SuccessStories from '../components/SuccessStory'
import CarouselSlider from '../components/CarouselSlider'
import VideoSection from '../components/VideoSection'
import FAQ from '../components/FAQ'
import GalleryCard from '../components/GalleryCard'
import TestimonialSlider from '../components/TestimonialSlider'


const Home = () => {
  return (
    <>
        {/* start hero section */}
        <CarouselSlider/>
        {/* <HeroSection /> */}
        <FundraiserSlider/>
        <AboutSection/>
        {/* <VideoSection/> */}
        <WhyWeb/>
        <GalleryCard/>
        {/* <SuccessStories/> */}
        <TestimonialSlider/>
        <FAQ/>
    </>
  )
}

export default Home
