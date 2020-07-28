import React, { useRef } from 'react'
import ImagesLoaded from 'react-images-loaded'

import { images } from '../components/ImageSequence'

export const Stage = () => {
  const AuroraContainer = useRef(null)
  // intialize as en empty array
  const myRefs = useRef([])
  // Make it empty at every render cycle as we will get the full list of it at the end of the render cycle
  myRefs.current = [] // or an {}
  console.log(myRefs.current)

  // since it is an array we need to method to add the refs
  const setRef = (el) => {
    if (el && !myRefs.current.includes(el)) {
      myRefs.current.push(el)
    }
  }

  // const setRef = (ref) => {
  //   myRefs.current.push(ref)
  // }

  // const ArrayImages = [...Array(144).keys()].map((image, index) => {
  //   // eslint-disable-next-line no-unused-vars
  //   var file = `${image.toString().padStart(5, '0')}`
  //   return (
  //     <img
  //       ref={setRef}
  //       key={`image_${index}`}
  //       src={`my-image-url.png`}
  //       className="rotator-image"
  //     />
  //   )
  // })

  return (
    <div className="animatedImageWrapper">
      <ImagesLoaded ref={AuroraContainer}>
        {[...images].map((src, index) => (
          <img
            ref={setRef}
            key={index}
            src={`${src}`}
            className="rotator-image"
          />
        ))}
      </ImagesLoaded>
    </div>
  )
}

export default Stage
