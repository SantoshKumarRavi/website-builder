import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Achievements = () => {
  const src = "http://techslides.com/demos/sample-videos/small.mp4";

  return (
    <div className=""  >
      <h1 className="text-left  text-3xl my-2 md:my-4  px-8">Achievements</h1>
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
          <div style={{height:"70%"}}  className="w-full  ">{/*style={{height:"70%"}} */}
            <video controls className="w-full h-full">
              <source className="w-full h-full" src={src} type="video/mp4" />
            </video>
              {/* <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            /> */}
          </div>
          <div  className="w-full ">{/*style={{height:"20%"}} */}
          <h1 className="text-left text-xs  md:text-xl my-1 md:my-4 font-semibold">
            1 International Chess competition 2023- 1st Prize
          </h1>
          <p className="text-left text-xs md:text-lg ">
            Members of the Kinkaid community are reliable and hold themselves
            and others accountable for their actions. We do not make excuses,
            blame others, or take unwarranted credit.
          </p>
          </div>
        </div>
        <div  className="w-full h-full flex flex-col  ">
          <div style={{height:"70%"}}  className="w-full  ">{/*style={{height:"70%"}} */}
              <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            />
          </div>
          <div  className="w-full ">{/*style={{height:"20%"}} */}
          <h1 className="text-left text-xs  md:text-xl my-1 md:my-4 font-semibold">
            1 International Chess competition 2023- 1st Prize
          </h1>
          <p className="text-left text-xs md:text-lg ">
            Members of the Kinkaid community are reliable and hold themselves
            and others accountable for their actions. We do not make excuses,
            blame others, or take unwarranted credit.
          </p>
          </div>
        </div>
        <div  className="w-full h-full flex flex-col  ">
          <div style={{height:"70%"}}  className="w-full  ">{/*style={{height:"70%"}} */}
              <img
              className="w-full h-full"
              alt=""
              src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
            />
          </div>
          <div  className="w-full ">{/*style={{height:"20%"}} */}
          <h1 className="text-left text-xs  md:text-xl my-1 md:my-4 font-semibold">
            1 International Chess competition 2023- 1st Prize
          </h1>
          <p className="text-left text-xs md:text-lg ">
            Members of the Kinkaid community are reliable and hold themselves
            and others accountable for their actions. We do not make excuses,
            blame others, or take unwarranted credit.
          </p>
          </div>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Achievements;
