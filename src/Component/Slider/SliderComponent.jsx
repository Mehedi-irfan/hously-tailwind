import React from 'react'
import sliderImg1 from '../../images/sliderImg/slider1.jpg'
import sliderImg2 from '../../images/sliderImg/slider2.jpg'
import sliderImg3 from '../../images/sliderImg/slider3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderComponent = () => {

    return (
        <div className='md:px-6 px-2 py-4 overflow-hidden '>
            <Swiper>

                {/* slider img one  */}
                <SwiperSlide>
                    <div className='relative md:top-16 top-12'>
                        <img className='bg-no-repeat bg-cover bg-center  object-cover md:rounded-3xl  rounded-lg' src={sliderImg1} alt="" />
                        <div className='absolute top-0 rounded-3xl text-white bg-gray-700/50 w-full h-full flex flex-col justify-center'>
                            <h1 className='md:text-5xl font-semibold tracking-wider md:ml-28 ml-6 leading-normal '>
                                We will help you find <br />
                                your <span className='text-green-500'>Wonderful</span> home
                            </h1>
                            <p className='md:ml-28 ml-6 md:mt-6 mt-2 md:text-lg text-xs'>A great plateform to buy, sell and rent your properties without any <br /> agent or commisions.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider img two  */}
                <SwiperSlide>
                    <div className='relative m-0 md:top-16 top-12'>
                        <img className='bg-no-repeat bg-cover bg-center object-cover md:rounded-3xl  rounded-lg ' src={sliderImg2} alt="" />
                        <div className='absolute top-0 rounded-3xl text-white bg-gray-700/50 w-full h-full flex flex-col justify-center'>
                            <h1 className='md:text-5xl font-semibold tracking-wider md:ml-28 ml-6 leading-normal '>
                                We will help you find <br />
                                your <span className='text-green-500'>Wonderful</span> home
                            </h1>
                            <p className='md:ml-28 ml-6 md:mt-6 mt-2 md:text-lg text-xs'>A great plateform to buy, sell and rent your properties without any <br /> agent or commisions.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slider img three  */}
                <SwiperSlide>
                    <div className='relative md:top-16 top-12'>
                        <img className='bg-no-repeat bg-cover bg-center object-cover md:rounded-3xl  rounded-lg ' src={sliderImg3} alt="" />
                        <div className='absolute top-0 rounded-3xl text-white bg-gray-700/50 w-full h-full flex flex-col justify-center'>
                            <h1 className='md:text-5xl font-semibold tracking-wider md:ml-28 ml-6 leading-normal '>
                                We will help you find <br />
                                your <span className='text-green-500'>Wonderful</span> home
                            </h1>
                            <p className='md:ml-28 ml-6 md:mt-6 mt-2 md:text-lg text-xs'>A great plateform to buy, sell and rent your properties without any <br /> agent or commisions.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    )
}

export default SliderComponent