"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
import { Dot } from 'lucide-react'

function OnboardingPricingCard({ name, audience, price, displaySettings, monthly, startTrailClick }) {

    function onClick() {
        startTrailClick(name)
    }

    return (
        <div className='w-full h-full flex flex-col gap-3 items-center justify-between rounded-md overflow-hidden border border-gray-500 shadow-md'>
            <div className={`${displaySettings.mostPopular ? "gradient-bg" : "bg-[#202020]"} p-2 w-full flex flex-col`}>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='font-medium'>{audience}</p>
                <p className='text-xl font-bold'><span>{monthly ? price.month : price.year} Birr</span><span className='text-sm font-normal'>/mo</span></p>
            </div>
            <div className='p-2 w-full h-full'>
                <ul className='flex flex-col gap-1 h-full'>
                    {displaySettings.features.map((feature, index) => (
                        <li key={index} className='font-medium flex items-center gap-1'><Check size={15} /> {feature}</li>
                    ))}
                </ul>
            </div>
            <div className='w-full'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className={"w-full"}>{displaySettings.cta}</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className={"text-xl"}>You have selected the {name} Plan</DialogTitle>
                            <DialogDescription>
                                <ul className='text-lg flex flex-col gap-3'>
                                    <li className='flex gap-1'><Dot /> This plan includes all the essential features to get you started.</li>
                                    <li className='flex gap-1'><Dot /> You start paying once you free trail ended</li>
                                    <li className='flex gap-1'><Dot /> Click the button below to begin your trial and enjoy the benefits of the {name} Plan</li>
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={onClick}>Start Free Trail</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <p className='font-medium text-center text-sm p-1'>Free Trial for 3 Days, then {monthly ? price.month : price.year} Birr/month</p>
            </div>
        </div>
    )
}

export default OnboardingPricingCard