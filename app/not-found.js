import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='flex flex-col gap-3 justify-center items-center w-full h-screen'>
            <h1 className='text-3xl font-bold'>There is not page here</h1>
            <Link href={"/"} className=''>Go home</Link>
    </div>
  )
}

export default NotFoundPage