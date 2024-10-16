import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div className='flex items-center justify-center py-10'>
        <SignUp />
    </div>
  )
}

export default SignUpPage