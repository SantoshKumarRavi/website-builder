import React from 'react'
import BorderImageWrapper from '../subcomponents/BorderImageWrapper'
const Herocard = ({title,Description,Hero_image}) => {
  const default_HeroImage="https://media.istockphoto.com/id/1163985429/photo/group-of-schoolboys-and-schoolgirls-at-school-campus.jpg?s=612x612&w=0&k=20&c=gF0_Qpp1uZ6VAyOi90xprZISgaiLxnpssWky0zJ6gRY="
  return (
<>
<div className="relative   md:grid md:grid-cols-12  mb-4 pt-4 md:px-12 ">
  <div className=' md:col-span-6 md:order-1    h-96   lg:h-[calc(500px)]     flex justify-center xl:justify-center' style={{backgroundColor:""}}>
  <div className='max-w-lg lg:max-w-4xl w-full h-full '>
  <BorderImageWrapper>
  <div className=' w-full h-full flex items-center justify-center' >
    <div className=' flex items-center justify-center w-full h-full p-2 '>
      <div className=' w-full h-full relative'>
    <img style={{width:"100%",height:"100%"}} className="absolute z-20" src={Hero_image?Hero_image:default_HeroImage} alt="Features 01"/>
    </div>
    </div>
  </div>
  </BorderImageWrapper>
  </div>
  </div>
  <div className=" relative  md:h-full h-1/2 h-96  lg:h-[calc(500px)] md:col-span-6 flex items-center xl:justify-center  " data-aos="fade-right" 
  style={{backgroundColor:""}}
  >{/*md:col-span-7 */}
    <div className="md:pr-4 lg:pr-12 xl:pr-16 ">
      <div className="font-semibold font-mono			 text-4xl md:text-5xl  mb-2 sm:text-center md:text-left p-16 pb-0 md:p-8  md:pl-16 ">
          <p className='!font-serif'>
            {title?title:"Keep Goal High"}
            </p> 
        </div>
      <h3 className="px-16 mt-6 mb-3 md:max-w-2xl sm:text-center md:text-left text-lg  text-gray-500">{Description?Description:"friendly, vibrant, community–minded school whose decisions always put our students first"}</h3>
    </div>
    <div className="hidden md:block 2xl:hidden w-24 h-36  p-4 bg-contain bg-model_blobImageB absolute bg-no-repeat	bottom-0 right-0 overflow-hidden	">
    </div>
    <div className="hidden w-48 h-48 2xl:hidden p-4 bg-contain bg-model_ImageBlobFull absolute bg-no-repeat	bottom-0 right-0 overflow-hidden	">
    </div>{/* need to add another new blob above and make visible in 2xl */}
    <div className="block md:hidden 2xl:hidden w-24 h-36  p-4 bg-contain bg-model_blobImageB absolute bg-no-repeat	bottom-0 right-0 overflow-hidden	">
    </div>
    <div className="block md:hidden 2xl:hidden w-24 h-36  p-4 bg-contain bg-model_blobT absolute bg-no-repeat	top-0 left-0 overflow-hidden	">
    </div>
  </div>{/*max-w-xl  md:max-w-none mx-auto*/}
  <div className="hidden md:block w-24 h-36  p-4 bg-contain bg-model_blobT absolute bg-no-repeat	top-0 left-0 overflow-hidden	">
  </div>
  <div className="block  w-24 h-24  p-4 bg-contain bg-model_blobB absolute bg-no-repeat	bottom-0 left-0 overflow-hidden	">{/*md:block hidden*/}
  </div> 
  <div className="hidden md:block w-36 h-36 2xl:hidden  p-4 bg-contain bg-model_blobImageT absolute bg-no-repeat	top-0 right-0 overflow-hidden	">
    </div>
    <div className="hidden w-48 h-48 2xl:block  p-4 bg-contain bg-model_ImageBlobFull absolute bg-no-repeat	top-0 right-0 overflow-hidden	">
    </div>
</div>
</>
    
    )
}

export default Herocard