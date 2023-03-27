import React from 'react'
import MultiCarousel from "react-multi-carousel";
import MultiCarouselCard from "../subcomponents/MultiCarouselCard";

const Faculty = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
  return (
    <div className='px-12'>
    <h1 className="text-left  text-3xl my-2 md:my-4">Faculty</h1>
    <MultiCarousel responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <MultiCarouselCard title="Alexa" designation="Faculty-Maths"/>
        <MultiCarouselCard title="Raju" designation="Faculty-English"/>
        <MultiCarouselCard title="Mythili" designation="Faculty-SocialScience" />
        <MultiCarouselCard title="Ramu"  designation="Faculty-Maths"/>
      </MultiCarousel>
    </div>
  )
}

export default Faculty