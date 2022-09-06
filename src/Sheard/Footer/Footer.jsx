import React from 'react'
import LogoImg from '../../images/footer-logo.png'
import { AiOutlineRight } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiLinkedin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='bg-slate-900 '>
            <div className='w-5/6 mx-auto py-28 md:flex md:justify-between   text-white md:space-y-0 space-y-8'>

                <div>
                    <div >
                        <img className='w-44' src={LogoImg} alt="" />
                    </div>
                    <p className='mt-8 tracking-wider font-medium leading-7 text-white pr-10'>A great plateform to buy, sell <br />  and rent your properties without <br />  any agent or commisions.</p>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold mb-4'>Company</h1>
                    <ul className='space-y-2'>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>About us</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Services</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Pricing</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Blog</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Login</p></li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold mb-4'>Usefull Links</h1>
                    <ul className='space-y-2'>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Terms of Services</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Privacy Policy</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Listing</p></li>
                        <li className='flex  items-center'><AiOutlineRight /> <p className='ml-2 hover:text-gray-400 cursor-pointer duration-300'>Contact</p></li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold mb-4'>Contact Details</h1>
                    <div className='flex'>
                        <div className='text-2xl text-green-600'>
                            <HiOutlineLocationMarker />
                        </div>
                        <div className='ml-2'>
                            <p>C/54 Northwest Freeway,</p>
                            <p>Suite 558,</p>
                            <p>Houston, USA 485</p>
                        </div>
                    </div>

                    <div className='flex items-center my-3'>
                        <div className='text-xl text-green-600'>
                            <AiOutlineMail />
                        </div>
                        <p className='ml-2'>contact@example.com</p>
                    </div>

                    <div className='flex items-center' >
                        <div className='text-xl text-green-600'>
                            <BsTelephone />
                        </div>
                        <p className='ml-2'>+152 534-468-854</p>
                    </div>
                </div>

            </div>

            <div className='border-t border-gray-500'>
                <div className='w-5/6 mx-auto py-8 md:flex justify-between items-center text-white md:space-y-0 space-y-5'>
                    <div className='flex items-center md:text-xl text-md'><AiOutlineCopyrightCircle /> <p className='ml-1'>2022 Hously Design By Mehedi Irfan</p></div>
                    <div>
                        <ul className='flex justify-center items-center space-x-2'>
                            <li className='border border-gray-600 text-gray-400 p-1.5 hover:text-white hover:bg-green-600 transition-all duration-300 text-sm rounded-md '><FiFacebook /></li>
                            <li className='border border-gray-600 text-gray-400 p-1.5 hover:text-white hover:bg-green-600 transition-all duration-300 text-sm rounded-md '><FaInstagram /></li>
                            <li className='border border-gray-600 text-gray-400 p-1.5 hover:text-white hover:bg-green-600 transition-all duration-300 text-sm rounded-md '><FiTwitter /></li>
                            <li className='border border-gray-600 text-gray-400 p-1.5 hover:text-white hover:bg-green-600 transition-all duration-300 text-sm rounded-md '><FiLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer