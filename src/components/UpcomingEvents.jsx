import React from 'react'
import UpcomingEventsCard from './UpcomingEventsCard'
const UpcomingEvents = ({Events}) => {
  return (
    <>
    {Events?.length>0&& 
      <div id="Events" className='my-4'>
          <h1 className="text-left  text-xl mb-8 font-semibold	text-gray-800  px-8">UpcomingEvents</h1>
          <div className='flex flex-col items-center xl:items-start py-4   gap-y-10 mx-10'>{/*bg-gray-200 */}
          {Events?.map((obj,i)=><UpcomingEventsCard key={i} Time={obj?.time} date={obj?.date} title={obj?.title}/>)}
          </div>
      </div>
    }
      </>
  )
}

export default UpcomingEvents