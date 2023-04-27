import React from 'react';
import BorderImageWrapper from "./BorderImageWrapper"


const FacilityExtraCard = ({justify="justify-end",description,src,title}) => {
  const placeHolderImage="https://www.creativematerialscorp.com/wp-content/uploads/2018/01/Final-East-Greenbush_28A4342_mod.jpg"
  return (
    <div className={`md:p-10 w-full md:max-w-xl  md:h-full   flex flex-col ${justify}`}>
    <div className='w-full md:h-full  '>
      <div className='md:h-full h-96 '>
        <BorderImageWrapper>
        <div className='w-full h-full p-2'>
          <div className=' relative w-full h-full'>
          <img style={{width:"100%",height:"100%"}}  className='absolute z-20' src={src?src:placeHolderImage}/>
        </div>
        </div>
        </BorderImageWrapper>
      </div>
      <div>
      <h1 className='text-left text-sm font-bold my-2  text-gray-800'>{title}</h1>
      {description&&<p className='text-left text-xs text-gray-500' >{description}</p>}
      </div>
    </div>
    {/* <div className='bg-red-800 md:h-4/5 h-96'>
      hi
    </div> */}
  </div>
    )
}

export default FacilityExtraCard