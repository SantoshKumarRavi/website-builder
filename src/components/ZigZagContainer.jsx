import React from 'react'

const ZigZagContainer = ({description=true}) => {
  const src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" 
  return (
    <div className="flex flex-col md:flex-row md:h-96">
    <div className='w-full h-full   py-1 px-5 flex flex-col justify-end'>
      <div className='h-4/5  pb-8' >
        <div className='h-4/5 '>
          <img className='w-full h-full' src={src}/>
        </div>
        <div>
        <h1 className='text-left text-xl font-bold my-2'>Sports meet-2023</h1>
        {description&&<p className='text-left text-xs' >Members of the Kinkaid community are reliable and hold themselves and others accountable for their actions. We do not make excuses, blame others, or take unwarranted credit.</p>}
        </div>
      </div>
    </div>
    <div className='w-full h-full  py-1 px-5  flex flex-col justify-start'>
      <div className='h-4/5  pb-8' >
        <div className='h-4/5 '>
          <img className='w-full h-full' src={src}/>
        </div>
        <div>
        <h1 className='text-left text-xl font-bold my-2'>Sports meet-2023</h1>
        {description&&<p className='text-left text-xs' >Members of the Kinkaid community are reliable and hold themselves and others accountable for their actions. We do not make excuses, blame others, or take unwarranted credit.</p>}
        </div>
      </div>
    </div>
    <div className='w-full h-full  py-1 px-5  flex flex-col justify-end'>
      <div className='h-4/5  pb-8' >
        <div className='h-4/5 '>
          <img className='w-full h-full' src={src}/>
        </div>
        <div>
        <h1 className='text-left text-xl font-bold my-2'>Sports meet-2023</h1>
        {description&&<p className='text-left text-xs' >Members of the Kinkaid community are reliable and hold themselves and others accountable for their actions. We do not make excuses, blame others, or take unwarranted credit.</p>}
        </div>
      </div>
    </div>
   


    </div>
  )
}

export default ZigZagContainer