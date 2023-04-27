import React from 'react'
import BorderImageWrapper from '../subcomponents/BorderImageWrapper'

const ImageDescriptionCard = ({data:{description,activityName,image}}) => {
  return (
  <div className='flex justify-center items-center '>
<div className="px-5 w-full md:w-1/2 md:max-w-lg   flex flex-col h-96  mt-4" >{/*lg:px-64 md:px-32 sm:px-16 px-8 */}
  <div className='h-4/5 w-full'>
    <div className='relative w-full h-full  '>
      <BorderImageWrapper>
        <div className='p-2 w-full h-full '>
          <div className='relative w-full h-full '>
            <div className='absolute z-20 w-full h-full '>
                <img className='w-full h-full' src={image}/>   
            </div>
          </div>
        </div>
      </BorderImageWrapper>
     </div>
  </div>
  <div className='h-1/5'>
  <h1 className='text-left text-xl font-bold my-2 text-gray-800'>{activityName}</h1>
    <p className='text-left text-gray-500' >{description}</p>     
  </div>
</div>
</div>
  )
}

export default ImageDescriptionCard