import React from 'react'
import styled from 'styled-components'

const SlideZeroSection = styled.section`
  .slide00wrapper {
    position: relative;
    width: 100vw;
    padding: 190px 0;
    .section-content {
      margin-left: auto;
      margin-right: auto;
      width: 980px;
    }
    h2 {
      font-size: 80px;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.secondary};
    }
    h3 {
      font-size: 80px;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: ${(props) => props.theme.colors.smartBlack};
    }
  }
`

const TextSection = (props) => {
  return (
    <SlideZeroSection>
      <div className="slide00wrapper">
        <div className="section-content">
          <h2>{props.title}</h2>
          <h3>{props.text}</h3>
        </div>
      </div>
    </SlideZeroSection>
  )
}
export default TextSection
