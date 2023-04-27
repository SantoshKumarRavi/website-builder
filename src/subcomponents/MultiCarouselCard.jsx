import React from 'react'
import BorderImageWrapper from './BorderImageWrapper'
const MultiCarouselCard = ({Image,link="#",title="Standard X",download=false,designation=""}) => {
  const imgTemp="https://media.gettyimages.com/id/1205280102/photo/man-in-front-of-blackboard-at-school.jpg?s=612x612&w=gi&k=20&c=cpYXo6dQvhOrLeLTPQsf00XO6W7Sv4FNf8tIlXnZ11g="
  return (
    <div className='flex md:max-w-sm m-4 md:m-5   flex-col  h-60 md:h-96 '>
     <div  style={{height:"90%"}}>
     {//Image&&
        <BorderImageWrapper>
        <div className=' w-full h-full p-1'>
        <div className=' w-full h-full relative'>
        <img style={{width:"100%",height:"100%"}}  className='absolute z-20' src={Image||imgTemp}/>
        </div>
        </div>
        </BorderImageWrapper>
        }
      </div>
      
    <div className='grow'>
      <h1 className='my-1 md:my-4 text-left text-lg md:text-sm font-bold text-gray-800'>{title}</h1>
      {download&&<button className='bg-theme text-xs text-white md:text-sm px-8 py-1 md:py-2 rounded-full'>
      <a target='_blank' className='font-bold' href={`${link}`}
      style={{textDecoration: 'none',color:"white" }} 
      >Download</a>
      </button>}      
      {designation&&<p className='text-left text-xs md:text-sm py-1 md:py-2'>{designation}</p>}
      </div>
    </div>
  )
}

export default MultiCarouselCard