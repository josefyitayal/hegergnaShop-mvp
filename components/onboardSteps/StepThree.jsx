"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import isEmail from 'validator/lib/isEmail';

function StepThree({ handleNext }) {
    // what category does the user want
    const router = useRouter()
    const [data, setData] = useState({})

    const [storeName, setStoreName] = useState("")
    const [storePhone, setStorePhone] = useState("")
    const [storeEmail, setStoreEmail] = useState("")
    const [storeDescription, setStoreDescription] = useState("")
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const [errorMessage, setErrorMessage] = useState("")

    function handleOnClick() {
        if (storeName === "") {
            setErrorMessage("Store name is empty")
        } else if (storePhone.length !== 8) {
            setErrorMessage("Incorrect Phone number")
        } else if (!isEmail(storeEmail)) {
            setErrorMessage("Incorrect Email")
            console.log("email email email email email")
        } else if (storeDescription === "") {
            setErrorMessage("Store description is empty")
        }
        else {
            const domainName = storeName.replace(/\s+/g, '').toLowerCase();
            setData(previous => ({ ...previous, storeName: storeName, storePhone: storePhone, storeEmail: storeEmail, storeDescription: storeDescription, domainName: domainName, createdAt: new Date(), updatedAt: new Date() }))
            setIsButtonClicked(true)
        }
    }

    useEffect(() => {
        if (isButtonClicked && Object.keys(data).length > 0) {
            handleNext("step3", data);
            setIsButtonClicked(false); // Reset the button click state
        }
    }, [data, isButtonClicked]);

    return (
        <div className='border border-gray-600 rounded-md shadow-md shadow-gray-800 p-5 flex flex-col gap-5 bg-background h-fit'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold text-center'>Start by Creating your store</h1>
                <p className='text-xl font-medium text-center'>This will be Public</p>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_name" className='text-lg font-medium pl-2'>Store name</label>
                    <input type='text' id='store_name' value={storeName} onChange={(e) => setStoreName(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_phone" className='text-lg font-medium pl-2'>Store phone</label>
                    <div className='flex items-center justify-stretch'>
                        <p className='border-2 border-gray-700 text-lg h-10 w-20 flex items-center justify-center p-1 rounded-md'>+2519</p>
                        <input type='text' id='store_phone' value={storePhone} onChange={(e) => setStorePhone(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="store_email" className='text-lg font-medium pl-2'>Store email</label>
                    <input type='email' id='store_email' value={storeEmail} onChange={(e) => setStoreEmail(e.target.value)} className="w-full rounded-md border-2 border-gray-700 text-lg pl-2 h-10" />
                </div>
                <div>
                    <label htmlFor='store_description' className='text-lg font-medium pl-2'>Store description</label>
                    <textarea value={storeDescription} onChange={(e) => setStoreDescription(e.target.value)} className='w-full rounded-md border-2 border-gray-700 text-lg pl-2 max-h-20 min-h-20'></textarea>
                </div>
            </div>
            <div>
                <p className='text-lg text-center font-medium text-red-500'>{errorMessage}</p>
            </div>
            <div className='flex items-center justify-between p-2'>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={() => router.push("/onboard?step=2")}>
                    <ArrowLeft />
                    <p>Back</p>
                </Button>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={handleOnClick}>
                    <p>Start</p>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default StepThree