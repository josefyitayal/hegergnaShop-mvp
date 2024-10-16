import React from 'react';
import { MagicCard } from '../ui/magic-card';

const ProgressTracker = () => {
  return (
    <div className='h-screen sm:h-screen md:h-screen lg:h-[50vh] flex items-center'>
      <div className='w-full relative flex flex-col items-center'>
        <div className='lg:w-full lg:h-[1px] sm:w-[1px] sm:h-full w-[1px] h-full md:w-[1px] md:h-full bg-gray-300 absolute lg:top-[50%] md:top-0 sm:top-0 -z-10'></div>
        <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-5 place-items-center'>
          <div className='flex flex-col gap-3 items-center bg-background w-[100%]'>
            <MagicCard gradientSize={60} gradientColor="#46088c" className='cursor-pointer border border-gray-400 rounded-md shadow-inner shadow-gray-500 text-2xl font-bold flex items-center justify-center w-20 h-20'>1</MagicCard>
            <p className='text-lg font-semibold'>Create an Account</p>
          </div>
          <div className='flex flex-col gap-3 items-center bg-background w-[100%]'>
            <MagicCard gradientSize={60} gradientColor="#46088c" className='cursor-pointer border border-gray-400 rounded-md shadow-inner shadow-gray-500 text-2xl font-bold flex items-center justify-center w-20 h-20'>2</MagicCard>
            <p className='text-lg font-semibold'>Customize Your Store</p>
          </div>
          <div className='flex flex-col gap-3 items-center bg-background w-[100%]'>
            <MagicCard gradientSize={60} gradientColor="#46088c" className='cursor-pointer border border-gray-400 rounded-md shadow-inner shadow-gray-500 text-2xl font-bold flex items-center justify-center w-20 h-20'>3</MagicCard>
            <p className='text-lg font-semibold'>Add Products</p>
          </div>
          <div className='flex flex-col gap-3 items-center bg-background w-[100%]'>
            <MagicCard gradientSize={60} gradientColor="#46088c" className='cursor-pointer border border-gray-400 rounded-md shadow-inner shadow-gray-500 text-2xl font-bold flex items-center justify-center w-20 h-20'>4</MagicCard>
            <p className='text-lg font-semibold'>Launch Your Store</p>
          </div>
          <div className='flex flex-col gap-3 items-center bg-background w-[100%]'>
            <MagicCard gradientSize={60} gradientColor="#46088c" className='cursor-pointer border border-gray-400 rounded-md shadow-inner shadow-gray-500 text-2xl font-bold flex items-center justify-center w-20 h-20'>5</MagicCard>
            <p className='text-lg font-semibold'>Manage Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
