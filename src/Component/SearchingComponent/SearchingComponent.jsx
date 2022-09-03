import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsHouseDoor } from 'react-icons/bs'
import { BiDollarCircle } from 'react-icons/bi'

const SearchingComponent = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='flex md:space-x-4 space-x-6 justify-center bg-white md:w-1/4 w-full shadow-lg  p-4 text-center relative z-50 md:-top-36 -top-20 rounded-t-2xl border-b-2 border-gray-400'>
                <p className='bg-green-600 px-4 py-2 text-white rounded-lg' >Buy</p>
                <p className='px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-100 hover:text-green-700 duration-300 transition'>Sell</p>
                <p className='px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-100 hover:text-green-700 duration-300 transition'>Rent</p>
            </div>


            <div className='md:flex justify-between md:space-y-0 space-y-4 bg-white py-12 px-8 shadow-2xl md:-top-36 -top-20 relative z-50 rounded-b-2xl md:rounded-r-2xl'>
                <div>
                    <label className='text-lg text-black' htmlFor="">Search :</label>
                    <div className='flex items-center bg-gray-100 w-full py-3 px-2 space-x-2'>
                        <BiSearch className='text-xl text-green-600 ' />
                        <input className='bg-transparent outline-none focus:outline-none ' type="search" placeholder='Search Your Keyword' />
                    </div>

                    <button className='w-full bg-green-600 text-white py-3 rounded-lg  mt-6'>Search</button>

                </div>
                <div>
                    <label className='text-lg text-black' htmlFor="">Select Categories :</label>
                    <div className='flex items-center bg-gray-100 w-full py-3 px-2 space-x-2'>
                        <BsHouseDoor className='text-xl text-green-600 ' />
                        <input className='bg-transparent outline-none focus:outline-none ' type="number" placeholder='Houses' />
                    </div>
                </div>
                <div>
                    <label className='text-lg text-black' htmlFor="">Min Price :</label>
                    <div className='flex items-center bg-gray-100 w-full py-3 px-2 space-x-2'>
                        <BiDollarCircle className='text-xl text-green-600 ' />
                        <input className='bg-transparent outline-none focus:outline-none ' type="number" placeholder='Min Price ' />
                    </div>
                </div>
                <div>
                    <label className='text-lg text-black' htmlFor="">Max Price :</label>
                    <div className='flex items-center bg-gray-100 w-full py-3 px-2 space-x-2'>
                        <BiDollarCircle className='text-xl text-green-600 ' />
                        <input className='bg-transparent outline-none focus:outline-none ' type="number" placeholder='Max Price ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchingComponent