import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { gsap, ScrollTrigger } from 'gsap/all'

import TubeSrc from '../assets/images/tube.png'
import FoamDispenserSrc from '../assets/images/foam_dispenser.png'

// import Man from '../assets/images/display_pro__9ci00tik8gyi_large.jpg'
import Landscape from '../assets/images/landscape.png'
import DeCesare from '../assets/images/de_cesare.png'

// import { images } from '../components/sequence'
import Large0000 from '../assets/sequence/large_0000.jpg'

const HeroSection = styled.div`
  height: 100vh;
  background: #fff;
  width: 100vw;
  .macbook-image-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 79px;
    padding-top: 141px;
    text-align: center;
    color: ${(props) => props.theme.colors.smartBlack};
    h1 {
      font-size: 32px;
      line-height: 1.16667;
      font-weight: 700;
      letter-spacing: 0.009em;
    }
    h2 {
      font-size: 110px;
      font-weight: 700;
      margin-top: 8px;
      line-height: 0.9;
      letter-spacing: -0.009em;
      height: 400px;
    }
    .macbook-image {
      background: #fff;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      img {
        padding-top: 50px;
        margin: 0 auto;
        width: 65%;
      }
    }
  }
`

const ProductsTextSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.smartBlack};
  color: ${(props) => props.theme.colors.smartBlue};
  .grid-12 {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
  h2 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: 36px;
    line-height: 1.16667;
    font-weight: 500;
    letter-spacing: 0em;
    padding-right: 48px;
  }
  .position-h2 {
    grid-row: 7;
    grid-column: 4 / span 6;
    align-self: center;
  }
`
const ProductsSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.smartBlack};
  .iphone-image-wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: end;
    .iphone-image {
      grid-row: 2;
      grid-column: 2 / span 1;
      align-self: end;
      justify-self: end;
      max-width: 100%;
    }
    .inner-phone {
      position: relative;
    }
    p {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      margin: 0 0 8px 0;
    }
    .iphone1-text {
      display: grid;
      grid-column: 1;
      text-align: right;
      height: 100%;
      align-content: center;
      grid-row: 2;
      p {
        font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
      }
    }
    .iphone2-text {
      display: grid;
      grid-column: 3;
      height: 100%;
      align-content: center;
      grid-row: 2;
    }
    .iphone1-img {
      position: absolute;
      z-index: 2;
    }
    .ghost {
      display: none;
    }
    .iphone2-img {
      position: absolute;
      z-index: 2;
    }
    .iphone1 img {
      width: 60%;
      margin: auto;
    }
    .iphone2 img {
      width: 40%;
      margin: auto;
    }
    .iphone3 img {
      width: 40%;
      margin: auto;
      z-index: 33;
    }
    .iphone1-img-behind {
      z-index: 1;
      position: relative;
    }
    .iphone2-img-behind {
      z-index: 1;
      position: relative;
    }
    .iphone3-img-behind {
      z-index: 11;
      position: relative;
    }
  }
`

const SlideZeroSection = styled.div`
  .slide00wrapper {
    position: relative;
    width: 100vw;
    padding: 190px 0;
    .section-content {
      margin-left: auto;
      margin-right: auto;
      width: 980px;
    }
    h2 {
      font-size: 80px;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.secondary};
    }
    h3 {
      font-size: 80px;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.smartBlack};
    }
  }
`

const VerticalCrossReveal = styled.section`
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
  .verticalComparisonImage {
    width: 100%;
    height: 100%;
  }
  .verticalAfterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0px);
  }
  .verticalAfterImage img {
    transform: translate(-100%, 0px);
  }

  .verticalComparisonImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .vertical_men_wrapper {
    color: ${(props) => props.theme.colors.smartBlack};
    position: absolute;
    top: 45%;
    left: 15vw;
    .vertical_pro-name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .vertical_pro-job {
      line-height: 1.3;
      font-weight: 400;
      letter-spacing: -0.022em;
      font-size: 17px;
    }
  }
  .vertical_landscape_wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
    .vertical_white-name {
      font-weight: 700;
      font-size: 28px;
      line-height: 1.14286;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
    .vertical_quote {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }
  }
`

const HorizontalCrossReveal = styled.section`
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
  .comparisonImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0px);
  }
  .afterImage img {
    transform: translate(-100%, 0px);
  }
  .comparisonImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .men_wrapper {
    color: ${(props) => props.theme.colors.smartBlack};
    position: absolute;
    top: 45%;
    left: 15vw;
    .pro-name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .pro-job {
      line-height: 1.3;
      font-weight: 400;
      letter-spacing: -0.022em;
      font-size: 17px;
    }
  }
  .landscape_wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
    .white-name {
      font-weight: 700;
      font-size: 28px;
      line-height: 1.14286;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
    .quote {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }
  }
`

const SimpleDemo = () => {
  const heroSubtitle = useRef(null)
  const heroTitle = useRef(null)
  const heroImage = useRef(null)
  const heroTitleWrapper = useRef(null)
  const heroTrigger = useRef(null)
  const quoteWrapper = useRef(null)

  const TextSectionTrigger = useRef(null)
  const ProductsSectionTrigger = useRef(null)

  const ProductsImagesWrapper = useRef(null)

  const CreamLargeFoamDispenserRef = useRef(null)
  const LargeFoamDispenserRef = useRef(null)
  const LargeFoamDispenserTextRef = useRef(null)
  const CreamSmallFoamDispenserRef = useRef(null)
  const SmallFoamDispenserRef = useRef(null)
  const SmallFoamDispenserTextRef = useRef(null)
  const CreamTubeRef = useRef(null)
  const TubeRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    gsap.utils.toArray('.VerticalComparisonSection').forEach((section) => {
      let VerticalCrossTween = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => '+=' + section.offsetHeight,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
        defaults: { ease: 'none' },
      })
      // animate the container one way...
      VerticalCrossTween.fromTo(
        section.querySelector('.verticalAfterImage'),
        { yPercent: 100, x: 0 },
        { yPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          section.querySelector('.verticalAfterImage img'),
          { yPercent: -100, x: 0 },
          { yPercent: 0 },
          0
        )
    })

    gsap.utils.toArray('.HorizontalComparisonSection').forEach((section) => {
      let HorizontalCrossTween = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => '+=' + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
        defaults: { ease: 'none' },
      })
      // animate the container one way...
      HorizontalCrossTween.fromTo(
        section.querySelector('.afterImage'),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          section.querySelector('.afterImage img'),
          { xPercent: -100, x: 0 },
          { xPercent: 0 },
          0
        )
    })

    const tlIphoneScaleDownAnimation = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: TextSectionTrigger.current,
        start: 'bottom bottom',
        scrub: true,
        anticipatePin: 1,
        // markers: true,
      },
    })
    tlIphoneScaleDownAnimation
      .set(ProductsImagesWrapper.current, {
        scale: 2.8,
        transformOrigin: 'center top',
      })
      .to(ProductsImagesWrapper.current, 3, { scale: 2.2, y: '-50%' })
      .to(ProductsImagesWrapper.current, 3, { scale: 1, y: '0%' })

    const tlIphoneSplitAnimation = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: ProductsSectionTrigger.current,
        start: 'bottom bottom',
        pin: true,
        scrub: true,
        anticipatePin: 1,
        // markers: true,
      },
    })
    tlIphoneSplitAnimation
      .to(CreamLargeFoamDispenserRef.current, {
        x: '-54%',
        duration: 3,
      })
      .to(
        CreamSmallFoamDispenserRef.current,
        {
          x: '54%',
          duration: 3,
        },
        '-=3'
      )
      .from(
        LargeFoamDispenserTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        '-=3'
      )
      .from(
        SmallFoamDispenserTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        '-=3'
      )
      .to(
        LargeFoamDispenserTextRef.current,
        {
          x: '-30%',
          duration: 3,
        },
        '-=3'
      )
      .to(
        SmallFoamDispenserTextRef.current,
        {
          x: '30%',
          duration: 3,
        },
        '-=3'
      )
      .set(CreamTubeRef.current, {
        display: 'block',
      })
      .from(CreamTubeRef.current, {
        autoAlpha: 0,
        transformOrigin: 'center center',
        duration: 1,
        scale: 0.95,
      })
      .to(
        LargeFoamDispenserTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        '-=3'
      )
      .to(
        SmallFoamDispenserTextRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        '-=3'
      )
  }, [])

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <HeroSection>
        <div ref={heroTrigger}>
          <div className="macbook-image-wrapper">
            <div ref={heroTitleWrapper}>
              <h1 ref={heroSubtitle}>MacBook Pro</h1>
              <h2 ref={heroTitle}>
                Le nouveau <br /> prodige.
              </h2>
            </div>
            <div className="macbook-image">
              <img ref={heroImage} src={Large0000} alt="" />
            </div>
          </div>
        </div>
      </HeroSection>
      <ProductsTextSection ref={TextSectionTrigger}>
        <div className="grid-12">
          <h2 className="position-h2">
            Designed for those who defy limits and change the world, the new
            MacBook Pro is by far the most powerful notebook we’ve ever made.
            With an immersive 16-inch Retina display, superfast processors,
            next-generation graphics, the largest battery capacity ever in a
            MacBook Pro, a new Magic Keyboard, and massive storage, it’s the
            ultimate pro notebook for the ultimate user.
          </h2>
        </div>
      </ProductsTextSection>
      <ProductsSection ref={ProductsSectionTrigger}>
        <div ref={ProductsImagesWrapper} className="iphone-image-wrapper">
          <div ref={LargeFoamDispenserTextRef} className="iphone1-text">
            <p>HERB DAY</p>
            <p>Cleansing Foam</p>
          </div>
          <div
            ref={CreamLargeFoamDispenserRef}
            className="iphone-image iphone1"
          >
            <div className="inner-phone">
              <img
                ref={LargeFoamDispenserRef}
                className="iphone1-img-behind"
                src={FoamDispenserSrc}
                alt=""
              />
            </div>
          </div>
          <div
            ref={CreamSmallFoamDispenserRef}
            className="iphone-image iphone2"
          >
            <div className="inner-phone">
              <img
                ref={SmallFoamDispenserRef}
                className="iphone2-img-behind"
                src={FoamDispenserSrc}
                alt=""
              />
            </div>
          </div>
          <div ref={CreamTubeRef} className="iphone-image iphone3 ghost">
            <div className="inner-phone">
              <img
                ref={TubeRef}
                className="iphone3-img-behind"
                src={TubeSrc}
                alt=""
              />
            </div>
          </div>
          <div ref={SmallFoamDispenserTextRef} className="iphone2-text">
            <p>REPAIRING</p>
            <p>Foam Cleanser</p>
          </div>
        </div>
      </ProductsSection>
      <SlideZeroSection>
        <div className="slide00wrapper">
          <div className="section-content">
            <h2>Natural</h2>
            <h3>Grounded in Research.</h3>
          </div>
        </div>
      </SlideZeroSection>
      <HorizontalCrossReveal className="HorizontalComparisonSection">
        <div className="comparisonImage beforeImage">
          <img src={DeCesare} alt="before" />
          <div className="men_wrapper">
            <h3 className="pro-name">Chris Burkard</h3>
            <p className="pro-job">Founder</p>
          </div>
        </div>
        <div className="comparisonImage afterImage">
          <img src={Landscape} alt="after" />
          <div className="landscape_wrapper">
            <div ref={quoteWrapper}>
              <p className="quote">
                <span>
                  « We only launch
                  <br />
                </span>
                <span>
                  what we love »<br />
                </span>
              </p>
              <p className="white-name">Chris Burkard</p>
            </div>
          </div>
        </div>
      </HorizontalCrossReveal>
      <SlideZeroSection>
        <div className="slide00wrapper">
          <div className="section-content">
            <h2>Écran Retina</h2>
            <h3>Un sublime espace de travail. Un immense terrain de jeu.</h3>
          </div>
        </div>
      </SlideZeroSection>
      <VerticalCrossReveal className="VerticalComparisonSection">
        <div className="verticalComparisonImage verticalBeforeImage">
          <img src={DeCesare} alt="before" />
          <div className="vertical_men_wrapper">
            <h3 className="vertical_pro-name">Mike Richard</h3>
            <p className="vertical_pro-job">Photographe d’aventure</p>
          </div>
        </div>
        <div className="verticalComparisonImage verticalAfterImage">
          <img src={Landscape} alt="after" />
          <div className="vertical_landscape_wrapper">
            <div ref={quoteWrapper}>
              <p className="vertical_quote">
                <span>
                  « Less is more -
                  <br />
                </span>
                <span>
                  only the essentials »<br />
                </span>
              </p>
              <p className="vertical_white-name">Mike Richard</p>
            </div>
          </div>
        </div>
      </VerticalCrossReveal>
      <SlideZeroSection>
        <div className="slide00wrapper">
          <div className="section-content">
            <h2>Écran Retina</h2>
            <h3>Un sublime espace de travail. Un immense terrain de jeu.</h3>
          </div>
        </div>
      </SlideZeroSection>
    </>
  )
}

export default SimpleDemo
