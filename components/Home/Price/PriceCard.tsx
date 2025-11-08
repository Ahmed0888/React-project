import React from 'react'
import { FaCheck } from 'react-icons/fa';

type Props = {
price: number;
plan: string;

}
const PriceCard = ({plan,price}:Props) => {


  return (
    <div className='bg-white p-12 rounded-lg shadow-lg'>
        
        <p className='mt-8 text-xl font-semibold text-blue-600 text-center '>
            {plan} Plan
        </p>
        <div className='fomt-medium text-3xl mt-4 text-center'>
            $<span className='text-5xl font-bold '>{price}</span>/mo
        </div>
        <p className='mt-2 text-gray-600 text-center '>per user</p>
        <div className='mt-10'>
            <div className='text-ceter mb-4 flex items-center space-x-3 '>
                <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
                    <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700 '>unlimited Connection</p>
            </div>
            <div className='text-ceter mb-4 flex items-center space-x-3 '>
                <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
                    <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700 '>Basic Actions & Triggers</p>
            </div>
            <div className='text-ceter mb-4 flex items-center space-x-3 '>
                <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
                    <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700 '>Draft Payments</p>
            </div>
            <div className='text-ceter mb-4 flex items-center space-x-3 '>
                <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
                    <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700 '>Unlimited Flows & Supports</p>
            </div>
            <div className='text-ceter mb-4 flex items-center space-x-3 '>
                <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
                    <FaCheck className='text-green-500'/>
                </div>
                <p className='text-sm font-semibold text-gray-700 '>Lifetime Updates</p>
            </div>
            <div className='mt-8'>
                <button className=' block w-full  p-4 text-base md:text-lg text-white font-bold bg-blue-900 hover:bg-blue-950 transition-all duration-300 hover:shadow-lg hover:rounded-lg cursor-pointer'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default PriceCard