import React from 'react'
import ImageDescriptionCard from './ImageDescriptionCard'

const Cocurricular = ({CoActivity}) => {
  return (
    <>
    {CoActivity?.list?.length>0&&
    <div className='px-12' id="Cocurricular">
    <h1 className="text-left font-semibold	text-gray-800 text-xl my-2 md:my-8">Cocurricular</h1>
    {CoActivity?.list?.map((obj)=><ImageDescriptionCard data={obj}/>)}
    </div>
    }
    </>
  )
}

export default Cocurricular   