import React from 'react'
// import { Element } from 'react-scroll'

const About = ({About}) => {
  return (<>
  {About&&
    <div id="About" className='my-4'>
    <div>{/*id="About" */}
        <h1 className='text-left px-8 text-xl font-semibold	text-gray-800'>About</h1>
        <p className='text-justify px-8 lg:pr-64 font-semibold text-gray-600' >
          {About}
        </p>
     </div>
     </div>
  }
  </>
  )
}

export default About