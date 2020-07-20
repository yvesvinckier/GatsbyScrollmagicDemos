import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import DeCesare from '../assets/images/de_cesare.png'
import Landscape from '../assets/images/landscape.png'

const VerticalCrossRevealContainer = styled.section`
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

export const VerticalCrossReveal = () => {
  const landscapeImage = useRef(null)
  const landscapeContainer = useRef(null)
  const sectionTrigger = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    const VerticalCrossTween = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTrigger.current,
        start: 'center center',
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
        end: () => '+=' + sectionTrigger.current.offsetHeight,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
      defaults: { ease: 'none' },
    })
    // animate the container one way...
    VerticalCrossTween.fromTo(
      landscapeContainer.current,
      { yPercent: 100, x: 0 },
      { yPercent: 0 }
    )
      // ...and the image the opposite way (at the same time)
      .fromTo(
        landscapeImage.current,
        { yPercent: -100, x: 0 },
        { yPercent: 0 },
        0
      )
  }, [])
  return (
    <VerticalCrossRevealContainer
      ref={sectionTrigger}
      className="VerticalComparisonSection"
    >
      <div className="verticalComparisonImage verticalBeforeImage">
        <img src={DeCesare} alt="before" />
        <div className="vertical_men_wrapper">
          <h3 className="vertical_pro-name">Mike Richard</h3>
          <p className="vertical_pro-job">Skin Care Research</p>
        </div>
      </div>
      <div
        ref={landscapeContainer}
        className="verticalComparisonImage verticalAfterImage"
      >
        <img ref={landscapeImage} src={Landscape} alt="after" />
        <div className="vertical_landscape_wrapper">
          <div>
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
    </VerticalCrossRevealContainer>
  )
}

export default VerticalCrossReveal
