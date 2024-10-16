import { SignIn } from '@clerk/nextjs'
import React from 'react'

function LoginPage() {
  return (
    <div className='flex items-center justify-center py-10'>
        <SignIn />
    </div>
  )
}

export default LoginPage