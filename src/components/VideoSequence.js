import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { images } from '../components/ImageSequence'

import Large0000 from '../assets/sequence_iphone/large_0000.png'

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

const VideoSequence = () => {
  const heroSubtitle = useRef(null)
  const heroTitle = useRef(null)
  const heroTitleWrapper = useRef(null)
  const heroTrigger = useRef(null)
  const heroImage = useRef(null)

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
  }, [])
  return (
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
  )
}

export default VideoSequence
