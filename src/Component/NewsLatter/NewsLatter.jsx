import React from 'react'
import { FiMail } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs'

const NewsLatter = () => {
    return (
        <div className='md:w-10/12 mx-auto w-11/12 mt-16 top-14 relative rounded-2xl bg-white shadow-2xl md:flex justify-between items-center px-8 py-12  overflow-hidden space-y-5 md:space-y-0'>
            <div className='relative '>
                {/* <div className='absolute -top-16 -left-12 text-9xl font-semibold  -rotate-45 z-0 text-slate-300'>
                    <FiMail />
                </div> */}
                <div className='z-50'>
                    <h1 className='md:text-2xl text-xl text-black font-semibold mb-2 '>Subscribe to Newsletter!</h1>
                    <p className='text-gray-400 tracking-wider'>Subscribe to get latest updates and information.</p>
                </div>

            </div>
            <div className='md:w-[45%] w-full border border-gray-400 md:py-[2px] px-[2px] py-[1px] rounded-full bg-transparent flex justify-between relative'>
                {/* <div className='absolute -top-8 -right-12 text-9xl font-semibold   text-slate-300'>
                    <BsPencil />
                </div> */}
                <input type="email"
                    className='bg-transparent md:px-2 ml-2 placeholder:ml-2 outline-none focus:outline-none'
                    placeholder='Enter your Email :'


                />
                <button className='bg-green-600 text-white font-medium md:px-6 px-4 py-2.5 rounded-full hover:bg-green-800 transition-all duration-300'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLatter