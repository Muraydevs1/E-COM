import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection' 
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/ourPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home

