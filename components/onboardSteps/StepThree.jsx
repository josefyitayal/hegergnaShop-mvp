"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Box, Truck, ArrowLeft, ArrowRight } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'

function StepThree({saveData}) {
    // what category does the user want
    const router = useRouter()
    const [data, setData] = useState({})
    const [isDone, setIsDone] = useState(false)
    const [storeName, setStoreName] = useState("")
    const [storePhone, setStorePhone] = useState("")
    const [storeEmail, setStoreEmail] = useState("")

    useEffect(() => {
        if (storeName) {
            setData({...data, storeName})
        }
         if (storePhone.length === 10) {
            setData({...data, storePhone})
        }
         if (storeEmail.includes("@") && storeEmail.includes(".com")) {
            setData({...data, storeEmail})
        }
        setIsDone(false)
    }, [storeName, storePhone, storeEmail])
    if (!isDone) {
        if (data.storeName === undefined) {
            console.log("insert store name")
        }
        else if (data.storePhone === undefined) {
            console.log("insert phone number")
        }
        else if (data.storeEmail === undefined) {
            console.log("insert email")
        }
        else {
            console.log(data, "*********")
            setIsDone(true)
        }
    }
    function handleNext() {
        if (isDone) {
            console.log("the the dashobard")
            saveData("step3", JSON.stringify(data))
            router.push("/dashboard/store001")
        }
    }
    return (
        <div className='border border-gray-600 rounded-md shadow-md shadow-gray-800 p-5 flex flex-col gap-5 bg-background h-fit'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold text-center'>Start by Creating your store</h1>
                <p className='text-xl font-medium text-center'>This will be Public</p>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_name" className='text-lg font-medium pl-2'>Store name</label>
                    <input type='text' id='store_name' value={storeName} onChange={(e)=> setStoreName(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_phone" className='text-lg font-medium pl-2'>Store phone</label>
                    <input type='text' id='store_phone' value={storePhone} onChange={(e)=> setStorePhone(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_email" className='text-lg font-medium pl-2'>Store email</label>
                    <input type='email' id='store_email' value={storeEmail} onChange={(e)=> setStoreEmail(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                </div>
            </div>
            <div className='flex items-center justify-between p-2'>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={() => router.push("/onboard?step=2")}>
                    <ArrowLeft />
                    <p>Back</p>
                </Button>
                <Button disabled={isDone ? false : true} variant="ghost" className="flex gap-2 items-center" onClick={handleNext}>
                    <p>Start</p>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default StepThree