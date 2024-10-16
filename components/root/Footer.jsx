import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='py-4 px-8 grid grid-cols-2 sm:grid-cols-5 gap-8 border-t border-gray-600'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <Image src={"/hegergna-logo.png"} alt="logo" width={30} height={30} />
                <p className='text-center'>© {new Date().getFullYear()} HegergnaShop. All rights reserved.</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-medium text-lg'>HegergnaShop</p>
                <Link href="learn-more" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Learn more</Link>
                <Link href="pricing" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Pricing</Link>
                <Link href="blog" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Blog</Link>
                <Link href="about-us" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>About us</Link>
                <Link href="contact-us" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Contact us</Link>
                <Link href="faq" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>FAQ</Link>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-medium text-lg'>Registration</p>
                <Link href="login" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Login</Link>
                <Link href="sign-up" className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Sign up</Link>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-medium text-lg'>Company</p>
                <Link href={"/privacy-policy"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Privacy policy</Link>
                <Link href={"/terms-and-conditions"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Terms and conditions</Link>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-medium text-lg'>Social medias</p>
                <Link href={"/http://tiktok.com/@hegergna"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Tiktok</Link>
                <Link href={"/http://instagram.com/hegergna"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Instagram</Link>
                <Link href={"/http://twitter.com/hegergna"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Twitter</Link>
                <Link href={"/http://facebook.com/hegergna"} className='text-gray-300 hover:text-gray-100 font-normal text-lg'>Facebook</Link>
            </div>
        </div>
    )
}

export default Footer