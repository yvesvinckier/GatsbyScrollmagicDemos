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

import Man from '../assets/images/display_pro__9ci00tik8gyi_large.jpg'
import MacBookMan from '../assets/images/display_fallback__upfw42u3jdum_large.jpg'

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
import Large0031 from '../assets/sequence/large_0031.jpg'
import Large0032 from '../assets/sequence/large_0032.jpg'
import Large0033 from '../assets/sequence/large_0033.jpg'
import Large0034 from '../assets/sequence/large_0034.jpg'
import Large0035 from '../assets/sequence/large_0035.jpg'
import Large0036 from '../assets/sequence/large_0036.jpg'
import Large0037 from '../assets/sequence/large_0037.jpg'
import Large0038 from '../assets/sequence/large_0038.jpg'
import Large0039 from '../assets/sequence/large_0039.jpg'
import Large0040 from '../assets/sequence/large_0040.jpg'
import Large0041 from '../assets/sequence/large_0041.jpg'
import Large0042 from '../assets/sequence/large_0042.jpg'
import Large0043 from '../assets/sequence/large_0043.jpg'
import Large0044 from '../assets/sequence/large_0044.jpg'
import Large0045 from '../assets/sequence/large_0045.jpg'
import Large0046 from '../assets/sequence/large_0046.jpg'
import Large0047 from '../assets/sequence/large_0047.jpg'
import Large0048 from '../assets/sequence/large_0048.jpg'
import Large0049 from '../assets/sequence/large_0049.jpg'
import Large0050 from '../assets/sequence/large_0050.jpg'
import Large0051 from '../assets/sequence/large_0051.jpg'
import Large0052 from '../assets/sequence/large_0052.jpg'
import Large0053 from '../assets/sequence/large_0053.jpg'
import Large0054 from '../assets/sequence/large_0054.jpg'
import Large0055 from '../assets/sequence/large_0055.jpg'
import Large0056 from '../assets/sequence/large_0056.jpg'
import Large0057 from '../assets/sequence/large_0057.jpg'
import Large0058 from '../assets/sequence/large_0058.jpg'
import Large0059 from '../assets/sequence/large_0059.jpg'
import Large0060 from '../assets/sequence/large_0060.jpg'
import Large0061 from '../assets/sequence/large_0061.jpg'
import Large0062 from '../assets/sequence/large_0062.jpg'
import Large0063 from '../assets/sequence/large_0063.jpg'
import Large0064 from '../assets/sequence/large_0064.jpg'
import Large0065 from '../assets/sequence/large_0065.jpg'
import Large0066 from '../assets/sequence/large_0066.jpg'
import Large0067 from '../assets/sequence/large_0067.jpg'
import Large0068 from '../assets/sequence/large_0068.jpg'
import Large0069 from '../assets/sequence/large_0069.jpg'
import Large0070 from '../assets/sequence/large_0070.jpg'
import Large0071 from '../assets/sequence/large_0071.jpg'
import Large0072 from '../assets/sequence/large_0072.jpg'
import Large0073 from '../assets/sequence/large_0073.jpg'
import Large0074 from '../assets/sequence/large_0074.jpg'
import Large0075 from '../assets/sequence/large_0075.jpg'
import Large0076 from '../assets/sequence/large_0076.jpg'
import Large0077 from '../assets/sequence/large_0077.jpg'
import Large0078 from '../assets/sequence/large_0078.jpg'
import Large0079 from '../assets/sequence/large_0079.jpg'
import Large0080 from '../assets/sequence/large_0080.jpg'
import Large0081 from '../assets/sequence/large_0081.jpg'
import Large0082 from '../assets/sequence/large_0082.jpg'
import Large0083 from '../assets/sequence/large_0083.jpg'
import Large0084 from '../assets/sequence/large_0084.jpg'
import Large0085 from '../assets/sequence/large_0085.jpg'
import Large0086 from '../assets/sequence/large_0086.jpg'
import Large0087 from '../assets/sequence/large_0087.jpg'
import Large0088 from '../assets/sequence/large_0088.jpg'
import Large0089 from '../assets/sequence/large_0089.jpg'
import Large0090 from '../assets/sequence/large_0090.jpg'
import Large0091 from '../assets/sequence/large_0091.jpg'
import Large0092 from '../assets/sequence/large_0092.jpg'
import Large0093 from '../assets/sequence/large_0093.jpg'
import Large0094 from '../assets/sequence/large_0094.jpg'
import Large0095 from '../assets/sequence/large_0095.jpg'
import Large0096 from '../assets/sequence/large_0096.jpg'
import Large0097 from '../assets/sequence/large_0097.jpg'
import Large0098 from '../assets/sequence/large_0098.jpg'
import Large0099 from '../assets/sequence/large_0099.jpg'
import Large0100 from '../assets/sequence/large_0100.jpg'
import Large0101 from '../assets/sequence/large_0101.jpg'
import Large0102 from '../assets/sequence/large_0102.jpg'
import Large0103 from '../assets/sequence/large_0103.jpg'
import Large0104 from '../assets/sequence/large_0104.jpg'
import Large0105 from '../assets/sequence/large_0105.jpg'
import Large0106 from '../assets/sequence/large_0106.jpg'
import Large0107 from '../assets/sequence/large_0107.jpg'
import Large0108 from '../assets/sequence/large_0108.jpg'
import Large0109 from '../assets/sequence/large_0109.jpg'
import Large0110 from '../assets/sequence/large_0110.jpg'
import Large0111 from '../assets/sequence/large_0111.jpg'
import Large0112 from '../assets/sequence/large_0112.jpg'
import Large0113 from '../assets/sequence/large_0113.jpg'
import Large0114 from '../assets/sequence/large_0114.jpg'
import Large0115 from '../assets/sequence/large_0115.jpg'
import Large0116 from '../assets/sequence/large_0116.jpg'
import Large0117 from '../assets/sequence/large_0117.jpg'
import Large0118 from '../assets/sequence/large_0118.jpg'
import Large0119 from '../assets/sequence/large_0119.jpg'
import Large0120 from '../assets/sequence/large_0120.jpg'
import Large0121 from '../assets/sequence/large_0121.jpg'
import Large0122 from '../assets/sequence/large_0122.jpg'

