import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
// const src = "http://techslides.com/demos/sample-videos/small.mp4";
  return (
    <div>
    <h1 className="text-left  text-3xl my-2 md:my-4  px-8">Gallery</h1>
    <div className="w-full h-full px-12" >
      <Carousel
        showStatus
        showThumbs={false}
        swipeable
        infiniteLoop
        autoPlay={false}
        interval={2000}
      >
        <div  className="w-full h-full flex flex-col  ">
          <div  className="w-full  ">
              <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            />
          </div>
        </div>
        <div  className="w-full h-full flex flex-col  ">
          <div   className="w-full  ">
              <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            />
          </div>
        </div>
        <div  className="w-full h-full flex flex-col  ">
          <div   className="w-full  ">
              <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            />
          </div>
        </div>
      </Carousel>
      </div>    

    </div>
  )
}

export default Gallery