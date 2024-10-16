import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Cta() {
    return (
        <div className='w-full h-[50vh] gradient-bg flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-5xl text-center font-bold'>Ready to Launch Your Online Store?</h1>
                <p className='text-lg font-medium text-center'>Sign up now and start selling within minutes</p>
                <Button asChild className="h-12 w-32">
                    <Link href={"/sign-up"} className='font-medium text-lg'>Get Started</Link>
                </Button>
        </div>
    )
}

export default Cta