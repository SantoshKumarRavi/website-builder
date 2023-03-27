import React from 'react'
import UpcomingEventsCard from './UpcomingEventsCard'
const UpcomingEvents = () => {
  return (
    <div>
        <h1 className="text-left  text-3xl my-2 md:my-4  px-8">UpcomingEvents</h1>
        <div className='flex flex-col  gap-y-10'>
        <UpcomingEventsCard Time={{start:"10 AM",end:"12 AM"}} Date={{month:"APRIL",date:26,year:2023}} title="Webinar: Developing critical thinking through the CBSE"/>
        <UpcomingEventsCard Time={{start:"10 AM",end:"12 AM"}} Date={{month:"APRIL",date:26,year:2023}} title="Webinar: Developing critical thinking through the CBSE"/>
        <UpcomingEventsCard Time={{start:"10 AM",end:"12 AM"}} Date={{month:"APRIL",date:26,year:2023}} title="Webinar: Developing critical thinking through the CBSE"/>
        </div>

    </div>
  )
}

export default UpcomingEvents