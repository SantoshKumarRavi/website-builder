import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CallButton from "../assests/callButton.svg"
import NavLinkContainer from "../subcomponents/NavLinkContainer"
import MobNavLinkContainer from "../subcomponents/MobNavLinkContainer";
function Header({ContactNo,image}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const logoImage="https://4.imimg.com/data4/EA/UE/ANDROID-9039016/product-500x500.jpeg"
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  function closeMobileNav(){
    setMobileNavOpen(false);
  }

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
 
  return (
    <header className="w-full h-22  shadow-xl	">{/*absolute md:relative */}
      <div className="px-4 sm:px-6   ">
        <div className="flex  items-center justify-between">
          <div className="flex-1 ">
            <div className="w-20 h-15 md:h-20">
            <a  href="#">
              <img src={image||logoImage} className="rounded-full" alt=""/>
            </a>
            </div>
          </div>
          <nav className="hidden md:flex   flex-col ">
            <div className="">
            <ul className={`flex  justify-end flex-wrap items-center ${!ContactNo?"pt-3":""}`}>
              {ContactNo&&<li>
                <a
                  to=""
                  href={`#${"!"}`}
                  style={{textDecoration: 'none',color:"black" }} 
                  className="font-medium   hover:text-green-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <div className="w-10 h-6 ">
                  <img  src={CallButton} className="w-full h-full" alt=""/>
                  </div>
                  <div className="font-semibold	text-gray-500">
                  {`+91-${ContactNo}`}
                  </div>
                </a>
              </li>
              }
              <li>
                <a
                  href="https://sundergarh.youthindiaeschool.com/"
                  target="_blank"
                  style={{textDecoration: 'none',color:"white" }} 
                  className="btn-sm font-semibold  text-white bg-theme hover:bg-green-900 ml-3 px-3 py-1 mt-2"
                >
                    Log in
                </a>
              </li>
            </ul>
            </div>
            <div className=" flex  justify-end items-center">
                  <NavLinkContainer title="Home" link="#home"/> 
                  <NavLinkContainer title="About us" link="#About"/>
                  <NavLinkContainer title="Curriculum" link="#Cocurricular"/>
                  <NavLinkContainer title="Events" link="#Events"/>
                  <NavLinkContainer title="Facility" link="#Facility"/>
                  <NavLinkContainer title="Activity" link="#Extra-curricular"/>
                  <NavLinkContainer title="Gallery" link="#Gallery"/>
            </div>
          </nav>

          <div className="md:hidden">
            <button    // Mobile menu 
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg
                className="w-6 h-6 fill-current text-theme hover:text-green-500 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute z-50 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-green-50 px-4 py-2 rounded-xl">
                
                <MobNavLinkContainer closeMobileNav={closeMobileNav}  title="Home"  link={"Home"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav}  title="About us"  link={"About"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav} title="Curriculum"  link={"Cocurricular"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav} title="Events" link={"Events"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav}  title="Facility" link={"Facility"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav} title="Activity" link={"Extra-curricular"}/>
                <MobNavLinkContainer closeMobileNav={closeMobileNav} title="Gallery" link={"Gallery"}/>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
