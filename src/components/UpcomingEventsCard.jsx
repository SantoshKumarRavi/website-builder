import React from "react";

const UpcomingEventsCard = ({title,date,Time,link=false}) => {
    const month=new Date(date).toDateString().slice(4,7).toUpperCase()
    const currentdate=new Date(date).getDate()
    const year=new Date(date).getFullYear()
    const[start,end]=Time?.split("-");

  return (
    <div className=" w-full mb-1 px-2 max-w-2xl">{/*px-4 md:px-32 */}
    <div className="flex w-full  overflow-hidden  rounded-lg shadow-md">
      <div className="flex flex-col items-center text-white justify-center w-1/4 md:w-1/6 py-2 bg-blue-600">
        <div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#2563EB"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Calendar / Calendar_Days" >
              <path
                id="Vector"
                d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="text-xs font-semibold">{month}</div>
        <div className="text-xl md:text-3xl font-bold">{currentdate}</div>
        <div className="text-xs">{year}</div>
      </div>
      <div className="p-4  w-full">
          <div className="font-bold  text-left text-xs md:text-xl">
                {title}
          </div>
          <div className="flex justify-between items-center pt-2 md:pt-4">
            <div className="flex justify-center items-center">
              <svg
                // width="30"
                // height="30"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z"
                  fill="#005AA9"
                />
              </svg>
              <div className=" ml-2 text-sm md:text-md">{start?.trim()} {end&&`to ${end?.trim()}`?.trim()}</div>
            </div>
            {link&&
            <button className="rounded-lg px-4 text-white py-1 bg-green-500 hover:bg-green-600 font-medium">
            Register
          </button>
            }
          </div>
      </div>
    </div>
    </div>
  );
};

export default UpcomingEventsCard;
