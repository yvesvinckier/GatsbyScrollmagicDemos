import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import DeCesare from '../assets/images/de_cesare.png'
import LandscapeTwo from '../assets/images/landscapeTwo.png'

const HorizontalCrossRevealContainer = styled.section`
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

export const HorizontalCrossReveal = () => {
  const HorizontallandscapeImage = useRef(null)
  const HorizontalLandscapeContainer = useRef(null)
  const HorizontalSectionTrigger = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    gsap.utils.toArray(HorizontalSectionTrigger.current).forEach((section) => {
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
        HorizontalLandscapeContainer.current,
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          HorizontallandscapeImage.current,
          { xPercent: -100, x: 0 },
          { xPercent: 0 },
          0
        )
    })
  }, [])

  return (
    <HorizontalCrossRevealContainer
      ref={HorizontalSectionTrigger}
      className="HorizontalComparisonSection"
    >
      <div className="comparisonImage beforeImage">
        <img src={DeCesare} alt="before" />
        <div className="men_wrapper">
          <h3 className="pro-name">Chris Burkard</h3>
          <p className="pro-job">Founder</p>
        </div>
      </div>
      <div
        ref={HorizontalLandscapeContainer}
        className="comparisonImage afterImage"
      >
        <img ref={HorizontallandscapeImage} src={LandscapeTwo} alt="after" />
        <div className="landscape_wrapper">
          <div>
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
    </HorizontalCrossRevealContainer>
  )
}

export default HorizontalCrossReveal
