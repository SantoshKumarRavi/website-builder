import React from 'react'
import VolumeIcon from "../assests/volume.svg";
const NotificationCard = ({download=false,data}) => {
  return (
    <div class="py-3 flex   px-8 ">
    <div className='flex flex-1'>
    <div className="flex  items-start w-6 ">
      <div className=''>
      <div style={{  }} className="w-full h-full ">{/*h-1/3 md:h-2/5 */}
        <img alt="" className=" w-full h-full " src={VolumeIcon} />{/*h-4/5 md:h-full */}
      </div>
      </div>
    </div>
    <p class="text-left ml-2 text-sm 	 font-semibold  text-gray-600">
      {data?.description}
    </p>
    </div>
    <div className="flex md:w-32   md:pr-4 justify-end items-end  ">
      <a
        class="text-sm font-semibold text-blue-600 hover:text-blue-400"
        href={`${data?.link}`}
        target='_blank'
        style={{textDecoration: 'none' }} 
      >
        {download ? "Download" : "Checkout"}
      </a>
    </div>
  </div>

  )
}

export default NotificationCard