import React from 'react'
import facebook from "../assests/facebook.svg"
import instagram from "../assests/instagram.svg"
import twitter from "../assests/twitter.svg"
import IconContainer from '../subcomponents/IconContainer'
import youtube from "../assests/youtube.svg"
const Footer=({image,Address,Email,
  ContactNo,Media})=>{
    const logoImage="https://4.imimg.com/data4/EA/UE/ANDROID-9039016/product-500x500.jpeg"

  return (
  <footer className=" text-center    lg:text-left ">
          <div className="md:mx-6  text-center md:text-left py-5 md:py-10">
            <div className="md:grid-1 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            <div className='mb-20 md:mb-0'>
              <div className=' hidden md:block w-32 h-32 rounded-full'>
                <img src={image||logoImage} className="w-full h-full rounded-full"/>
              </div>
                {Address&&
                <div className="mb-4 mt-2 md:mt-4 flex items-center justify-center md:justify-start">
                <div className='h-5 w-5'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>

                </div>
                  <span className='text-xs pl-3 md:text-base text-left	  text-gray-700'>
                  {Address}
                  </span>
                  </div>
                  }
                {Email&&<div className="mb-4 flex items-center justify-center md:justify-start">
                <div className='h-5 w-5'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                  <span className='text-xs pl-3 md:text-base  text-gray-700'>
                  {Email}               
                  </span>
                  </div>}
                  {ContactNo&&
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                  <span className='text-xs md:text-base text-gray-700'>
                  +91-{ContactNo}
                  </span>
                </p>
                  }
              </div>
              <div className="mb-20 md:mb-0 md:p-16">
                <h6
                  className="mb-4 font-semibold	text-gray-800 flex justify-center uppercase md:justify-start">
                  USEFUL LINKS
                </h6> 
              {/* navigation works fine in separete website..When integratring inside E-school, whole software moving upwards. */}
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600"//#Cocurricular
                    style={{textDecoration: 'none' }}  
                    >Co-curricular
                    Activity
                    </a>
                  
                </p>
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600"//Extra-curricular
                    style={{textDecoration: 'none' }} 
                    >Extra-curricular
                    Activity
                    </a>
                  
                </p>
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600 "//Gallery
                    style={{textDecoration: 'none' }} 
                    >Gallery
                    </a>
                  
                </p>

              </div>
              <div className=" md:p-16">
                <h6
                  className="mb-4 flex text-gray-800 justify-center font-semibold uppercase md:justify-start">
                  INFO {/* navigation works fine in separete website..When integratring inside E-school, whole software moving upwards. */}
                </h6>
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600 "//About
                  style={{textDecoration: 'none' }} 
                    >About us 
                    </a>
                </p>
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600 "//Facility
                    style={{textDecoration: 'none' }} 
                    >Facility
                  </a>
                </p>
                <p className="mb-4 md:text-left">
                  <a href="#!" className="text-base hover:text-theme hover:font-semibold text-gray-600 "//Curriculum
                    style={{textDecoration: 'none' }} 
                    >Curriculum
                    </a>
                  
                </p>
                <p className='md:text-left'>
                  <a href="#!" className="text-base  text-gray-600 hover:font-semibold hover:text-theme"//Events
                    style={{textDecoration: 'none' }} 
                    >School Events
                    </a>
                </p>
              </div>
              <div className="p-16 md:py-16 md:px-4">
                <h6
                  className="mb-4 flex justify-center text-gray-800 font-semibold uppercase md:justify-start">
                  SOCIAL MEDIA
                </h6>
                <div className="flex justify-center gap-5	 items-center ">
                <IconContainer svg={youtube} link={Media?.youtube}/>
                <IconContainer svg={instagram} link={Media?.instagram}/>
                <IconContainer svg={twitter} link={Media?.twitter}/>
            </div>
              </div>
            </div>
          </div>
          <div className="p-6 text-center ">
            <span>© {new Date().toDateString().slice(-4)} Copyright:</span>
            <span className="font-semibold text-neutral-600"> Youth India E-school</span>
          </div>
  </footer>
  )
}
    
export default Footer