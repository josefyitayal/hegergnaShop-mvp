"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import {  ArrowLeft, ArrowRight } from 'lucide-react'
import OnboardingPricingCard from '../root/OnboardingPricingCard'

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
            fromPricing_link: "/sign-up?plan=Basic",
            fromSignUp_link: "/payment/subscription?plan=Basic",
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
            fromPricing_link: "/sign-up?plan=Plus",
            fromSignUp_link: "/payment/subscription?plan=Plus",
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
            fromPricing_link: "/sign-up?plan=Custom",
            fromSignUp_link: "/payment/subscription?plan=Custom",
            cta: "Contact Us",
        },
    },
];

function StepTwo({ handleNext }) {
    // plan selection

    const router = useRouter()
    const [data, setData] = useState("")
    const [monthly, setMonthly] = useState(true);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    function handleOnClick() {
        setData("later")
        setIsButtonClicked(true)
    }

    function startTrailClick(plan) {
        setData(plan)
        setIsButtonClicked(true)
    }

    useEffect(() => {
        if (isButtonClicked && Object.keys(data).length > 0) {
            handleNext("step2", data);
            setIsButtonClicked(false); // Reset the button click state
        }
    }, [data, isButtonClicked]);

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
                    <OnboardingPricingCard 
                        key={index}
                        name={plan.name} 
                        audience={plan.audience} 
                        price={plan.price} 
                        displaySettings={plan.displaySettings} 
                        monthly={monthly} 
                        startTrailClick={startTrailClick}
                    />
                ))}
            </div>
            <div className='flex items-center justify-between p-2'>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={() => router.push("/onboard?step=1")}>
                    <ArrowLeft />
                    <p>Back</p>
                </Button>
                <Button variant="ghost" className="flex gap-2 items-center" onClick={handleOnClick}>
                    <p>Later</p>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default StepTwo