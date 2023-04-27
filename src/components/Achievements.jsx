import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import AchievementCard from "../subcomponents/AchievementCard";
import ArrowLeft from "../assests/arrowLeft.svg"
import ArrowRight from "../assests/arrowRight.svg"

const Achievements = ({Achievements}) => {
  return (
    <>
    {Achievements?.length>0&&
    <div className="my-4"  >
      <h1 className="text-left  text-xl my-2  font-semibold	text-gray-800 px-8">Achievements</h1>
      <div className="w-full h-full mx-4 md:mt-8 " >
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable
        infiniteLoop
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } flex left-0 h-full  justify-center items-center opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <img src={ArrowLeft} className="w-full  h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-5  flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <img src={ArrowRight} className="w-9 h-9 text-white" />
            </div>
          );
        }}
        showArrows={true}
        autoPlay={false}
        interval={2000}
      >
        {Achievements?.map((obj,i)=><AchievementCard key={i} data={obj}/>)}
      </Carousel>

      </div>
    </div>
    }
    </>
  );
};

export default Achievements;
