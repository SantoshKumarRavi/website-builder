import React from 'react'
import Zigzagcard from '../subcomponents/Zigzagcard'
const ZigZagContainer = ({dataGroup}) => {
  return (
    <div className="flex flex-col md:flex-row   md:justify-center md:gap-8">
      {dataGroup?.map((obj,i)=><Zigzagcard justify={i%2===0?"justify-end":"justify-start"} title={obj?.activityName||obj?.name} description={obj?.Description} src={obj?.image}/>)}
    </div>
  )
}

export default ZigZagContainer