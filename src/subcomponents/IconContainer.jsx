import React from 'react'

const IconContainer = ({svg,link}) => {
  return (
    <div className=" p-2 rounded-xl	 text-neutral-600 w-12 h-12 md:w-16 md:h-11 border-2 border-theme border-solid ">
    <a href={link} target='_blank' className='w-full h-full '>
    <img src={svg} className="w-full h-full text-white" />
    </a>
    </div>

    )
}

export default IconContainer