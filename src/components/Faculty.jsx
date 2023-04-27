import React from 'react'
import MultiCarousel from "react-multi-carousel";
import MultiCarouselCard from "../subcomponents/MultiCarouselCard";

const Faculty = ({Faculty}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
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
    <>
    {Faculty?.length>0&&
    <div className='px-8 my-4 '>
    <h1 className="text-left font-semibold	text-gray-800  text-xl my-2 md:my-4">Faculty</h1>
    {Faculty&&<MultiCarousel responsive={responsive}
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
        {Faculty?.map((obj,i)=><MultiCarouselCard index={i} key={i} Image={obj.image} title={obj.name} designation={obj.designation}/>)}
      </MultiCarousel>
      }
    </div>
    }
    </>
  )
}

export default Faculty