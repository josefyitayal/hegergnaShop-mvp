import React from 'react'
import { BorderBeam } from '../ui/border-beam'
import Image from 'next/image'

function ScreenShot() {
  return (
    <div className='relative w-full rounded-md overflow-hidden'>
        <Image src={"/screenshot.png"} className="w-full" alt="screenshot" width={1000} height={1000} />
        <BorderBeam size={250} duration={12} delay={9} className={"border border-green-500"}/>
    </div>
  )
}

export default ScreenShot