const FirstSec = styled.div`
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
    h1 {
      font-size: 32px;
      line-height: 1.16667;
      font-weight: 700;
      letter-spacing: 0.009em;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      color: #1d1d1f;
    }
    h2 {
      font-size: 110px;
      font-weight: 700;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      color: #1d1d1f;
      text-align: center;
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
        padding-top: 40px;
        margin: 0 auto;
        width: 65%;
      }
    }
  }
`

const SecondSec = styled.section`
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
      top: 45%;
      left: 50%;
      width: 90%;
      max-width: 350px;
      margin: 0 10%;
      h1 {
        color: #1d1d1f;
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

  #slide01,
  #slide05 {
    background-color: #fff;
  }

  #slide00,
  #slide02 {
    background-color: #ededed;
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
      Large0031,
      Large0032,
      Large0033,
      Large0034,
      Large0035,
      Large0036,
      Large0037,
      Large0038,
      Large0039,
      Large0041,
      Large0042,
      Large0043,
      Large0044,
      Large0045,
      Large0046,
      Large0047,
      Large0048,
      Large0049,
      Large0050,
      Large0051,
      Large0052,
      Large0053,
      Large0054,
      Large0055,
      Large0056,
      Large0057,
      Large0058,
      Large0059,
      Large0060,
      Large0061,
      Large0062,
      Large0063,
      Large0064,
      Large0065,
      Large0066,
      Large0067,
      Large0068,
      Large0069,
      Large0070,
      Large0071,
      Large0072,
      Large0073,
      Large0074,
      Large0075,
      Large0076,
      Large0077,
      Large0078,
      Large0079,
      Large0080,
      Large0081,
      Large0082,
      Large0083,
      Large0084,
      Large0085,
      Large0086,
      Large0087,
      Large0088,
      Large0089,
      Large0090,
      Large0091,
      Large0092,
      Large0093,
      Large0094,
      Large0095,
      Large0096,
      Large0097,
      Large0098,
      Large0099,
      Large0100,
      Large0101,
      Large0102,
      Large0103,
      Large0104,
      Large0105,
      Large0106,
      Large0107,
      Large0108,
      Large0109,
      Large0110,
      Large0111,
      Large0112,
      Large0113,
      Large0114,
      Large0115,
      Large0116,
      Large0117,
      Large0118,
      Large0119,
      Large0120,
      Large0121,
      Large0122,
    ]
    var obj = { curImg: 0 }
    var UpdateImage = document.getElementById('myimg')

    var SequenceTween = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1, // animate propery curImg to number of images
      roundProps: 'curImg', // only integers so it can be used as an array index
      immediateRender: true, // load first image automatically
      ease: Linear.easeNone, // show every image the same ammount of time
      onUpdate: function() {
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
      // .addIndicators()
      .addTo(controller)

    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.trigger3',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('.trigger1')
      // .addIndicators()
      .addTo(controller)

    var PinScene4 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('#slide01 .pin-wrapper')
      .addTo(controller)

    var PinScene5 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('#slide02 .pin-wrapper')
      .addTo(controller)
  }, [])

  return (
    <>
      <FirstSec>
        <div className="trigger3">
          <div className="macbook-image-wrapper">
            <h1>MacBook Pro</h1>
            <h2>
              Le nouveau <br /> prodige.
            </h2>
            <div className="macbook-image">
              <img id="myimg" src={Large0000} alt="" />
            </div>
          </div>
        </div>
      </FirstSec>
      <SecondSec className="trigger1">
        <div className="grid-12">
          <h2 className="position-h2">
            The custom OLED displays on iPhone&nbsp;X deliver the most accurate
            color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax
            has our largest display ever on an&nbsp;iPhone.
          </h2>
        </div>
      </SecondSec>
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

      <FourthSection>
        <article id="slide00" className="slide">
          <div className="wrapper">
            <h1>INTRODUCTION</h1>
            <p>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
              neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
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
