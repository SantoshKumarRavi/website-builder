import React from 'react'

const MobNavLinkContainer = ({link,title,closeMobileNav}) => {
  return (
    <li onClick={()=>closeMobileNav()}>
    <a
      href={`#!`}//link
      style={{textDecoration: 'none',color:"black" }}
      className="flex font-medium w-full text-theme hover:text-green-900 py-2 justify-center"
    >
    {title}
    </a>
  </li>

  )
}

export default MobNavLinkContainer