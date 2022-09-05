import React, { useEffect, useState } from 'react'
import { SiSquare } from 'react-icons/si'
import { MdBed } from 'react-icons/md'
import { TbBath } from 'react-icons/tb'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

const FeaturedComponent = () => {
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() => {
        fetch('./FeaturedData.JSON')
            .then(res => res.json())
            .then(data => setFeaturedData(data))
    }, [])
    return (
        <div className='md:w-10/12 mx-auto w-11/12 my-24'>
            <div className='text-center selection:bg-green-600 selection:text-white'>
                <h1 className='text-3xl text-black font-semibold tracking-wider'>Featured Properties</h1>
                <p className='mt-4 text-gray-400'>A great plateform to buy, sell and rent your properties without any agent or  <br /> commisions.</p>
            </div>
            <div className='md:grid grid-cols-3 gap-8 md:space-y-0 space-y-6 mt-16'>
                {
                    featuredData.map((value) => {
                        const { image, title, id, price, rating, squr, bad, bath } = value;
                        return (
                            <div key={id} className='border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-500 '>
                                <div className='relative'>
                                    <img className='rounded-t-2xl' src={image} alt="" />
                                    <div className='absolute top-6 left-72 text-red-600 bg-white p-3 rounded-full'>
                                        <FaHeart />
                                    </div>
                                </div>
                                {/* bed bath and sqr  */}
                                <div className='py-6 px-4'>
                                    <div>
                                        <h1 className='text-lg text-gray-600 font-semibold pb-5 border-b border-gray-200'>{title}</h1>
                                        <div className='pb-5 border-b border-gray-200 flex justify-between items-center pt-5'>
                                            <p className='flex justify-center items-center '>
                                                <p className='text-xl text-green-600'>     <SiSquare /></p>
                                                <p className='ml-2'>{squr}</p>
                                            </p>
                                            <p className='flex justify-center items-center'>
                                                <p className='text-3xl text-green-600'>    <MdBed /></p>
                                                <p className='ml-2'>   {bad} Beds</p>
                                            </p>
                                            <p className='flex justify-center items-center'>
                                                <p className='text-2xl text-green-600'> <TbBath /></p>
                                                <p className='ml-2'> {bath} Baths</p>
                                            </p>
                                        </div>
                                    </div>
                                    {/* rating or price  */}
                                    <div className='flex justify-between items-center pt-5 pb-2'>
                                        <p>
                                            Price <br />
                                            $ {price}
                                        </p>
                                        <div className='flex items-center'>
                                            <p>Ratings
                                                <ul className='flex justify-center items-center space-x-1'>
                                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                                    <p className='ml-2 font-semibold text-gray-800'>{rating}(30)</p>
                                                </ul>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FeaturedComponent