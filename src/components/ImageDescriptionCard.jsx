import React from 'react'

const ImageDescriptionCard = () => {
const src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" 
  return (
    <div className='w-full  px-8 md:px-32 py-8'>
        <div className='md:h-96'>
        <img className='w-full h-full' src={src}/>
        </div>
        <h1 className='text-left text-xl font-bold my-2'>Chess competition</h1>
        <p className='text-left' >Members of the Kinkaid community are reliable and hold themselves and others accountable for their actions. We do not make excuses, blame others, or take unwarranted credit.</p>
    </div>
  )
}

export default ImageDescriptionCard