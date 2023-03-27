import React from "react";
import CurriculumMainCard from "../subcomponents/CurriculumMainCard";
import MultiCarousel from "react-multi-carousel";
import MultiCarouselCard from "../subcomponents/MultiCarouselCard";
const Curriculum = () => {
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
    <div className='px-12'>
        <h1 className="text-left  text-3xl my-2 md:my-4">Our Curriculum</h1>
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
        <MultiCarouselCard title="Standard XII" download/>
        <MultiCarouselCard title="Standard X" download/>
        <MultiCarouselCard title="Standard IX" download/>
        <MultiCarouselCard title="Standard VIII" download/>
      </MultiCarousel>
    </div>
  );
};

export default Curriculum;
