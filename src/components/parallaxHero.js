import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { SplitText } from 'gsap/SplitText'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans3 = (x, y) => `translate3d(${x / 12}px,${y / 24}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 16}px,0)`
const trans1 = (x, y) => `translate3d(${x / 4}px,${y / 8}px,0)`

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
  .GlobalParallaxSVG {
    position: relative;
    max-width: 1680px;
    width: 100%;
  }
  h1 {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 4px;
    color: black;
    text-align: center;
    text-transform: uppercase;
    transform: translateY(-200px);
  }
`
const WaveSVGcontainer = styled.div`
  @keyframes smoooooth {
    0% {
      d: path('M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z');
    }
    50% {
      d: path('M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z');
    }
    100% {
      d: path('M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z');
    }
  }

  position: absolute;
  width: 100%;
  z-index: -1;
  bottom: 0;
  .waveSVGmatrix {
    position: relative;
    height: 100%;
    transform: matrix(1, 0, 0, -1, 0, 0);
    svg {
      display: block;
      position: absolute;
      width: 100%;
      height: 10rem;
      path {
        fill: #c6fbfa;
        width: 100%;
        animation: smoooooth 25s linear infinite alternate;
      }
    }
  }
`
const BackgroundPosRel = styled(animated.div)`
  position: relative;
  will-change: transform;
  .parallax {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%);
  }
`

const MidgroundPosRel = styled(animated.div)`
  position: relative;
  will-change: transform;
  .parallax {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%);
  }
`

const ForegroundPosRel = styled(animated.div)`
  position: relative;
  will-change: transform;
  .parallax {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%);
  }
`

const LogoNaturalWrapper = styled.div`
  height: 300px;
