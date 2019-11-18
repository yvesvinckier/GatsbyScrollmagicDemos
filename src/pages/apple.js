/* eslint-disable */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TimelineMax, Linear, TweenMax } from 'gsap'
import ScrollMagic from 'ScrollMagic'

import 'animation.gsap'
import 'debug.addIndicators'

import IphoneOne from '../assets/images/iphone-1.png'
import IphoneThree from '../assets/images/iphone-3.png'
import IphoneRight from '../assets/images/iphone-right.png'
import IphoneLeft from '../assets/images/iphone-left.png'

import Large0000 from '../assets/sequence/large_0000.jpg'
import Large0001 from '../assets/sequence/large_0001.jpg'
import Large0002 from '../assets/sequence/large_0002.jpg'
import Large0003 from '../assets/sequence/large_0003.jpg'
import Large0004 from '../assets/sequence/large_0004.jpg'
import Large0005 from '../assets/sequence/large_0005.jpg'
import Large0006 from '../assets/sequence/large_0006.jpg'
import Large0007 from '../assets/sequence/large_0007.jpg'
import Large0008 from '../assets/sequence/large_0008.jpg'
import Large0009 from '../assets/sequence/large_0009.jpg'
import Large0010 from '../assets/sequence/large_0010.jpg'
import Large0011 from '../assets/sequence/large_0011.jpg'
import Large0012 from '../assets/sequence/large_0012.jpg'
import Large0013 from '../assets/sequence/large_0013.jpg'
import Large0014 from '../assets/sequence/large_0014.jpg'
import Large0015 from '../assets/sequence/large_0015.jpg'
import Large0016 from '../assets/sequence/large_0016.jpg'
import Large0017 from '../assets/sequence/large_0017.jpg'
import Large0018 from '../assets/sequence/large_0018.jpg'
import Large0019 from '../assets/sequence/large_0019.jpg'
import Large0020 from '../assets/sequence/large_0020.jpg'
import Large0021 from '../assets/sequence/large_0021.jpg'
import Large0022 from '../assets/sequence/large_0022.jpg'
import Large0023 from '../assets/sequence/large_0023.jpg'
import Large0024 from '../assets/sequence/large_0024.jpg'
import Large0025 from '../assets/sequence/large_0025.jpg'
import Large0026 from '../assets/sequence/large_0026.jpg'
import Large0027 from '../assets/sequence/large_0027.jpg'
import Large0028 from '../assets/sequence/large_0028.jpg'
import Large0029 from '../assets/sequence/large_0029.jpg'
import Large0030 from '../assets/sequence/large_0030.jpg'
import Large0040 from '../assets/sequence/large_0040.jpg'
import Large0050 from '../assets/sequence/large_0050.jpg'
import Large0060 from '../assets/sequence/large_0060.jpg'

const FirstSection = styled.section`
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
    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    color: #ffe5db;
    letter-spacing: 0.007em;
  }
  .position-h2 {
    grid-row: 7;
    grid-column: 5 / span 4;
    align-self: center;
  }
`
const SecondSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #000;
  .trigger2 {
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
      p {
        font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
      }
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

const ThirdSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #fff;
  .macbook-image-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 80px;
      font-weight: 700;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      color: #1d1d1f;
      text-align: center;
    }
    .macbook-image {
      text-align: center;
      img {
        width: 70%;
      }
    }
  }
`

const Apple = () => {
  useEffect(() => {
    const tlFirstScroll = new TimelineMax()
    tlFirstScroll
      .set('.iphone-image-wrapper', {
        scale: 4,
        transformOrigin: 'center top',
      })
      .to('.iphone-image-wrapper', 3, { scale: 2.2, y: '-50%' })
      .to('.iphone-image-wrapper', 3, { scale: 1, y: '0%' })

    var controller = new ScrollMagic.Controller()

    const scene1 = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tlFirstScroll)
      // .addIndicators()
      .addTo(controller)

    const tlSecondScroll = new TimelineMax()
    tlSecondScroll
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

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '.trigger2',
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(tlSecondScroll)
      .setPin('.trigger2')
      // .addIndicators()
      .addTo(controller)

    const images = [
      Large0000,
      Large0001,
      Large0002,
      Large0003,
      Large0004,
      Large0005,
      Large0006,
      Large0007,
      Large0008,
      Large0009,
      Large0010,
      Large0011,
      Large0012,
      Large0013,
      Large0014,
      Large0015,
      Large0016,
      Large0017,
      Large0018,
      Large0019,
      Large0020,
      Large0021,
      Large0022,
      Large0023,
      Large0024,
      Large0025,
      Large0026,
      Large0027,
      Large0028,
      Large0029,
      Large0030,
      Large0040,
      Large0050,
      Large0060,
    ]
    var obj = { curImg: 0 }
    var UpdateImage = document.getElementById('myimg')

    var SequenceTween = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1, // animate propery curImg to number of images
      roundProps: 'curImg', // only integers so it can be used as an array index
      immediateRender: true, // load first image automatically
      ease: Linear.easeNone, // show every image the same ammount of time
      onUpdate: function () {
        UpdateImage.setAttribute('src', images[obj.curImg])
      },
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.trigger3',
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(SequenceTween)
      .setPin('.trigger3')
      .addIndicators()
      .addTo(controller)
  }, [])

  return (
    <>
      <ThirdSection>
        <div className="trigger3">
          <div className="macbook-image-wrapper">
            <h2>Le nouveau prodige.</h2>
            <div className="macbook-image">
              <img id="myimg" src={Large0000} alt="" />
            </div>
          </div>
        </div>
      </ThirdSection>
      <FirstSection>
        <div className="grid-12 trigger1">
          <h2 className="position-h2">
            The custom OLED displays on iPhone&nbsp;X deliver the most accurate
            color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax
            has our largest display ever on an&nbsp;iPhone.
          </h2>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="trigger2">
          <div className="iphone-image-wrapper">
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
      </SecondSection>
    </>
  )
}

export default Apple
