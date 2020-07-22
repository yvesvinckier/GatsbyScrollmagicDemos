import React from 'react'
import Helmet from 'react-helmet'

import ParallaxHero from '../components/ParallaxHero'
import ProductSection from '../components/ProductSection'
import TextSection from '../components/TextSection'
import VerticalCrossReveal from '../components/VerticalCrossReveal'
import HorizontalCrossReveal from '../components/HorizontalCrossReveal'
import VideoSequence from '../components/VideoSequence'

const SimpleDemo = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ParallaxHero />
      <ProductSection />
      <TextSection title={'Natural'} text={'Grounded in Research.'} />
      <HorizontalCrossReveal />
      <TextSection
        title={'Take Care'}
        text={
          'You can get your skin and body in tip-top shape without taking your toll on the environment.'
        }
      />
      <VerticalCrossReveal />
      <TextSection
        title={'Take Care'}
        text={
          'You can get your skin and body in tip-top shape without taking your toll on the environment.'
        }
      />
      <VideoSequence />
    </>
  )
}

export default SimpleDemo