`

const WaveSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 14"
      height="70"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path>
        <animate
          attributeName="d"
          values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
          repeatCount="indefinite"
          dur="25s"
        />
      </path>
    </svg>
  )
}

const LogoNatural = () => {
  const smartBlue = '#00EFEB'
  const smartBlack = '#080F0F'
  const TRef = useRef()
  const TTopRef = useRef()
  const ARef = useRef()
  const NRef = useRef()
  const URef = useRef()
  const RRef = useRef()
  const ALRef = useRef()
  const BlackShapeRef = useRef()
  const NaturalRef = useRef()
  const stalkRef = useRef()
  const rightLeaves = useRef()
  const leftLeaves = useRef()
  const BlackShape2Ref = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.set(NaturalRef.current.children, {
      drawSVG: '0%',
    })
    const drawNatural = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'none',
      },
    })
    drawNatural.to(NaturalRef.current.children, {
      drawSVG: '100%',
      duration: 1,
      stagger: 0.1,
    })

    const growFlower = gsap
      .timeline({
        paused: true,
      })
      .set(stalkRef.current, {
        autoAlpha: 0,
      })
    growFlower
      .from(BlackShapeRef.current, {
        duration: 2,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: '50% 50%',
      })
      .from(stalkRef.current, {
        autoAlpha: 1,
        duration: 2,
        attr: {
          y2: 250,
        },
        ease: 'power2.inOut',
      })
      .from(
        rightLeaves.current.children,
        {
          duration: 2,
          stagger: 0.1,
          scale: 0,
          rotation: -34,
          transformOrigin: '0% 100%',
          ease: 'elastic.out(0.4, 0.5)',
        },
        '-=1.5'
      )
      .from(
        leftLeaves.current.children,
        {
          duration: 2,
          stagger: 0.1,
          scale: 0,
          rotation: 34,
          transformOrigin: '100% 100%',
          ease: 'elastic.out(0.4, 0.5)',
        },
        '-=1.6'
      )

    gsap.registerPlugin(MorphSVGPlugin)
    const morphTween = gsap.timeline({
      paused: true,
      repeat: -1,
      defaults: { ease: 'none', duration: 2 },
    })
    morphTween
      .to(BlackShapeRef.current, {
        morphSVG: BlackShape2Ref.current,
      })
      .to(BlackShapeRef.current, {
        morphSVG: BlackShapeRef.current,
      })

    const textTween = gsap.timeline({ paused: true })
    const split = new SplitText('h1', { type: 'chars' })
    textTween.from(split.chars, {
      duration: 0.8,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
      stagger: {
        from: 'center',
        each: 0.02,
      },
    })

    const mainTL = gsap.timeline()
    mainTL
      .add(drawNatural.play(), 1.2)
      .add(growFlower.play(), 0)
      .add(morphTween.play(), 0)
      .add(textTween.play(), 2)
  }, [NaturalRef, BlackShapeRef])
  return (
    <LogoNaturalWrapper>
      <svg viewBox="0 0 1080 370">
        <path
          ref={BlackShapeRef}
          d="M438.83,245.52c-.727,32.564,16.021,64.743,42.405,83.845s61.545,25.038,93.078,16.873a117.506,117.506,0,0,0,54.917-32.124c39.715-41.32,42.207-112.267,7.167-157.618-19.794-25.619-50.506-43.2-82.851-44.587-29.634-1.269-63.791,12.139-79.261,38.484C457.818,178.436,439.568,212.408,438.83,245.52Z"
          fill={smartBlack}
        />
        <path
          ref={BlackShape2Ref}
          d="M435.829,245.52c-.726,32.564,20.022,61.743,46.406,80.844s60.545,32.039,92.078,23.874c20.793-5.384,38.032-24.639,52.917-40.125,39.715-41.319,39.207-108.266,4.167-153.617-19.794-25.619-45.506-43.2-77.851-44.587-29.634-1.269-60.791,15.139-76.261,41.484C460.818,181.436,436.568,212.408,435.829,245.52Z"
          fill="transparent"
        />

        <g ref={leftLeaves}>
          <path
            d="M559.376,211.148a3.712,3.712,0,0,0-2.387-1,11.863,11.863,0,0,0-11.8,7.326,6.913,6.913,0,0,0-.5,4.255,3.8,3.8,0,0,0,2.91,2.9c1.68.256,3.227-.906,4.431-2.1a30.589,30.589,0,0,0,6.216-9.312,9.755,9.755,0,0,1,1.133-2.067"
            fill={smartBlue}
          />
          <path
            d="M559.376,195.743c-1.77-1.752-9.221-10.285-15.331-10.441-6.984-.179-15.221,2.686-15.311,9.938-.074,5.955,5.347,10.782,11.057,11.145,4.044.256,8.574-1.57,12.051-3.544a21.2,21.2,0,0,0,4.487-3.349,32.3,32.3,0,0,0,3.047-3.749"
            fill={smartBlue}
          />
          <path
            d="M559.347,183.623a19.4,19.4,0,0,0,.753-3.894,35.041,35.041,0,0,0,.2-5.4,58.8,58.8,0,0,0-.7-7.714c-.79-4.889-2.1-10.414-6.081-13.713-3.02-2.5-8.447-4.477-11.978-1.859-2.92,2.165-2.772,6.63-2.686,9.222.263,7.946,5.072,13.5,6.446,15.042a27.06,27.06,0,0,0,9.4,6.758A20.692,20.692,0,0,0,559.347,183.623Z"
            fill={smartBlue}
          />
        </g>

        <g ref={rightLeaves}>
          <path
            d="M560.156,183.939c3.023.525,9.806,1.2,16.264-2.577,2.124-1.242,7.065-4.133,7.968-9.4.15-.875.719-4.191-1.164-6.178-2.955-3.121-10-.914-13.788,1.343C562.189,171.448,560.554,181.684,560.156,183.939Z"
            fill={smartBlue}
          />
          <path
            d="M560.156,195.321c2,1.331,11.216,7.468,13.846,9.142,3.649,2.321,8.235,2.889,12.027.572a12.529,12.529,0,0,0,5.929-9.86,6.49,6.49,0,0,0-.685-3.554,7.091,7.091,0,0,0-1.8-1.94,18.867,18.867,0,0,0-15.948-3.43,24.137,24.137,0,0,0-12.22,7.571c-.215.254-.955,1.216-1.152,1.5"
            fill={smartBlue}
          />
          <path
            d="M560.156,211.148a9.826,9.826,0,0,1,1.133,2.067,30.586,30.586,0,0,0,6.215,9.312c1.2,1.2,2.752,2.36,4.431,2.1a3.806,3.806,0,0,0,2.911-2.9,6.913,6.913,0,0,0-.5-4.255,11.863,11.863,0,0,0-11.8-7.326,3.705,3.705,0,0,0-2.387,1"
            fill={smartBlue}
          />
        </g>

        <line
          ref={stalkRef}
          x1="560"
          y1="250"
          x2="560"
          y2="183"
          fill="none"
          stroke={smartBlue}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />

        <g ref={NaturalRef} strokeWidth="1">
          <path
            ref={NRef}
            d="M475.8,295.474a9.565,9.565,0,0,1-1.214-5.158,26.657,26.657,0,0,1,1.524-8.206,70.213,70.213,0,0,1,3.959-9.451,89.989,89.989,0,0,1,5.5-9.426,88,88,0,0,1,6.141-8.212,44.6,44.6,0,0,1,5.8-5.8c1.768-1.423,3.274-2.145,4.477-2.145a3.37,3.37,0,0,1,2.906,1.5,13.024,13.024,0,0,1,1.845,4.257,38.425,38.425,0,0,1,1.03,6.144q.321,3.477.609,7.2c.19,2.486.407,4.961.646,7.356a48.291,48.291,0,0,0,1.047,6.5,13.984,13.984,0,0,0,1.953,4.706,4.037,4.037,0,0,0,3.441,1.906,6.535,6.535,0,0,0,4.728-2.074,16.323,16.323,0,0,0,3.373-5.2,34.027,34.027,0,0,0,2.065-7.026,41.4,41.4,0,0,0,.723-7.557c0-1.008-.037-2.006-.109-2.965a21.854,21.854,0,0,0-.4-2.841"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={ARef}
            d="M537.265,282.89a2.466,2.466,0,0,0-.227-1.187c-.1-.245-.329-.571-1.146-.571a3.249,3.249,0,0,0-1.421.392,7.545,7.545,0,0,0-1.507.993,5.46,5.46,0,0,0-1.112,1.28,2.371,2.371,0,0,0-.414,1.214,1.053,1.053,0,0,0,.189.7.724.724,0,0,0,.572.195,2.14,2.14,0,0,0,.308-.024,6.12,6.12,0,0,0,3.071-1.842l.231-.222.242.211a7.182,7.182,0,0,0,2.359,1.4,7.947,7.947,0,0,0,2.643.446,12.312,12.312,0,0,0,4.112-.8,22.2,22.2,0,0,0,4.058-1.915"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={TRef}
            d="M550.107,274c-4,15,5,15,5,15"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={TTopRef}
            d="M540.592,278.09h0a.288.288,0,0,1,.146-.044l4.3-.965c1.423-.319,2.807-.617,4.192-.9l.6-.1.545-.112c3.711-.76,7.478-1.385,11.193-1.859,3.734-.475,7.739-.787,11.9-.93"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={URef}
            d="M562.1,281.818a11.11,11.11,0,0,0-.451,1.147,9.374,9.374,0,0,0-.335,1.3,6.69,6.69,0,0,0-.112,1.137c0,.6.365.816.708.816a4,4,0,0,0,2.4-1.008,10.556,10.556,0,0,0,2.113-2.224c.106-.152.182-.192.208-.192s.143.056.3.268a8.539,8.539,0,0,0,1.564,1.712,3.928,3.928,0,0,0,2.589.8,7.927,7.927,0,0,0,2.025-.3c.725-.193,1.47-.424,2.214-.689s1.427-.539,2.073-.836a9.416,9.416,0,0,0,1.492-.823"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={RRef}
            d="M578.339,281a1.591,1.591,0,0,0,1.075,1.541,2.655,2.655,0,0,0,1.034.19,5.307,5.307,0,0,0,1.5-.249.349.349,0,0,1,.113-.023c.027,0,.067,0,.126.106a.288.288,0,0,1-.039.366,3.893,3.893,0,0,0-.605,1.394,6.157,6.157,0,0,0-.188,1.406,1.56,1.56,0,0,0,.756,1.29,2.717,2.717,0,0,0,1.6.494,24.958,24.958,0,0,0,4.072-.364,39.892,39.892,0,0,0,4.339-.976,34.57,34.57,0,0,0,4.128-1.448,21.443,21.443,0,0,0,3.5-1.859"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={ALRef}
            d="M604.214,282.882a1.65,1.65,0,0,0-.11-.867.951.951,0,0,0-.971-.58,3.087,3.087,0,0,0-1.376.36,6.158,6.158,0,0,0-1.292.873,6.94,6.94,0,0,0-1.02,1.1,2.127,2.127,0,0,0-.461,1.247.559.559,0,0,0,.576.6l.1-.007a2.58,2.58,0,0,0,.875-.326,11.656,11.656,0,0,0,1.071-.665,12.508,12.508,0,0,0,1.18-.921c.236-.2.356-.212.388-.212a.937.937,0,0,1,.425.268,5.552,5.552,0,0,0,2.371,1.451,8.311,8.311,0,0,0,2.321.372,17.963,17.963,0,0,0,7.315-2.071l.41-.2.315-.128a20.461,20.461,0,0,0,4.547-2.5,20.17,20.17,0,0,0,3.241-2.958,11.7,11.7,0,0,0,1.915-2.957,6.583,6.583,0,0,0,.617-2.515,2.564,2.564,0,0,0-.561-1.744,2.063,2.063,0,0,0-1.67-.63,5.76,5.76,0,0,0-2.939.918,11.934,11.934,0,0,0-2.923,2.543,13.922,13.922,0,0,0-2.237,3.742,11.757,11.757,0,0,0-.871,4.491,5.442,5.442,0,0,0,1.314,3.678c.858.99,2.3,1.492,4.287,1.492a15.951,15.951,0,0,0,4.521-.809,29.682,29.682,0,0,0,6.106-2.835"
            fill="none"
            stroke={smartBlue}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </LogoNaturalWrapper>
  )
}

const Background = (props) => {
  const smartBlack = '#080F0F'
  const smartBlue = '#00EFEB'
  const lightBlue = '#49F2EF'

  const backgroundParallax = useRef()
  const backgroundRef = useRef()
  const flyingBlowRef = useRef()

  const { clientXY } = props

  useEffect(() => {
    gsap.registerPlugin(Physics2DPlugin)
    const flyingBlowTween = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    flyingBlowTween.to(flyingBlowRef.current.children, {
      duration: 'random(12, 14)',
      physics2D: {
        velocity: 60,
        angle: 'random(-110, -70)',
        // angle: -90,
        gravity: 0,
      },
      delay: 'random(0, 0)',
      scale: 0,
      opacity: 0,
    })
  }, [])

  return (
    <BackgroundPosRel style={{ transform: clientXY.xy.interpolate(trans3) }}>
      <div ref={backgroundParallax} className="parallax">
        <svg viewBox="0 0 1080 625">
          <g ref={backgroundRef}>
            <g id="BLOW">
              <g
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              >
                <path d="M750.84,357.483s61.278-6.923,62.413-77.856" />
                <path d="M750.84,357.483s45-7.436,46.984-74.608" />
                <path d="M750.84,357.483S692.729,327,699.421,272.713" />
                <path d="M711.815,277.422s-2.865,66.924,39.025,80.061" />
                <path d="M760.149,255.61s28.862,27.513-9.309,101.873" />
                <path d="M779.482,261.063s5.315,58.249-28.642,96.42" />
                <path d="M682.566,310.636s18.7,32.471,68.274,46.847" />
                <path d="M693.72,280.149s-4.434,66.593,57.12,77.334" />
                <path d="M737.345,264.037c-.248.744-5.591,66.429,13.5,93.446" />
                <path d="M728.67,264.781s-11.788,49.326,22.17,92.7" />
                <path d="M717.516,274.943s-12.779,58.745,33.324,82.54c-28.009-67.667-1.35-96.42-1.35-96.42" />
                <path d="M772.046,268.251s8.29,66.428-21.206,89.232" />
                <path d="M749.738,277.67s21.179,32.719,1.1,79.813" />
                <path d="M755.935,275.439c-.5.744-18.315,41.559-5.095,82.044,0,0,48.794,10.29,74.141-52.888" />
                <path d="M749.655,359.631c-12.31,55.6,12.311,204.377,12.311,204.377" />
              </g>
              <path
                d="M761.961,354.471a12.308,12.308,0,0,1-24.616,0,11.752,11.752,0,0,1,.255-2.484,40.522,40.522,0,0,0,14,2.166,46.338,46.338,0,0,0,10.27-1.067A10.086,10.086,0,0,1,761.961,354.471Z"
                fill={smartBlack}
              />
              <g
                fill="none"
                transform="translate(-146.971 35.812)"
                stroke={smartBlack}
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3.184"
              >
                <line x1="894.443" y1="243.374" x2="898.976" y2="240.342" />
                <line x1="862.079" y1="238.266" x2="867.39" y2="239.501" />
                <line x1="843.914" y1="236.653" x2="849.367" y2="236.653" />
                <line x1="838.213" y1="244.337" x2="843.666" y2="244.337" />
                <line x1="856.388" y1="240.703" x2="861.679" y2="242.022" />
                <line x1="872.948" y1="228.545" x2="878.334" y2="229.393" />
                <line x1="882.398" y1="227.389" x2="887.722" y2="228.567" />
                <line x1="894.253" y1="223.324" x2="899.166" y2="225.691" />
                <line x1="942.317" y1="247.063" x2="947.77" y2="247.063" />
                <line x1="917.102" y1="233.044" x2="922.42" y2="231.834" />
                <line x1="923.309" y1="225.896" x2="928.607" y2="224.606" />
                <line x1="957.451" y1="242.816" x2="962.875" y2="243.379" />
                <line x1="904.35" y1="220.215" x2="909.394" y2="218.142" />
                <line x1="827.194" y1="275.546" x2="832.378" y2="273.855" />
                <line x1="900.915" y1="238.881" x2="905.889" y2="241.117" />
                <line x1="969.24" y1="268.723" x2="974.664" y2="269.285" />
              </g>

              <g
                ref={flyingBlowRef}
                fill="none"
                transform="translate(-146.971 35.812)"
                stroke={smartBlack}
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3.184"
              >
                <line x1="894.443" y1="243.374" x2="898.976" y2="240.342" />
                <line x1="862.079" y1="238.266" x2="867.39" y2="239.501" />
                <line x1="843.914" y1="236.653" x2="849.367" y2="236.653" />
                <line x1="838.213" y1="244.337" x2="843.666" y2="244.337" />
                <line x1="856.388" y1="240.703" x2="861.679" y2="242.022" />
                <line x1="872.948" y1="228.545" x2="878.334" y2="229.393" />
                <line x1="882.398" y1="227.389" x2="887.722" y2="228.567" />
                <line x1="894.253" y1="223.324" x2="899.166" y2="225.691" />
                <line x1="942.317" y1="247.063" x2="947.77" y2="247.063" />
                <line x1="917.102" y1="233.044" x2="922.42" y2="231.834" />
                <line x1="923.309" y1="225.896" x2="928.607" y2="224.606" />
                <line x1="957.451" y1="242.816" x2="962.875" y2="243.379" />
                <line x1="904.35" y1="220.215" x2="909.394" y2="218.142" />
                <line x1="827.194" y1="275.546" x2="832.378" y2="273.855" />
                <line x1="900.915" y1="238.881" x2="905.889" y2="241.117" />
                <line x1="969.24" y1="268.723" x2="974.664" y2="269.285" />
              </g>
            </g>
            <g id="TREE_BACKGROUND">
              <path
                d="M534.3,174.913V506.824c0-1.751-8.566-8.152-9.808-9.41a254.381,254.381,0,0,1-20.524-23.851c-13.581-17.848-24.966-37.337-29.822-59.469-5.015-22.928-2.452-48.037,10.015-67.923,5.3-8.455,12.26-15.859,16.734-24.759,5.43-10.779,6.894-23.326,5.239-35.268-2.086-14.966-8.821-29.137-9.617-44.215-.8-15.269,4.744-30.157,13.167-42.671a86.9,86.9,0,0,1,14.633-16.766C525.256,181.664,534.3,175.9,534.3,174.913Z"
                fill={smartBlue}
              />
              <path
                d="M534.429,506.818c0-1.749,8.572-8.14,9.809-9.4a253.453,253.453,0,0,0,20.522-23.858c13.592-17.842,24.977-37.334,29.82-59.464,5.018-22.93,2.458-48.042-10.01-67.93-5.3-8.449-12.259-15.85-16.739-24.759-5.421-10.779-6.881-23.311-5.226-35.262,2.074-14.967,8.82-29.13,9.612-44.219.8-15.26-4.739-30.145-13.163-42.669A86.88,86.88,0,0,0,544.415,182.5c-.946-.835-9.986-6.593-9.986-7.587Z"
                fill={smartBlue}
              />
              <path
                d="M534.3,214.766V480.123c-18.534-7.993-28.453-36.223-38.134-52.1-4.792-7.834-9.043-19.3-1.831-24.966,6.369-4.983,17.292-.86,22.753-6.814,3.837-4.2,2.516-10.891.175-16.066s-5.573-10.461-4.792-16.081c.764-5.621,8.454-10.158,12.18-5.875q-1.386-51.373-2.755-102.777c-.254-9.219-.461-18.677,2.691-27.339A29.087,29.087,0,0,1,534.3,214.766Z"
                fill={lightBlue}
              />
              <path
                d="M534.429,214.766V480.123c18.533-7.993,28.453-36.223,38.133-52.1,4.793-7.834,9.044-19.3,1.831-24.966-6.369-4.983-17.291-.86-22.752-6.814-3.838-4.2-2.516-10.891-.176-16.066,2.357-5.174,5.573-10.461,4.793-16.081-.764-5.621-8.455-10.158-12.18-5.875q1.385-51.373,2.754-102.777c.255-9.219.462-18.677-2.691-27.339A29.092,29.092,0,0,0,534.429,214.766Z"
                fill={lightBlue}
              />
              <g transform="translate(-146.971 35.812)">
                <line
                  x1="625.367"
                  y1="345.922"
                  x2="681.415"
                  y2="392.222"
                  fill="none"
                  stroke={smartBlack}
                  strokeMiterlimit="10"
                  strokeWidth="1.592"
                />
                <line
                  x1="657.902"
                  y1="270.081"
                  x2="681.415"
                  y2="289.504"
                  fill="none"
                  stroke={smartBlack}
                  strokeMiterlimit="10"
                  strokeWidth="1.592"
                />
                <line
                  x1="725.082"
                  y1="313.424"
                  x2="681.773"
                  y2="349.201"
                  fill="none"
                  stroke={smartBlack}
                  strokeMiterlimit="10"
                  strokeWidth="1.592"
                />
                <line
                  x1="712.682"
                  y1="217.772"
                  x2="681.773"
                  y2="243.306"
                  fill="none"
                  stroke={smartBlack}
                  strokeMiterlimit="10"
                  strokeWidth="1.592"
                />
                <line
                  x1="681.382"
                  y1="178.954"
                  x2="681.382"
                  y2="537.725"
                  fill="none"
                  stroke={smartBlack}
                  strokeMiterlimit="10"
                  strokeWidth="1.592"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </BackgroundPosRel>
  )
}

const Midground = (props) => {
  const smartBlack = '#080F0F'
  const smartBlue = '#00EFEB'
  const lightBlue = '#49F2EF'

  const midgroundParallax = useRef()
  const midgroundRef = useRef()

  const { clientXY } = props

  return (
    <MidgroundPosRel style={{ transform: clientXY.xy.interpolate(trans2) }}>
      <div ref={midgroundParallax} className="parallax">
        <svg viewBox="0 0 1080 625">
          <g ref={midgroundRef}>
            <g id="LEAVE2_BACKGROUND">
              <path
                d="M549.885,36.513c-61.6,41.86-96.3,90.549-115.785,130.354-7.117-.509-17.514-1.878-25.6-5.445,0,0,8.009,11.766,19.553,18.6-16.337,37.958-18.5,65.058-18.5,65.058-4.84,46.11,8.55,127.09,18.517,174.936,0,.032,0,.047.016.063A118.08,118.08,0,0,1,202.1,488.016c-9.33-21.893-11.75-55.154-11.75-55.154-5-98.877,36.334-193.756,100.277-261.887a438.443,438.443,0,0,1,44.423-41.317,83.155,83.155,0,0,0,44.454,14.2c-11.941-8.869-18.438-20.715-21.861-31.207C412.573,74.185,475.879,49.792,549.885,36.513Z"
                fill={lightBlue}
              />
              <path
                d="M549.885,36.513c-6.962,3.736-145.755,66.832-183.747,170.446-23.3,63.537-7,148.962-3.177,166.255,22.238,100.6-9.779,147.068-43.666,195.78"
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
            </g>
            <g id="LEAVE1_BACKGROUND">
              <path
                d="M302.073,567.642C176.67,528.856,133.2,420.331,122.965,314c19.186-6.448,34.822-24.774,34.822-24.774-13.868,1.592-26.909-2.8-37-8.1-4.188-113.8,24.615-216.3,24.615-216.3s3.424,49.39,82,149.524a284.537,284.537,0,0,1-25.842,37.815,108.778,108.778,0,0,0,32.561-29.329q15.858,19.7,35.618,41.891C439.767,454.9,302.073,567.642,302.073,567.642Z"
                fill={smartBlue}
              />
              <path
                d="M145.4,64.829S139.779,206.637,206.493,321c21.314,36.537,48.341,69.6,66.128,108.12,19.786,42.849,31.827,91.181,29.334,138.518"
                fill="none"
                stroke={smartBlack}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
            </g>
          </g>
        </svg>
      </div>
    </MidgroundPosRel>
  )
}

const Foreground = (props) => {
  const smartBlack = '#080F0F'
  const smartBlue = '#00EFEB'

  const foregroundParallax = useRef()
  const foregroundRef = useRef()

  const { clientXY } = props

  return (
    <ForegroundPosRel style={{ transform: clientXY.xy.interpolate(trans1) }}>
      <div ref={foregroundParallax} className="parallax">
        <svg viewBox="0 0 1080 625">
          <g ref={foregroundRef}>
            <g id="LEAVE1_FORGROUND">
              <path
                d="M484.492,428.183c-5.389,4.467-42.321,24.425-44.306,25.577s-8.41,4.852-11.188,2.3.934-4.864.934-4.864l6.311-3.649c28.522-19.586,40.658-35.332,40.658-35.332-2.138-2.343-11.419-18.959-11.422-18.957-4.426,2.563-9.351,6.8-14.8,5.564a3.174,3.174,0,0,1-1.773-.9c-.98-1.154-.259-2.915.566-4.185,3.445-5.3,7.843-9.548,10.608-15.366-1.485-3.828-8.091-39.16-8.091-39.16-3.61,3.188-53.42,22.774-53.42,22.774-1.7,8.513,5.312,34.91,5.312,34.91,1.5,8.718-4.467,3.61-4.467,3.61-12.981-12.341-16.079-32.554-16.079-32.554l-8.821,5.094c-1.7,9.589,2.548,20.649,3.828,27.255s-3.4,4.25-3.4,4.25c-10.856-4.685-14.043-22.134-14.043-22.134a59.614,59.614,0,0,0-11.074,9.153c-.2,24.054,14.057,43.846,16.4,46.611s10,16.181-5.12,7.245-26.82-31.3-26.82-31.3c-10.638,14.7-24.476,59.6,2.343,77.052s54.919,1.063,54.919,1.063c21.288,27.036,56.582,32.413,65.556,32.567,20.009.371,39.8-7.873,39.6-35.973C496.462,456.18,484.492,428.183,484.492,428.183ZM354.083,475.215s-2.765,8.091-12.558,0-6.388-18.51-6.388-18.51c2.765,7.015,9.576,9.357,14.9,12.135S354.083,475.215,354.083,475.215Zm38.738-50.655c-.64,1.92-3.2,4.263-8.936,0s-4.48-11.073-4.48-11.073c0-3.393,1.664-2.292,3.456-.628,2.369,2.189,4.429,2.548,7.835,4.673S393.461,422.64,392.821,424.56Z"
                fill={smartBlack}
              />
              <path
                d="M379.286,567.642s13.535-143.082,68.875-218.856"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.28"
              />
              <path
                d="M375.21,594.734s7.181-59.921,16.5-102.456"
                fill="none"
                stroke={smartBlack}
                strokeMiterlimit="10"
                strokeWidth="1.28"
              />
              <path
                d="M470.3,470.324c-.638,0-28.5,22.456-73.208,4.949"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.28"
              />
              <path
                d="M470.3,499.485s-33.073,8.045-44.739-17.689"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.28"
              />
            </g>
            <g id="LEAVE2_FORGROUND">
              <path
                d="M612.526,495.413c-24.742-2.974-53.212-2.582-67.876-27.146-4.549-7.621-5.731-17.812-.877-25.242,9.4-14.382,32.93-14.742,47.155-9.263,7.571,2.917,17.586,6.46,25.4,8.657,7.487,2.108,17.444,5.4,23.788-1.357,5.59-5.951-1.479-12.224-6.286-15.4-25.932-17.148-56.386-29.265-79.816-49.831-7.624-6.691-14.957-15.308-14.848-25.451.082-7.552,4.483-14.6,10.416-19.274,24.523-19.311,51.526-2.472,70.153,16.017,11.327,11.243,19.2,25.163,24.066,40.28a28.959,28.959,0,0,0,5.09-13.607c1.061-11.008-9.587-19.559-11.21-30.332-1.038-6.887.307-14.289,4.529-19.828,12.622-16.559,31.407-1.957,40,10.78A62.371,62.371,0,0,1,692.5,362.935c1.074,11.664-3.1,22.654-3.026,34.234.089,13.136,11.694,9.966,18.485,4.081,6.657-5.768,12.245-16.1,22.171-16.029,11.091.081,22.406,11.681,26.208,21.2,6.868,17.2-4.045,40.432-17.473,52.418-6.349,5.668-14.9,10.284-21.178,22.236-2.332,4.439-5.579,13.476-.2,16.981,6.155,4.007,16.952-5.934,21.278-9.746,18.023-13.3,26.547,8.646,26.547,8.646,9.321,25.939-21.957,47.221-21.957,47.221-25.985,25.273-19.288,36.58-19.288,36.58-4.525-6.651-25.272-21.629-78.477-21.63-15.388,0-35.075-3.4-46.968-14.251-15.09-13.764-6.942-39.959,15.042-37.278,6.355.374,15.75,3.794,21.776,1.683a4.509,4.509,0,0,0,3.19-3.7,5.22,5.22,0,0,0-1.422-3.473C632.208,496.047,619.7,496.275,612.526,495.413Z"
                fill={smartBlack}
              />
              <g id="LEAVE3_FORGROUND">
                <path
                  d="M934.625,362.575a90.586,90.586,0,0,1-18.413,27.585c-3.567,3.55-8.152,6.992-13.127,6.234-4.255-.648-7.577-4.429-8.622-8.6s-.145-8.626,1.494-12.605a35.147,35.147,0,0,1,34.952-21.7,12.948,12.948,0,0,1,8.227,2.791A17.518,17.518,0,0,0,934.625,362.575Z"
                  fill={smartBlack}
                />
                <path
                  d="M943.648,362.575A90.583,90.583,0,0,0,962.06,390.16c3.568,3.55,8.153,6.992,13.128,6.234,4.255-.648,7.577-4.429,8.622-8.6s.145-8.626-1.494-12.605a35.148,35.148,0,0,0-34.953-21.7,12.95,12.95,0,0,0-8.227,2.791A17.513,17.513,0,0,1,943.648,362.575Z"
                  fill={smartBlack}
                />
                <path
                  d="M939.136,307.469s-25.883-27.055-46.572-27.585-45.091,7.957-45.357,29.441c-.218,17.642,15.842,31.942,32.756,33.015,11.981.761,25.4-4.65,35.7-10.5a62.953,62.953,0,0,0,13.291-9.92C930.26,320.63,940.627,309.028,939.136,307.469Z"
                  fill={smartBlack}
                />
                <path
                  d="M939.136,308.8s33.421,22.281,42.175,27.851c10.808,6.878,24.4,8.561,35.629,1.7a37.12,37.12,0,0,0,17.563-29.21,19.22,19.22,0,0,0-2.029-10.529,21,21,0,0,0-5.324-5.748c-13.057-10.431-31.066-14.04-47.245-10.16-13.413,3.218-28.7,11.043-37.74,21.726A19.008,19.008,0,0,0,939.136,308.8Z"
                  fill={smartBlack}
                />
                <path
                  d="M939.136,275.64c8.278,1.555,29.339,4.269,49.336-7.427,6.292-3.681,20.932-12.243,23.607-27.851.444-2.591,2.128-12.414-3.448-18.3-8.754-9.245-29.639-2.707-40.848,3.979-21.467,12.8-26.67,37.614-27.851,44.3Z"
                  fill={smartBlack}
                />
                <path
                  d="M938.982,275.209c-8.108-1.878-27.184-7.513-42.7-24.933-4.07-4.568-18.318-21.022-19.1-44.561-.254-7.678-.693-20.907,7.957-27.321,10.054-7.454,25.681-.731,27.321,0,31.922,14.232,28.32,79.892,28.116,83.022Z"
                  fill={smartBlack}
                />
                <line
                  x1="939.136"
                  y1="274"
                  x2="939.136"
                  y2="604.72"
                  fill="none"
                  stroke={smartBlue}
                  strokeMiterlimit="10"
                  strokeWidth="2.311"
                />
              </g>
              <path
                d="M584.256,354.532s84.51,55.345,137.82,221"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
              <path
                d="M722.245,576.065c4.584,14.633,10.443,34.895,14.459,51.247"
                fill="none"
                stroke={smartBlack}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
              <path
                d="M671.089,381.536s-8.023,39.055-15.856,51.335"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
              <path
                d="M623.966,472.076s44.587.475,57.239,5.8"
                fill="none"
                stroke={smartBlue}
                strokeMiterlimit="10"
                strokeWidth="1.592"
              />
            </g>
          </g>
        </svg>
      </div>
    </ForegroundPosRel>
  )
}

const ParallaxHero = () => {
  const [propsXY, setXY] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <>
      <HeroSection>
        <WaveSVGcontainer>
          <div className="waveSVGmatrix">
            <WaveSVG />
          </div>
        </WaveSVGcontainer>
        <LogoNatural />
        <h1>Back to smooth and firm skin</h1>
        <animated.div
          className="GlobalParallaxSVG"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setXY({ xy: calc(x, y) })
          }
        >
          <Background clientXY={propsXY} />
          <Midground clientXY={propsXY} />
          <Foreground clientXY={propsXY} />
        </animated.div>
      </HeroSection>
    </>
  )
}

export default ParallaxHero
