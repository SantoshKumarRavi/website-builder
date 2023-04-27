import React from "react";
import ZigZagContainer from "./ZigZagContainer";
import Zigzagcard from "../subcomponents/Zigzagcard";
import FacilityExtraCard from "../subcomponents/FacilityExtraCard";
const Facility = ({ Facility }) => {
  let defaultCount = 3;
  let remainingStart = parseInt(Facility?.length / defaultCount) * defaultCount;
  return (
    <>
      {Facility?.length>0 &&(
        <div className="relative px-8 my-0" id="Facility">
          <h1 className="text-left font-semibold	text-gray-800 text-xl my-2 md:my-4">
            Facility
          </h1>
          {Facility?.map((obj, i) => {
            if ((i + 1) % defaultCount === 0) {
              return (
                <ZigZagContainer
                  key={i}
                  dataGroup={Facility?.slice(i + 1 - defaultCount, i + 1)}
                />
              );
            }
          })}
          {Facility?.slice(remainingStart, Facility?.length)?.length !== 0 && (
            <div className="flex flex-col md:flex-row  md:h-96 md:justify-around   ">
              {/*md:h-96 md:px-48 md:h-96*/}
              {Facility?.slice(remainingStart, Facility?.length)?.map(
                (obj, i) => (
                  <FacilityExtraCard
                    key={i}
                    justify={"justify-center"}
                    title={obj?.activityName || obj?.name}
                    description={obj?.Description}
                    src={obj?.image}
                  />
                )
              )}
            </div>
          )}
          <div className="hidden md:block w-24 h-36  p-4 bg-contain bg-model_blobImageB absolute bg-no-repeat	bottom-0 right-0 overflow-hidden	"></div>
          {/* <div className="hidden md:block  w-24 h-36  p-4 bg-contain bg-model_blobT absolute bg-no-repeat	top-20 left-0 overflow-hidden	">
    </div> */}
          <div className="hidden md:block w-48 h-48 p-4 bg-contain bg-model_ImageBlobFull absolute bg-no-repeat	top-20 left-0 overflow-hidden	"></div>
          <div className="hidden md:block  w-24 h-24  p-4 bg-contain bg-model_blobB absolute bg-no-repeat	bottom-0 left-0 overflow-hidden	">
            {/*md:block hidden*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Facility;
