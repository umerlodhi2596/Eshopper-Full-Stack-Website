import React from 'react'
import Hero from '../components/Hero/Hero'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import CategorySection from '../components/CategorySection/CategorySection'
import CollectionSection from '../components/CollectionSection/CollectionSection'
import TrandyProducts from '../components/TrandyProducts/TrandyProducts'

function Home() {

  return (
    <>
      <Hero/>
      <FeatureSection/>
      <CategorySection/>
      <CollectionSection/>
      <TrandyProducts/>
    </>
  )
}

export default Home
