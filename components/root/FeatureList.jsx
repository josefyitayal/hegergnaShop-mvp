import { Store } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BentoCard, BentoGrid } from '../ui/bento-grid'
import { CreditCard } from 'lucide-react'
import { Truck } from 'lucide-react'
import { Waves } from 'lucide-react'
import { PersonStanding } from 'lucide-react'

const features = [
  {
    Icon: Store,
    name: "Simple Store Setup",
    description: "Create your online store in minutes with easy-to-use templates",
    href: "/learn-more",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CreditCard,
    name: "Local Payment Options",
    description: "Accept payments with Chapa and other local payment methods",
    href: "/learn-more",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Truck,
    name: "Flexible Delivery Choices",
    description: "Deliver your products yourself or partner with our delivery providers.",
    href: "/learn-more",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Waves,
    name: "Built-in Analytics",
    description: "Track sales, website traffic, and customer engagement with real-time reports",
    href: "/learn-more",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: PersonStanding,
    name: "Customization",
    description: "Choose colors, images, and text to match your brand.",
    href: "/learn-more",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 text-white",
  },
]

function FeatureList() {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='sm:text-2xl md:3xl lg:5xl text-2xl'>Why Choose <span className='text-gradient'>HegergnaShop?</span></h1>
      <div>
        <BentoGrid className="grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature}/>
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

export default FeatureList