import React from 'react'
import EfficiencyImg from '../../images/efficencyPartImg.jpg'
import { FaPlay } from 'react-icons/fa'

const Efficiency = () => {
    return (
        <div className='pb-12'>

            <div className='md:w-10/12 w-11/12 mx-auto  md:flex justify-center  items-center space-y-10 md:space-y-0'>
                <div className='w-4/5 relative mx-auto'>
                    <img className='rounded-2xl shadow-2xl hover:shadow-transparent duration-500 transition-shadow' src={EfficiencyImg} alt="" />
                    <div className='absolute  md:top-60 md:left-52 top-36 left-28 bg-white p-8  rounded-full text-green-600  '>
                        <FaPlay className='text-xs ' />
                    </div>
                </div>

                <div className='md:ml-16  md:w-full w-4/5 mx-auto'>
                    <h1 className='md:text-4xl text-xl font-semibold tracking-wider'>Efficiency. Transparency. <br />
                        Control.</h1>
                    <p className='mt-6 text-gray-500 tracking-wider font-medium leading-6'>Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Hously is Real Estate Redefined.</p>
                    <button className='mt-6 text-white bg-green-600 py-2 px-10 rounded-lg'>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Efficiency