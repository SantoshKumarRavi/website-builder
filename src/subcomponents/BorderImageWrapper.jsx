import React from 'react'

const BorderImageWrapper = ({children}) => {
  return (
    <div  className="relative  w-full h-full "  data-aos="fade-up">{/*flex mx-auto items-center justify-center */}
    {children}
    <div className='absolute top-0 left-0 bg-theme w-1/5 h-1/4 z-10'></div>
    <div className='absolute bottom-0 right-0 bg-theme w-1/5 h-1/4 z-10'></div>
  </div>
  )
}

export default BorderImageWrapper