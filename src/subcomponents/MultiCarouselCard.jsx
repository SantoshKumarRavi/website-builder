import React from 'react'

const MultiCarouselCard = ({link="#",title="Standard X",download=false,designation=""}) => {
  const src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" 
  return (
    <div className='flex flex-col m-5 h-60 md:h-96 '>
      <div className='h-4/5 '>
        <img src={src} className='w-full h-full '/>
      </div>
    <div className='grow my-2 '>
      <h1 className='my-1 md:my-2 text-left text-lg md:text-2xl'>{title}</h1>
      {download&&<button className='bg-blue-600 text-xs md:text-sm px-8 py-1 md:py-2 rounded-full'>
      <a className='' href={`${link}`}>Download</a>
      </button>}
      {designation&&<p className='text-left text-xs md:text-sm py-1 md:py-2'>{designation}</p>}
      </div>
    </div>
  )
}

export default MultiCarouselCard