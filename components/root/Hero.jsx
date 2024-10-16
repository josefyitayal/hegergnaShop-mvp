import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ShimmerButton from '../ui/shimmer-button'

function Hero() {
    return (
        <div className='lg:h-screen md:h-screen h-[600px] sm:h-[600px] w-full flex flex-col gap-10 items-center pt-16 px-5 md:px-10 lg:w-[70%]'>
            <ShimmerButton shimmerColor="#de55fd">
                <span className='text-white'>
                    HegergnaShop V.0
                </span>
            </ShimmerButton>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl lg:text-6xl font-bold sm:text-3xl md:text-4xl text-center'>Everything You Need to <span className='text-gradient'>Launch, Manage,</span> and <span className='text-gradient'>Grow</span> Your Store</h1>
                <p className='text-md sm:text-md sm:font-medium text-center lg:text-xl text-gray-300'>Whether you're starting your first online store or expanding your business, HegergnaShop provides you with all the tools you need to succeed.</p>
            </div>
            <div className='flex items-center gap-10'>
                <Button asChild variant="outline" className="h-12 w-32">
                    <Link href={"/learn-more"} className='font-medium text-lg'>Learn more</Link>
                </Button>
                <Button asChild className="h-12 w-32">
                    <Link href={"/sign-up"} className='font-medium text-lg'>Get Started</Link>
                </Button>
            </div>
        </div>
    )
}

export default Hero