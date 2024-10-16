"use client"

import React, { useState } from 'react'
import PricingCard from '../root/PricingCard'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Box, Truck, ArrowLeft, ArrowRight } from 'lucide-react'

const subscriptions = [
    {
        id: "plan001",
        name: "Basic",
        audience: "For small businesses",
        price: {
            month: 319,
            year: 295,
        },
        displaySettings: {
            features: [
                "Essential store setup tools",
                "Up to 50 products",
                "Standard support",
                "Chapa payment integration",
                "2% transaction fee",
            ],
            mostPopular: true,
            href: "/payment/subscription?plan=Basic",
            cta: "Start Free Trail",
        },
        limitation: {
            maxProducts: 50,
            maxImageSizeMB: 4,
            transactionFee: 0.02,
        },
    },
    {
        id: "plan002",
        name: "Plus",
        audience: "For growing businesses",
        price: {
            month: 655,
            year: 638,
        },
        displaySettings: {
            features: [
                "Everything in Basic, plus",
                "Up to 200 products",
                "Enhanced customization options",
                "Advanced analytics and reporting",
                "Standard support with priority email support",
                "1% transaction fee",
            ],
            mostPopular: false,
            href: "/payment/subscription?plan=Plus",
            cta: "Start Free Trail",
        },
        limitation: {
            maxProducts: 200,
            maxImageSizeMB: 6,
            transactionFee: 0.01,
        },
    },
    {
        id: "plan003",
        name: "Custom",
        audience: "For large businesses",
        price: {
            month: 1244,
            year: 1222,
        },
        displaySettings: {
            features: [
                "Everything in Plus, plus",
                "Unlimited products",
                "Customizable delivery options",
                "Personalized onboarding and support",
                "Dedicated account manager",
                "0.5% transaction fee",
            ],
            mostPopular: false,
            href: "/payment/subscription?plan=Plus",
            cta: "Contact Us",
        },
    },
];

function StepTwo({ saveData }) {
    // plan selection

    const router = useRouter()
    const [data, setData] = useState("")
    const [monthly, setMonthly] = useState(true);
    function handleNext() {
        saveData("step2", JSON.stringify(data))
        router.push("/onboard?step=3")
    }
    return (
        <div className='border border-gray-600 rounded-md shadow-md shadow-gray-800 p-5 flex flex-col gap-5 bg-background h-fit'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-2xl font-bold text-center'>Select Plan</h1>
                <p className='text-lg text-center'>Start by 3 days free trial</p>
                <div className='flex gap-5 items-center'>
                    <Button variant={monthly ? "" : "outline"} onClick={() => setMonthly(true)}>Monthly</Button>
                    <Button variant={monthly ? "outline" : ""} onClick={() => setMonthly(false)}>Yearly</Button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 space-y-3'>
                {subscriptions.map((plan, index) => (
                    <PricingCard
                        key={index}
                        id={plan.id}
                        name={plan.name}
                        audience={plan.audience}
                        price={plan.price}
                        displaySettings={plan.displaySettings}
                        monthly={monthly}
                    />
                ))}
            </div>
            <div className='flex items-center justify-between p-2'>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={() => router.push("/onboard?step=1")}>
                    <ArrowLeft />
                    <p>Back</p>
                </Button>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={handleNext}>
                    <p>Later</p>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default StepTwo