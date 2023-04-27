import React from 'react'
import BorderImageWrapper from './BorderImageWrapper'

const GalleryImageCard = ({data}) => {
  return (
    <div   className="w-full h-96   "> {/*h-80 flex flex-col*/}
    <BorderImageWrapper>
    <div className=' w-full flex h-full  items-center p-2'>
    <div className='w-full h-full  '>
    <div className=' w-full h-full relative bg-blue-500 z-20'>
    <img style={{width:"100%",height:"100%"}} className="" src={data?.image}  alt={data?.name||"Gallery image"} />
    </div>
      </div>
    </div>
    {/* <img style={{width:"96%",height:"92%"}} className="z-20" src={data?.image}  alt={data?.name||"Gallery image"} /> */}
    </BorderImageWrapper>
   {/* <BorderImageWrapper>
  <div className=' w-full h-full flex items-center justify-center' >
    <div className=' flex items-center justify-center w-full h-full p-2 '>
      <div className=' w-full h-full relative'>
    <img style={{width:"100%",height:"100%"}} className="absolute z-20" src={data?.image} alt="Features 01" />
    </div>
    </div>
  </div>
  </BorderImageWrapper> */}
  </div>
    )
}

export default GalleryImageCard