import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { TimelineMax, Linear, TweenMax, Sine } from 'gsap'
// eslint-disable-next-line import/no-unresolved
import ScrollMagic from 'ScrollMagic'

// eslint-disable-next-line import/no-unresolved
import 'animation.gsap'
// eslint-disable-next-line import/no-unresolved
import 'debug.addIndicators'

import IphoneOne from '../assets/images/iphone-1.png'
import IphoneThree from '../assets/images/iphone-3.png'
import IphoneRight from '../assets/images/iphone-right.png'
import IphoneLeft from '../assets/images/iphone-left.png'

import Man from '../assets/images/display_pro__9ci00tik8gyi_large.jpg'
import MacBookMan from '../assets/images/display_fallback__upfw42u3jdum_large.jpg'

import { images } from '../components/sequence'
import Large0000 from '../assets/sequence/large_0000.jpg'

const OverFlow = styled.div`
  overflow-x: hidden;
`

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
    color: ${props => props.theme.colors.base};
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

const IphoneTextSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #000;
  .grid-12 {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
  h2 {
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-size: 28px;
    line-height: 1.14286;
    font-weight: 500;
    color: #ffe5db;
    letter-spacing: 0.007em;
  }
  .position-h2 {
    grid-row: 7;
    grid-column: 5 / span 4;
    align-self: center;
  }
`
const IphoneSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #000;
  .iphone-image-wrapper {
    height: 100vh;
    width: 100%;
    justify-content: center;
    display: grid;
    grid-auto-columns: 2fr 1fr 2fr;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    .iphone-image {
      grid-row: 1;
      grid-column: 2 / span 1;
      align-self: center;
      justify-self: center;
      text-align: center;
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
      grid-column: 1;
      text-align: right;
      p {
        font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
      }
    }
    .iphone2-text {
      grid-column: 3;
    }
    .iphone1-img {
      position: absolute;
      z-index: 2;
    }
    .iphone-stick {
      display: none;
      position: absolute;
      left: 54.5%;
    }
    .iphone2-img {
      position: absolute;
      z-index: 2;
    }
    .iphone1 img {
      width: 100%;
    }
    .iphone2 img {
      width: 88%;
    }
    .iphone1-img-behind {
      z-index: 1;
      position: relative;
    }
    .iphone2-img-behind {
      z-index: 1;
      position: relative;
    }
  }
`

const CrossRevealSections = styled.section`
  .slide {
    position: relative;
    overflow: hidden;
    height: 100vh;
    .pin-wrapper {
      width: 100%;
      height: 100%;
    }
    .wrapper {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 90%;
      max-width: 820px;
      margin: 0 5%;
      h2 {
        font-size: 80px;
        line-height: 1.05;
        font-weight: 700;
        letter-spacing: -0.015em;
        color: ${props => props.theme.colors.secondary};
      }
      h3 {
        font-size: 80px;
        line-height: 1.05;
        font-weight: 700;
        letter-spacing: -0.015em;
        color: ${props => props.theme.colors.base};
      }
      .pro-name {
        font-weight: 700;
        color: ${props => props.theme.colors.base};
        line-height: 1.3;
        font-size: 17px;
      }
      .pro-job {
        color: ${props => props.theme.colors.base};
        line-height: 1.3;
        font-weight: 400;
        letter-spacing: -0.022em;
        font-size: 17px;
      }
    }
  }
  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: url(${Man}) no-repeat;
    transform: translate(-50%, -50%);
    background-size: cover;
  }
  #slide02 .wrapper {
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
  }
  #slide02 .img {
    background-image: url(${MacBookMan});
  }
  #slide00,
  #slide01,
  #slide02,
  #slide03 {
    background-color: #fff;
  }
  #slide00 .wrapper {
    top: 25%;
  }
  #slide02 .wrapper .quote {
    line-height: 1.03;
    font-weight: 700;
    font-size: 80px;
    letter-spacing: -0.015em;
    color: #fff;
  }
  #slide02 .wrapper .white-name {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.14286;
    letter-spacing: 0;
    color: #fff;
    padding-top: 20px;
  }
  #slide02 .pin-wrapper {
    transform: translateY(-100%);
  }
  .scrollmagic-pin-spacer {
    position: absolute !important;
    clip: rect(auto, auto, auto, auto);
  }
`

const Apple = () => {
  const heroSubtitle = useRef(null)
  const heroTitle = useRef(null)
  const heroImage = useRef(null)
  const heroTitleWrapper = useRef(null)
  const heroTrigger = useRef(null)
  const iphoneTextTrigger = useRef(null)
  const iphoneImageWrapper = useRef(null)
  const iphoneTrigger = useRef(null)
  const iphoneOne = useRef(null)
  const iphoneTwo = useRef(null)
  const iphoneOneText = useRef(null)
  const iphoneTwoText = useRef(null)
  const iphoneStick = useRef(null)
  const iphoneOneImage = useRef(null)
  const iphoneTwoImage = useRef(null)
  const iphoneOneImageBehind = useRef(null)
  const iphoneTwoImageBehind = useRef(null)
  const slideTrigger = useRef(null)
  const slideTwoPinWrapper = useRef(null)
  const slideOnePinWrapper = useRef(null)

  useEffect(() => {
    const controller = new ScrollMagic.Controller()

    const tlHeroAnimation = new TimelineMax()
    tlHeroAnimation
      .from(heroSubtitle.current, 1, {
        opacity: 0,
        y: '100%',
        ease: Sine.easeOut,
      })
      .from(
        heroTitle.current,
        1,
        { opacity: 0, y: '40px', ease: Sine.easeOut },
        '-=0.8'
      )
      .from(
        heroImage.current,
        1,
        { opacity: 0, y: '40px', ease: Sine.easeOut },
        '-=0.8'
      )

    const tlHeroFadeOut = new TimelineMax().to(heroTitleWrapper.current, 0.3, {
      opacity: 0,
      y: '-140%',
      ease: Sine.easeOut,
    })

    // eslint-disable-next-line no-unused-vars
    const heroScene = new ScrollMagic.Scene({
      triggerElement: heroTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tlHeroFadeOut)
      // .addIndicators()
      .addTo(controller)

    const obj = { curImg: 0 }
    const UpdateImage = heroImage.current

    const tlSequenceAnimation = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1, // animate propery curImg to number of images
      roundProps: 'curImg', // only integers so it can be used as an array index
      immediateRender: true, // load first image automatically
      ease: Linear.easeNone, // show every image the same ammount of time
      onUpdate: function() {
        UpdateImage.setAttribute('src', images[obj.curImg])
      },
    })
    // eslint-disable-next-line no-unused-vars
    const tlSequenceHeroScene = new ScrollMagic.Scene({
      triggerElement: heroTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tlSequenceAnimation)
      .setPin(heroTrigger.current)
      // .addIndicators()
      .addTo(controller)

    // eslint-disable-next-line no-unused-vars
    const iphoneTextPinScene = new ScrollMagic.Scene({
      triggerElement: heroTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setPin(iphoneTextTrigger.current)
      // .addIndicators()
      .addTo(controller)

    const tlIphoneScaleDownAnimation = new TimelineMax()
    tlIphoneScaleDownAnimation
      .set(iphoneImageWrapper.current, {
        scale: 4,
        transformOrigin: 'center top',
      })
      .to(iphoneImageWrapper.current, 3, { scale: 2.2, y: '-50%' })
      .to(iphoneImageWrapper.current, 3, { scale: 1, y: '0%' })

    // eslint-disable-next-line no-unused-vars
    const iphoneScaleDownScene = new ScrollMagic.Scene({
      triggerElement: iphoneTextTrigger.current,
      triggerHook: 0,
      duration: '200%',
    })
      .setTween(tlIphoneScaleDownAnimation)
      // .addIndicators()
      .addTo(controller)

    const tlIphoneSplitAnimation = new TimelineMax()
    tlIphoneSplitAnimation
      .to(iphoneOne.current, 3, { x: '-54%' })
      .to(iphoneTwo.current, 3, { x: '54%' }, '-=3')
      .from(iphoneOneText.current, 0.3, { autoAlpha: 0 }, '-=3')
      .from(iphoneTwoText.current, 0.3, { autoAlpha: 0 }, '-=3')
      .to(iphoneOneText.current, 3, { x: '-30%' }, '-=3')
      .to(iphoneTwoText.current, 3, { x: '30%' }, '-=3')

      .set(iphoneStick.current, { display: 'block' })

      .to(iphoneOneImageBehind.current, 3, { x: '-50%' })
      .to(iphoneTwoImageBehind.current, 3, { x: '50%' }, '-=3')

      .to(iphoneOneImage.current, 0.5, { autoAlpha: 0 }, '-=3')
      .to(iphoneTwoImage.current, 0.5, { autoAlpha: 0 }, '-=3')

      .to(iphoneOneText.current, 0.3, { autoAlpha: 0 }, '-=3')
      .to(iphoneTwoText.current, 0.3, { autoAlpha: 0 }, '-=3')

    // eslint-disable-next-line no-unused-vars
    const iphoneSplitScene = new ScrollMagic.Scene({
      triggerElement: iphoneTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tlIphoneSplitAnimation)
      .setPin(iphoneTrigger.current)
      // .addIndicators()
      .addTo(controller)

    // eslint-disable-next-line no-unused-vars
    const crossRevealSectionOneScene = new ScrollMagic.Scene({
      triggerElement: slideTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setPin(slideOnePinWrapper.current)
      .addTo(controller)

    // eslint-disable-next-line no-unused-vars
    const crossRevealSectionTwoScene = new ScrollMagic.Scene({
      triggerElement: slideTrigger.current,
      triggerHook: 0,
      duration: '100%',
    })
      .setPin(slideTwoPinWrapper.current)
      .addTo(controller)
  }, [])

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <OverFlow>
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
        <IphoneTextSection ref={iphoneTextTrigger}>
          <div className="grid-12">
            <h2 className="position-h2">
              The custom OLED displays on iPhone&nbsp;X deliver the most
              accurate color in the industry, HDR, and true blacks. And
              iPhone&nbsp;XMax has our largest display ever on an&nbsp;iPhone.
            </h2>
          </div>
        </IphoneTextSection>
        <IphoneSection ref={iphoneTrigger}>
          <div ref={iphoneImageWrapper} className="iphone-image-wrapper">
            <div ref={iphoneOneText} className="iphone1-text">
              <p>iPhone Xs Max</p>
              <p>6.5" dsiplay</p>
            </div>
            <div ref={iphoneOne} className="iphone-image iphone1">
              <div className="inner-phone">
                <img
                  ref={iphoneOneImage}
                  className="iphone1-img"
                  src={IphoneOne}
                  alt=""
                />
                <img
                  ref={iphoneStick}
                  className="iphone-stick"
                  src={IphoneThree}
                  alt=""
                />
                <img
                  ref={iphoneOneImageBehind}
                  className="iphone1-img-behind"
                  src={IphoneLeft}
                  alt=""
                />
              </div>
            </div>
            <div ref={iphoneTwo} className="iphone-image iphone2">
              <div className="inner-phone">
                <img
                  ref={iphoneTwoImage}
                  className="iphone2-img"
                  src={IphoneOne}
                  alt=""
                />
                <img
                  ref={iphoneTwoImageBehind}
                  className="iphone2-img-behind"
                  src={IphoneRight}
                  alt=""
                />
              </div>
            </div>
            <div ref={iphoneTwoText} className="iphone2-text">
              <p>iPhone Xs Max</p>
              <p>5.8" display</p>
            </div>
          </div>
        </IphoneSection>
        <CrossRevealSections>
          <article id="slide00" className="slide">
            <div className="wrapper">
              <h2>Écran Retina</h2>
              <h3>Un sublime espace de travail. Un immense terrain de jeu.</h3>
            </div>
          </article>
          <article ref={slideTrigger} id="slide01" className="slide">
            <div ref={slideOnePinWrapper} className="pin-wrapper">
              <div className="img"></div>
              <div className="wrapper">
                <h3 className="pro-name">Chris Burkard</h3>
                <p className="pro-job">Photographe d’aventure</p>
              </div>
            </div>
          </article>
          <article id="slide02" className="slide">
            <div ref={slideTwoPinWrapper} className="pin-wrapper">
              <div className="img"></div>
              <div className="wrapper">
                <p className="quote">
                  « Les limites sont faites pour être repoussées. »
                </p>
                <p className="white-name">Chris Burkard</p>
              </div>
            </div>
          </article>
          <article id="slide03" className="slide">
            <div className="wrapper">
              <h1>UNPINNED SLIDE</h1>
              <p>
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
                neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
            </div>
          </article>
        </CrossRevealSections>
      </OverFlow>
      >
    </>
  )
}

export default Apple
