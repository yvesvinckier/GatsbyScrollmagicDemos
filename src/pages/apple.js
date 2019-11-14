import React, { Component } from 'react'
import styled from 'styled-components'
import iphoneOne from '../assets/images/iphone-1.png'
import iphoneThree from '../assets/images/iphone-3.png'
import iphoneRight from '../assets/images/iphone-right.png'
import iphoneLeft from '../assets/images/iphone-left.png'

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
    font-size: 50px;
    font-weight: 500;
    color: #ffe5db;
    line-height: 1.23;
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

class apple extends Component {
  render() {
    return (
      <>
        <FirstSection>
          <div className="grid-12 trigger1">
            <h2 className="position-h2">
              The custom OLED displays on iPhone&nbsp;X deliver the most
              accurate color in the industry, HDR, and true blacks. And
              iPhone&nbsp;XMax has our largest display ever on an&nbsp;iPhone.
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
                  <img className="iphone1-img" src={iphoneOne} alt="" />
                  <img className="iphone-stick" src={iphoneThree} alt="" />
                  <img className="iphone1-img-behind" src={iphoneLeft} alt="" />
                </div>
              </div>
              <div className="iphone-image iphone2">
                <div className="inner-phone">
                  <img className="iphone2-img" src={iphoneOne} alt="" />
                  <img
                    className="iphone2-img-behind"
                    src={iphoneRight}
                    alt=""
                  />
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
}

export default apple
