import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
  return (
    <div className='pt-24 pb-16'>
        {/* Define Grid  */}
        <div className='w-[95%] sm:w-[80%] mx-auto items-center  grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Image Content   */}
            <div>
                {/* To Be Continueed...  At video 1:15:25 */}
                <Image src="/images/a.jpg" alt="image" width={500} height={500} className='object-contain' />
            </div>
            {/* Text  Content  */}
            <div className='p-6'>
              <h1 className='text-base font-semibold text-orange-500 '>Audience tracking and insights</h1>
              <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in quas ut laborum autem magnam.</h1>
              <p className='mt-4 text-grey-600 text-sm font-medium leading-[2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
              <ul className='mt-7 space-y-2 text-gray-800'>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>

              </ul>
              <button className='mt-8 px-8 py-3 bg-gray-100 text-gray800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white cursor-pointer'>Explore More &rarr;</button>
            </div>

        </div>
    </div>
  )
}

export default AnalyticsFeature