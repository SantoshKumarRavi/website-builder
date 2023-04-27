import React from 'react'
import ZigZagContainer from './ZigZagContainer'
import FacilityExtraCard from '../subcomponents/FacilityExtraCard'
const ExtraActivity = ({ExtraActivity}) => {
  let defaultCount=3
  let total=0
  let length=ExtraActivity?.list?.length
  let remainingStart=parseInt(ExtraActivity?.list?.length/defaultCount)*defaultCount

  return (
    <>
    {ExtraActivity?.list?.length>0&&
    <div className='px-12 my-4 ' id="Extra-curricular">
        <h1 className="text-left font-semibold	text-gray-800 text-xl my-2 md:my-4">Extra-curricular Activity</h1>{/*text-left font-semibold	text-gray-500 text-3xl my-2 md:my-4 md:mb-12 */}
        {ExtraActivity?.list?.map((obj,i)=>{
          if((i+1)%defaultCount===0){
          return <ZigZagContainer dataGroup={ExtraActivity?.list?.slice(i+1-defaultCount,i+1)}/>
          }
        })
        }
    {ExtraActivity?.list?.slice(remainingStart,ExtraActivity?.list?.length)?.length!==0 &&   
    <div className="flex flex-col md:flex-row  md:h-96 md:justify-center   ">{/*md:h-96 md:px-48 */}
      {ExtraActivity?.list?.slice(remainingStart,ExtraActivity?.list?.length)?.map((obj,i)=><FacilityExtraCard key={i} justify={"justify-center"} title={obj?.activityName||obj?.name} description={obj?.Description} src={obj?.image}/>)}
    </div>
    }
    </div>
    }
    </>
  )
}

export default ExtraActivity