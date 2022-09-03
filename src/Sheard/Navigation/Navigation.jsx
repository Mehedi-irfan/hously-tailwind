import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import { FiUser } from 'react-icons/fi'

const Navigation = () => {
    return (
        <nav className='bg-white fixed z-50 w-full '>
            <div className='w-4/5 mx-auto flex py-4  justify-between items-center'>
                <div>
                    <img className='w-28' src={logo} alt="" />
                </div>
                <ul className='md:flex space-x-9 hidden'>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium px-2 font-sans'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium px-2 font-sans'>
                        <NavLink to='/buy'>Buy</NavLink>
                    </li>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium px-2'>
                        <NavLink to='/sell'>Sell</NavLink>
                    </li>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium px-2'>
                        <NavLink to='/listing'>Listing</NavLink>
                    </li>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium px-2'>
                        <NavLink to='/page'>Page</NavLink>
                    </li>
                    <li className='text-[17px] hover:text-green-700 duration-300 transition text-gray-600 font-medium '>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <div className='md:flex hidden space-x-4'>
                    <div className=' bg-green-600 rounded-full p-3 text-white hover:bg-green-700 transition-all duration-500' >
                        <FiUser />
                    </div>
                    <button className='bg-green-600 text-white py-2 px-4 rounded-full tracking-wider hover:bg-green-700 transition-all duration-500'>SignUp</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation