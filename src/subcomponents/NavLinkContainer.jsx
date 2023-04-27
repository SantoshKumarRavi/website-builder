import React from 'react'
import { Link } from 'react-router-dom'
const NavLinkContainer = ({title="",link=""}) => {
  return (
    // <li>
    <div className={`md:ml-6 lg:ml-12 pb-4  group relative `}>
    <div
      className={`mb-2 w-full group text-center`}
    >
      <a className='' style={{textDecoration: 'none',color:"black" }} href={`${"#"}`}>
       <span className='hover:text-theme font-semibold	text-gray-500'> {title}</span>
        </a>{/* not rendering link for inside navigation coz software is moved up when we used.. but working fine as separete website*/}
    </div>
    <span className="bg-theme  w-0   absolute h-1 block group-hover:w-full transition-all duration-300"></span>
  </div>
  // </li>
    )
}

export default NavLinkContainer