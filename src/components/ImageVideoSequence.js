import React from 'react'
import { gsap } from 'gsap'
import ImagesLoaded from 'react-images-loaded'

import Large0000 from '../assets/sequence_iphone/large_0000.png'
import Large0001 from '../assets/sequence_iphone/large_0001.png'
import Large0002 from '../assets/sequence_iphone/large_0002.png'
import Large0003 from '../assets/sequence_iphone/large_0003.png'
import Large0004 from '../assets/sequence_iphone/large_0004.png'
import Large0005 from '../assets/sequence_iphone/large_0005.png'
import Large0006 from '../assets/sequence_iphone/large_0006.png'
import Large0007 from '../assets/sequence_iphone/large_0007.png'
import Large0008 from '../assets/sequence_iphone/large_0008.png'
import Large0009 from '../assets/sequence_iphone/large_0009.png'
import Large0010 from '../assets/sequence_iphone/large_0010.png'
import Large0011 from '../assets/sequence_iphone/large_0011.png'
import Large0012 from '../assets/sequence_iphone/large_0012.png'
import Large0013 from '../assets/sequence_iphone/large_0013.png'
import Large0014 from '../assets/sequence_iphone/large_0014.png'
import Large0015 from '../assets/sequence_iphone/large_0015.png'
import Large0016 from '../assets/sequence_iphone/large_0016.png'
import Large0017 from '../assets/sequence_iphone/large_0017.png'
import Large0018 from '../assets/sequence_iphone/large_0018.png'
import Large0019 from '../assets/sequence_iphone/large_0019.png'
import Large0020 from '../assets/sequence_iphone/large_0020.png'
import Large0021 from '../assets/sequence_iphone/large_0021.png'
import Large0022 from '../assets/sequence_iphone/large_0022.png'
import Large0023 from '../assets/sequence_iphone/large_0023.png'
import Large0024 from '../assets/sequence_iphone/large_0024.png'
import Large0025 from '../assets/sequence_iphone/large_0025.png'
import Large0026 from '../assets/sequence_iphone/large_0026.png'
import Large0027 from '../assets/sequence_iphone/large_0027.png'
import Large0028 from '../assets/sequence_iphone/large_0028.png'
import Large0029 from '../assets/sequence_iphone/large_0029.png'
import Large0030 from '../assets/sequence_iphone/large_0030.png'
import Large0031 from '../assets/sequence_iphone/large_0031.png'
import Large0032 from '../assets/sequence_iphone/large_0032.png'
import Large0033 from '../assets/sequence_iphone/large_0033.png'
import Large0034 from '../assets/sequence_iphone/large_0034.png'
import Large0035 from '../assets/sequence_iphone/large_0035.png'
import Large0036 from '../assets/sequence_iphone/large_0036.png'
import Large0037 from '../assets/sequence_iphone/large_0037.png'
import Large0038 from '../assets/sequence_iphone/large_0038.png'
import Large0039 from '../assets/sequence_iphone/large_0039.png'
import Large0040 from '../assets/sequence_iphone/large_0040.png'
import Large0041 from '../assets/sequence_iphone/large_0041.png'
import Large0042 from '../assets/sequence_iphone/large_0042.png'
import Large0043 from '../assets/sequence_iphone/large_0043.png'
import Large0044 from '../assets/sequence_iphone/large_0044.png'
import Large0045 from '../assets/sequence_iphone/large_0045.png'
import Large0046 from '../assets/sequence_iphone/large_0046.png'
import Large0047 from '../assets/sequence_iphone/large_0047.png'
import Large0048 from '../assets/sequence_iphone/large_0048.png'
import Large0049 from '../assets/sequence_iphone/large_0049.png'
import Large0050 from '../assets/sequence_iphone/large_0050.png'
import Large0051 from '../assets/sequence_iphone/large_0051.png'
import Large0052 from '../assets/sequence_iphone/large_0052.png'
import Large0053 from '../assets/sequence_iphone/large_0053.png'
import Large0054 from '../assets/sequence_iphone/large_0054.png'
import Large0055 from '../assets/sequence_iphone/large_0055.png'
import Large0056 from '../assets/sequence_iphone/large_0056.png'
import Large0057 from '../assets/sequence_iphone/large_0057.png'
import Large0058 from '../assets/sequence_iphone/large_0058.png'
import Large0059 from '../assets/sequence_iphone/large_0059.png'
import Large0060 from '../assets/sequence_iphone/large_0060.png'
import Large0061 from '../assets/sequence_iphone/large_0061.png'
import Large0062 from '../assets/sequence_iphone/large_0062.png'
import Large0063 from '../assets/sequence_iphone/large_0063.png'
import Large0064 from '../assets/sequence_iphone/large_0064.png'
import Large0065 from '../assets/sequence_iphone/large_0065.png'
import Large0066 from '../assets/sequence_iphone/large_0066.png'
import Large0067 from '../assets/sequence_iphone/large_0067.png'
import Large0068 from '../assets/sequence_iphone/large_0068.png'
import Large0069 from '../assets/sequence_iphone/large_0069.png'
import Large0070 from '../assets/sequence_iphone/large_0070.png'

const Array = [
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
  Large0040,
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
]

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.AuroraContainer = React.createRef()
    this.images = []
  }

  componentDidMount() {
    this.animToFrame()
  }

  setRef = (ref) => {
    this.myRefs.push(ref)
  }

  animToFrame = () => {
    this.distance = this.getShortDistance(
      this.currFrame.i,
      this.nextFrame,
      this.myRefs
    )
    if (
      // eslint-disable-next-line eqeqeq
      this.currFrame.i == this.distance + 1 ||
      // eslint-disable-next-line eqeqeq
      this.currFrame.i == this.distance - 1 ||
      // eslint-disable-next-line eqeqeq
      this.currFrame.i == this.distance
    ) {
      return
    }

    if (this.animation) {
      this.clearVals()
    }

    if (this.distance !== 0) {
      // this is where the error occurs
      this.animation = gsap.to(this.currFrame, {
        i: this.distance,
        modifiers: {
          i: gsap.utils.pipe(
            gsap.utils.snap(1),
            gsap.utils.wrap(0, this.myRefs.length - 1)
          ),
        },
        onStart: () => {
          console.log(this.distance)
        },
        onUpdate: () => {
          const newFrame = this.currFrame.i
          gsap.set(this.myRefs[this.lastFrame], {
            visibility: 'hidden',
          })
          gsap.set(this.myRefs[newFrame], {
            visibility: 'visible',
          })
          this.lastFrame = newFrame
        },
        // onComplete: () => gsap.delayedCall(1, rotate360),

        ease: 'power1.inOut',
        duration: 0.7,
      })
    }
  }

  render() {
    this.images = [...Array(144).keys()].map((image, index) => {
      // eslint-disable-next-line no-unused-vars
      var file = `${image.toString().padStart(5, '0')}`
      return (
        <img
          ref={this.setRef}
          key={`image_${index}`}
          src={`my-image-url.png`}
          className="rotator-image"
        />
      )
    })
    return (
      <div className="animatedImageWrapper">
        <ImagesLoaded ref={this.AuroraContainer}>{this.images}</ImagesLoaded>
      </div>
    )
  }
}

export default Stage
