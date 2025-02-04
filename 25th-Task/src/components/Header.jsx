import React from 'react'
import "../App.css";
import { Link } from 'react-router';
function Header() {
  return (
    <div
          id="navBar"
          className="z-50 bg-slate-200 fixed"
        >
          <div className="imgTag">
            <img
              className="imgTag"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmt3cgrOf1tK4H9GSty9uoPaucdmr8IFurA&s"
              alt="img"
            />
          </div>
          <div className="navOptions">
            <Link to='/'>Home</Link></div>
          <div className="navOptions">Categories</div>
          <div className="navOptions">About Us</div>
        </div>
  )
}

export default Header