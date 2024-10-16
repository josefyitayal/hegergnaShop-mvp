"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Box, Truck, ArrowLeft, ArrowRight } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { redirect, useRouter } from 'next/navigation'

function StepOne({saveData}) {
    // what category does the user want
    const router = useRouter()
    const [data, setData] = useState("")
    function handleNext() {
        if(data) {
            saveData("step1", JSON.stringify(data))
            router.push("/onboard?step=2")
        }
    }
    return (
        <div className='border border-gray-600 rounded-md shadow-md shadow-gray-800 p-5 flex flex-col gap-5 bg-background h-fit'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold text-center'>Welcome to HegergnaShop</h1>
                <p className='text-xl font-medium text-center'>What do you want to sell</p>
            </div>
            <div className='grid grid-cols-2 place-items-center gap-10 space-y-3'>
                <Button variant={data ? "": "outline"} className="flex items-center gap-3 p-3 h-fit w-full" onClick={() => setData("self-fulfillment")}>
                    <Box />
                    <div className='flex flex-col gap-1'>
                        <p className="text-lg font-semibold text-start">Product I buy or make myself</p>
                        <p className='text-sm text-start'>Shipped by me</p>
                    </div>
                </Button>
                <TooltipProvider className="w-full">
                    <Tooltip delayDuration={100} skipDelayDuration={0}>
                        <TooltipTrigger asChild>
                            <div className='w-full'>
                                <Button disabled variant="outline" className="flex items-center justify-start gap-3 p-3 h-fit w-full">
                                    <Truck />
                                    <div className='flex flex-col gap-1'>
                                        <p className="text-lg font-semibold text-start">DropShipping</p>
                                        <p className='text-sm text-start'>fullfil by third party</p>
                                    </div>
                                </Button>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Coming Soon</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className='flex items-center justify-between p-2'>
                <Button disabled variant="ghost" className="flex gap-2 items-center">
                    <ArrowLeft />
                    <p>Back</p>
                </Button>
                <Button disabled={data ? false : true} variant="ghost" className="flex gap-2 items-center" onClick={handleNext}>
                    <p>Next</p>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default StepOne