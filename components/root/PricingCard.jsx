import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
  

function PricingCard({id, name, audience, price, displaySettings, monthly}) {
  return (
    <div className='w-full h-full flex flex-col gap-3 items-center justify-between rounded-md overflow-hidden border border-gray-500 shadow-md'>
        <div className={`${displaySettings.mostPopular ? "gradient-bg": "bg-[#202020]"} p-2 w-full flex flex-col`}>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p className='font-medium'>{audience}</p>
            <p className='text-xl font-bold'>{monthly ? price.month : price.year}<span className='text-sm font-normal'>/mo</span></p>
        </div>
        <div className='p-2 w-full h-full'>
            <ul className='flex flex-col gap-1 h-full'>
                {displaySettings.features.map((feature, index) => (
                    <li key={index} className='font-medium flex items-center gap-1'><Check size={15}/> {feature}</li>
                ))}
            </ul>
        </div>
        <div className='w-full'>
                <Button asChild className="w-full">
                    <Link href={displaySettings.fromPricing_link}>{displaySettings.cta}</Link>
                </Button>
            <p className='font-medium text-center text-sm p-1'>Free Trial for 3 Days, then {monthly ? price.month : price.year} Birr/month</p>
        </div>
    </div>
  )
}

export default PricingCard