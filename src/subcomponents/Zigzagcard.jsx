import React from 'react';
import BorderImageWrapper from "./BorderImageWrapper"


const Zigzagcard = ({justify="justify-end",description,src,title}) => {
  const placeHolderImage="https://healthyschoolscampaign.org/dev/wp-content/uploads/2020/01/content-uploads-Blog-Images-Health_in_Mind-CNR-Facilities-blog1.jpg"
  return (
    <div className={`w-full md:h-full  lg:h-[calc(500px)]  md:max-w-xl	 md:px-3  flex flex-col ${justify}`}>
    <div className=' md:h-4/5  '>
      <div className='md:h-4/5 h-96 '>
        <BorderImageWrapper>
        <div className='w-full h-full p-2'>
          <div className=' relative w-full h-full'>
          <img style={{width:"100%",height:"100%"}}  className='absolute z-20' src={src?src:placeHolderImage}/>
        </div>
        </div>
        </BorderImageWrapper>
      
      </div>
    <div className=''>
      <h1 className='text-left  text-sm font-bold my-2  text-gray-800'>{title}</h1>
      {description&&<p className='text-left text-xs text-gray-500' >{description}</p>}
      </div>
    </div>
  </div>
    )
}

export default Zigzagcard