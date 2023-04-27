import React from "react";
import CurriculumMainCard from "../subcomponents/CurriculumMainCard";
import MultiCarousel from "react-multi-carousel";
import MultiCarouselCard from "../subcomponents/MultiCarouselCard";
const Curriculum = ({Curriculum}) => {
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
      };

  return (
    <>
    {Curriculum?.length>0&&
    <div className='px-12 my-4' id="Curriculum">
        <h1 className="text-left font-semibold	text-gray-800  text-xl my-2 md:my-4">Our Curriculum</h1>
      {Curriculum&&<MultiCarousel responsive={responsive}
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
        {Curriculum?.map((obj,i)=><MultiCarouselCard key={i} Image={obj?.image} title={obj?.className} link={obj?.pdf_link} download/>)}
      </MultiCarousel>
    }
    </div>
    }
    </>
  );
};

export default Curriculum;
