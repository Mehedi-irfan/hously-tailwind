import React from 'react'
import { BsHouseDoor } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const WorksComponent = () => {
    return (
        <div className='md:w-10/12 mx-auto w-11/12 my-16'>
            <div className='text-center selection:bg-green-600 selection:text-white'>
                <h1 className='text-3xl text-black font-semibold tracking-wider'>How It Works</h1>
                <p className='mt-4 text-gray-400'>A great plateform to buy, sell and rent your properties without any agent or  <br /> commisions.</p>
            </div>

            {/* work card */}
            <div className='md:flex justify-center items-center mt-20 gap-5 '>
                {/* one card  */}
                <div className='hover:shadow-lg shadow-green-800 transition-shadow duration-500 py-6 px-2 rounded-lg'>
                    <div className='flex justify-center items-center bg-green-50 py-10 text-green-700 text-3xl w-[100px]  mx-auto clip-path'>
                        <BsHouseDoor className='' />
                    </div>
                    <div className='text-center py-6'>
                        <h1 className='text-xl font-semibold text-black'>Evaluate Property</h1>
                        <p className='mt-3 text-gray-500 px-6'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                    </div>
                </div>


                {/* 2nd card  */}
                <div className='hover:shadow-lg shadow-green-800 transition-shadow duration-500 py-6 px-2 rounded-lg'>
                    <div className='flex justify-center items-center bg-green-50 py-10 text-green-700 text-3xl w-[100px]  mx-auto clip-path'>
                        <BsHandbag />
                    </div>
                    <div className='text-center py-6'>
                        <h1 className='text-xl font-semibold text-black'>Meeting with Agent</h1>
                        <p className='mt-3 text-gray-500 px-6'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                    </div>
                </div>


                {/* 3rd card  */}
                <div className='hover:shadow-lg shadow-green-800 transition-shadow duration-500 py-6 px-2 rounded-lg'>
                    <div className='flex justify-center items-center bg-green-50 py-10 text-green-700 text-3xl w-[100px]  mx-auto clip-path'>
                        <FiKey />
                    </div>
                    <div className='text-center py-6'>
                        <h1 className='text-xl font-semibold text-black'>Close the Deal</h1>
                        <p className='mt-3 text-gray-500 px-6'>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksComponent