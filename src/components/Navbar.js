import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Images/logo.webp"
import {useLocation} from 'react-router-dom'

const Navbar = () => {

    const location=useLocation();

  return (
    <div  className={`flex h-14 items-center justify-between border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}>
         <Link to="/">
          <img src={logo} alt="Logo" width={160} height={10} loading="lazy" />
        </Link>

        <div className="hidden items-center gap-x-4 md:flex">
        <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>

        </div>
      
    </div>
  )
}

export default Navbar
