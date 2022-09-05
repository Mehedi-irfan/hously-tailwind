import React from 'react'
import ClientImg1 from '../../images/clientImg/clientImg1.jpg'
import ClientImg2 from '../../images/clientImg/clientImg2.jpg'
import ClientImg3 from '../../images/clientImg/clientImg3.jpg'
import { AiTwotoneStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <div className='md:w-10/12 mx-auto w-11/12 my-24'>
            <div className='text-center selection:bg-green-600 selection:text-white'>
                <h1 className='text-3xl text-black font-semibold tracking-wider'>What Our Client Say ?</h1>
                <p className='mt-4 text-gray-400'>A great plateform to buy, sell and rent your properties without any agent or  <br /> commisions.</p>
            </div>

            {/* client revew  */}
            <Slider {...settings} className='md:w-3/6 mx-auto flex mt-9 relative'>
                <div className='md:w-3/6 mx-auto flex relative'>
                    <div className='md:text-7xl text-5xl text-gray-300 ml-2'>
                        <FaQuoteLeft />
                    </div>


                    <div className='mt-9 text-center'>
                        <p className='px-4 text-gray-400 font-semibold tracking-wider mb-6 text-justify pr-16'>
                            slide 1 of 6
                            " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. "</p>
                        <div className='flex items-center justify-center'>
                            <p>
                                <ul className='flex justify-center items-center space-x-1 text-xl'>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                </ul>
                            </p>
                        </div>

                        <div className='flex justify-center items-center my-4'>
                            <img className='w-20 rounded-full' src={ClientImg1} alt="" />
                        </div>
                        <div className='pb-6'>
                            <h1 className='font-semibold text-black text-lg '>Christa Smith</h1>
                            <p className='text-gray-400 font-medium'>Manager</p>
                        </div>
                    </div>

                    <div className='absolute top-40 right-0 md:text-7xl text-5xl text-gray-300'>
                        <FaQuoteRight />
                    </div>
                </div>


                <div className='md:w-3/6 mx-auto flex mt-8 relative'>
                    <div className='md:text-7xl text-5xl text-gray-300 ml-2'>
                        <FaQuoteLeft />
                    </div>


                    <div className='mt-9 text-center'>
                        <p className='px-4 text-gray-400 font-semibold tracking-wider mb-6 text-justify pr-16'>
                            slide 1 of 6
                            " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. "</p>
                        <div className='flex items-center justify-center'>
                            <p>
                                <ul className='flex justify-center items-center space-x-1 text-xl'>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                </ul>
                            </p>
                        </div>

                        <div className='flex justify-center items-center my-4'>
                            <img className='w-20 rounded-full' src={ClientImg2} alt="" />
                        </div>
                        <div className='pb-6'>
                            <h1 className='font-semibold text-black text-lg '>Christa Smith</h1>
                            <p className='text-gray-400 font-medium'>Manager</p>
                        </div>
                    </div>

                    <div className='absolute top-40 right-0 md:text-7xl text-5xl text-gray-300'>
                        <FaQuoteRight />
                    </div>
                </div>



                <div className='md:w-3/6 mx-auto flex mt-8 relative'>
                    <div className='md:text-7xl text-5xl text-gray-300 ml-2'>
                        <FaQuoteLeft />
                    </div>


                    <div className='mt-9 text-center'>
                        <p className='px-4 text-gray-400 font-semibold tracking-wider mb-6 text-justify pr-16'>
                            slide 1 of 6
                            " Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. "</p>
                        <div className='flex items-center justify-center'>
                            <p>
                                <ul className='flex justify-center items-center space-x-1 text-xl'>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                    <li className='text-yellow-400'><AiTwotoneStar /></li>
                                </ul>
                            </p>
                        </div>

                        <div className='flex justify-center items-center my-4'>
                            <img className='w-20 rounded-full' src={ClientImg3} alt="" />
                        </div>
                        <div className='pb-6'>
                            <h1 className='font-semibold text-black text-lg '>Christa Smith</h1>
                            <p className='text-gray-400 font-medium'>Manager</p>
                        </div>
                    </div>

                    <div className='absolute top-40 right-0 md:text-7xl text-5xl text-gray-300'>
                        <FaQuoteRight />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ClientComponent