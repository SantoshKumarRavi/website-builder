import React from 'react'
import { Carousel } from "react-responsive-carousel";
import GalleryImageCard from '../subcomponents/GalleryImageCard';
import ArrowLeft from "../assests/arrowLeft.svg"
import ArrowRight from "../assests/arrowRight.svg"
const Gallery = ({Gallery}) => {
// const src = "http://techslides.com/demos/sample-videos/small.mp4";
  return (
    <>
    {Gallery?.length>0&&
      <div id="Gallery" className='px-12 my-4'>
      <h1 className="text-left font-semibold	text-gray-800 text-xl my-2 md:my-4  0">Gallery</h1>
      <div className='flex justify-center items-center'>
      <div className=" md:w-1/2  max-w-xl  mt-4" >{/*lg:px-64 md:px-32 sm:px-16 px-8 */}
        <Carousel
          showStatus={false}
          showThumbs={false}
          swipeable
          infiniteLoop
          autoPlay={false}
          interval={2000}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 -left-5 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src={ArrowLeft} className="w-9 h-9 text-white" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 -right-5 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src={ArrowRight} className="w-9 h-9 text-white" />
              </div>
            );
          }}
  >
        {Gallery?.map((x)=>x?.eventslist?.map((obj)=><GalleryImageCard data={obj}/>))}
        </Carousel>
      </div>
        </div>    
  
      </div>
    }
    </>
  )
}

export default Gallery