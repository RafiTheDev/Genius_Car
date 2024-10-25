
import logo from './../../assets/Desktop-1 icons/logo.svg.png'
import { CiSearch } from "react-icons/ci"
import { IoBagHandleOutline } from "react-icons/io5"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const navbar =<>
  
  
  <li>
    <NavLink to={'/'}>Home</NavLink>
  </li>


  <li>
      <NavLink to={'/about'}>About Us</NavLink>
    </li>

    <li>
      <NavLink to={'/services'}>Services</NavLink>
    </li>

    <li>
      <NavLink to={'/blog'}>Blog</NavLink>
    </li>
    
    <li>
      <NavLink to={'/contact'}>Contact</NavLink>
    </li>
  </>

  return (
    <div className=" bg-base-100">
        <div className="navbar lg:container lg:mx-auto mx-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navbar}  
       
      </ul>

    </div>
   

    <Link to={'/'} className='text-xl'>
    <img src={logo} alt="Genius logo"></img> 
    </Link>




  </div>

  <div className="navbar-center hidden lg:flex font-bold">
    <ul className="menu menu-horizontal px-1 text-lg gap-10" >
      {navbar}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  <IoBagHandleOutline className="text-2xl" />
  <CiSearch className="text-2xl" />
  
    <a className="btn font-bold border-[#FF3811] rounded-md ">Appointment</a>
  </div>
</div>
    </div>
  )
}

export default Navbar