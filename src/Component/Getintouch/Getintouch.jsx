import React from 'react'
import { BsTelephone } from 'react-icons/bs'

const Getintouch = () => {
    return (
        <div className='md:w-10/12 mx-auto w-11/12 my-24'>
            <div className='text-center selection:bg-green-600 selection:text-white'>
                <h1 className='text-3xl text-black font-semibold tracking-wider'>What Our Client Say ?</h1>
                <p className='mt-4 text-gray-400'>A great plateform to buy, sell and rent your properties without any agent or  <br /> commisions.</p>
            </div>

            <div className='flex justify-center items-center mt-8'>
                <button className='flex items-center justify-center bg-green-600 text-white px-7 py-2 rounded-lg'><BsTelephone /> <p className='ml-2'>Contact us</p></button>
            </div>

        </div>
    )
}

export default Getintouch