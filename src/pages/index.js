import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import Man from '../assets/images/display_pro__9ci00tik8gyi_large.jpg'
import Landscape from '../assets/images/landscape.png'
import DeCesare from '../assets/images/de_cesare.png'

import { images } from '../components/ImageSequence'
import Large0000 from '../assets/sequence_iphone/large_0000.png'

import ParallaxHero from '../components/ParallaxHero'
import ProductSection from '../components/ProductSection'
import TextSection from '../components/TextSection'

const SequenceSection = styled.div`
  background: ${(props) => props.theme.colors.smartBlack};
  width: 100%;
  position: relative;
  .maxWidthContainer {
    max-width: ${(props) => props.theme.sizes.maxWidth};
    margin: 0 auto;
  }
  .macbook-image-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.smartBlack};
    .macbook-text {
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 50%;
      max-width: 50%;
      h1 {
        font-size: 96px;
        line-height: 0.875;
        font-weight: 700;
        letter-spacing: 0.009em;
        color: ${(props) => props.theme.colors.whitePure};
      }
      h2 {
        padding-top: 10px;
        font-size: 26px;
        line-height: 1.15385;
        font-weight: 700;
        letter-spacing: 0.002em;
        margin-top: 8px;
        color: ${(props) => props.theme.colors.whitePure};
      }
      a.buttonStyle {
        display: inline-block;
        padding: 1em 2em;
        margin: 7em 0.5em 0.5em 0;
        border-radius: 2em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 400;
        color: ${(props) => props.theme.colors.smartBlack};
        background-color: ${(props) => props.theme.colors.smartBlue};
        text-align: center;
        transition: all 0.6s;
        &:hover {
          background-color: ${(props) => props.theme.colors.smartGreen};
        }
      }
    }
    .macbook-image {
      position: relative;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 50%;
      max-width: 50%;
      background: transparent;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        margin: auto;
        height: 900px;
        width: 638px;
      }
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
    transform: translate(100%, 0);
  }
  .verticalAfterImage img {
    transform: translate(-100%, 0);
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
      color: ${(props) => props.theme.colors.whitePure};
      padding-top: 20px;
    }
    .vertical_quote {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.whitePure};
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
    transform: translate(100%, 0);
  }
  .afterImage img {
    transform: translate(-100%, 0);
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
      color: ${(props) => props.theme.colors.whitePure};
      padding-top: 20px;
    }
    .quote {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.whitePure};
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
  // const TextSectionTrigger = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    const obj = { curImg: 0 }
    const UpdateImage = heroImage.current

    const tlSequenceAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: heroTrigger.current,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        start: 'center center',
        end: '+=100%',
        // markers: true,
      },
    })

    tlSequenceAnimation.to(obj, {
      curImg: images.length - 1, // animate propery curImg to number of images
      roundProps: 'curImg', // only integers so it can be used as an array index
      immediateRender: true, // load first image automatically
      ease: 'none', // show every image the same ammount of time
      onUpdate: () => {
        UpdateImage.setAttribute('src', images[obj.curImg])
      },
    })

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
          // markers: true,
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
  }, [])

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ParallaxHero />
      <ProductSection />
      <TextSection title={'Natural'} text={'Grounded in Research.'} />
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
              <p className="white-name">John Buking</p>
            </div>
          </div>
        </div>
      </HorizontalCrossReveal>

      <VerticalCrossReveal className="VerticalComparisonSection">
        <div className="verticalComparisonImage verticalBeforeImage">
          <img src={DeCesare} alt="before" />
          <div className="vertical_men_wrapper">
            <h3 className="vertical_pro-name">Mike Richard</h3>
            <p className="vertical_pro-job">Skin Care Research</p>
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
      <TextSection
        title={'Take Care'}
        text={
          'You can get your skin and body in tip-top shape without taking your toll on the environment.'
        }
      />
      <SequenceSection>
        <div className="maxWidthContainer">
          <div ref={heroTrigger}>
            <div className="macbook-image-wrapper">
              <div className="macbook-text" ref={heroTitleWrapper}>
                <h1 ref={heroSubtitle}>ZER&Oslash;</h1>
                <h2 ref={heroTitle}>
                  How big is your
                  <br /> environmental footprint? <br />
                  The app for Cutting Carbon <br /> and Caring for the Climate
                </h2>
                <a href="" className="buttonStyle">
                  Download
                </a>
              </div>
              <div className="macbook-image">
                <img ref={heroImage} src={Large0000} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SequenceSection>
    </>
  )
}

export default SimpleDemo
