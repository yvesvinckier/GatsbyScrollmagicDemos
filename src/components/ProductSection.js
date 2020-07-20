import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import TubeSrc from '../assets/images/tube.png'
import FoamDispenserSrc from '../assets/images/foam_dispenser.png'

const TextSection = styled.section`
  position: relative;
  width: 100vw;
  height: 70vh;
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
    letter-spacing: 0;
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
      color: ${(props) => props.theme.colors.whitePure};
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

const ProductSection = () => {
  const LargeFoamDispenserRef = useRef(null)
  const SmallFoamDispenserRef = useRef(null)
  const TubeRef = useRef(null)
  const ProductsSectionTrigger = useRef(null)
  const ProductsImagesWrapper = useRef(null)
  const CreamLargeFoamDispenserRef = useRef(null)
  const LargeFoamDispenserTextRef = useRef(null)
  const CreamSmallFoamDispenserRef = useRef(null)
  const SmallFoamDispenserTextRef = useRef(null)
  const CreamTubeRef = useRef(null)
  const TextSectionTrigger = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    const tlIphoneScaleDownAnimation = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: TextSectionTrigger.current,
        start: 'bottom bottom',
        scrub: true,
        anticipatePin: 1,
        markers: true,
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
  }, [
    ProductsImagesWrapper,
    CreamLargeFoamDispenserRef,
    CreamSmallFoamDispenserRef,
    CreamTubeRef,
    LargeFoamDispenserTextRef,
    SmallFoamDispenserTextRef,
  ])
  return (
    <>
      <TextSection ref={TextSectionTrigger}>
        <div className="grid-12">
          <h2 className="position-h2">
            It is our understanding that the skin care is a field merging
            science, beauty, aesthetics and health in every treatment. Based on
            a revolutionary technology the Natural cleaning power comes with a
            triple zero HMIS score for all products. This makes GreenCare safe
            on your skin, safe for your equipment and safe to store anywhere.
          </h2>
        </div>
      </TextSection>
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
    </>
  )
}

export default ProductSection
