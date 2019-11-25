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
  .second-trigger {
    background: #000;
  }
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

const FourthSection = styled.section`
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
      top: 24%;
      left: 5%;
      width: 90%;
      max-width: 820px;
      margin: 0 10%;
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
  #slide02 .img {
    background-image: url(${MacBookMan});
  }

  #slide00,
  #slide01,
  #slide05,
  #slide02 {
    background-color: #fff;
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
      .to('.iphone1', 3, { x: '-54%' })
      .to('.iphone2', 3, { x: '54%' }, '-=3')
      .from('.iphone1-text', 0.3, { autoAlpha: 0 }, '-=3')
      .from('.iphone2-text', 0.3, { autoAlpha: 0 }, '-=3')
      .to('.iphone1-text', 3, { x: '-30%' }, '-=3')
      .to('.iphone2-text', 3, { x: '30%' }, '-=3')

      .set('.iphone-stick', { display: 'block' })

      .to('.iphone1-img-behind', 3, { x: '-50%' })
      .to('.iphone2-img-behind', 3, { x: '50%' }, '-=3')

      .to('.iphone1-img', 0.5, { autoAlpha: 0 }, '-=3')
      .to('.iphone2-img', 0.5, { autoAlpha: 0 }, '-=3')

      .to('.iphone1-text', 0.3, { autoAlpha: 0 }, '-=3')
      .to('.iphone2-text', 0.3, { autoAlpha: 0 }, '-=3')

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
    const PinScene4 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('#slide01 .pin-wrapper')
      .addTo(controller)

    // eslint-disable-next-line no-unused-vars
    const PinScene5 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('#slide02 .pin-wrapper')
      .addTo(controller)
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
      <IphoneTextSection ref={iphoneTextTrigger}>
        <div className="grid-12">
          <h2 className="position-h2">
            The custom OLED displays on iPhone&nbsp;X deliver the most accurate
            color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax
            has our largest display ever on an&nbsp;iPhone.
          </h2>
        </div>
      </IphoneTextSection>
      <IphoneSection ref={iphoneTrigger}>
        <div className="second-trigger">
          <div ref={iphoneImageWrapper} className="iphone-image-wrapper">
            <div className="iphone1-text">
              <p>iPhone Xs Max</p>
              <p>6.5" dsiplay</p>
            </div>
            <div className="iphone-image iphone1">
              <div className="inner-phone">
                <img className="iphone1-img" src={IphoneOne} alt="" />
                <img className="iphone-stick" src={IphoneThree} alt="" />
                <img className="iphone1-img-behind" src={IphoneLeft} alt="" />
              </div>
            </div>
            <div className="iphone-image iphone2">
              <div className="inner-phone">
                <img className="iphone2-img" src={IphoneOne} alt="" />
                <img className="iphone2-img-behind" src={IphoneRight} alt="" />
              </div>
            </div>
            <div className="iphone2-text">
              <p>iPhone Xs Max</p>
              <p>5.8" display</p>
            </div>
          </div>
        </div>
      </IphoneSection>

      <FourthSection>
        <article id="slide00" className="slide">
          <div className="wrapper">
            <h2>Écran Retina</h2>
            <h3>Un sublime espace de travail. Un immense terrain de jeu.</h3>
          </div>
        </article>

        <article id="slide01" className="slide">
          <div className="pin-wrapper">
            <div className="img"></div>
            <div className="wrapper">
              <h1>TITLE ONE</h1>
              <p>
                Curabitur vulputate, ligula lacinia scelerisque tempor, lacus
                lacus ornare ante, ac egestas.
              </p>
            </div>
          </div>
        </article>

        <article id="slide02" className="slide">
          <div className="pin-wrapper">
            <div className="img"></div>
            <div className="wrapper">
              <h1>TITLE TWO</h1>
              <p>
                Proin quis tortor orci. Etiam at risus et justo dignissim
                congue. Donec congue lacinia dui, a porttitor lectus.
              </p>
            </div>
          </div>
        </article>

        <article id="slide05" className="slide">
          <div className="wrapper">
            <h1>UNPINNED SLIDE</h1>
            <p>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
              neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>
        </article>
      </FourthSection>
    </>
  )
}

export default Apple
