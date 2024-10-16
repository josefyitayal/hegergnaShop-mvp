"use client";

import PricingCard from "@/components/root/PricingCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

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

function PricingPage() {
  const [monthly, setMonthly] = useState(true);

  return (
    <div className="flex flex-col items-center gap-5 px-10 min-h-screen py-10">
      <h1 className="text-5xl font-bold text-center">
        Find the Perfect Plan for Your Business
      </h1>
      <p className="text-xl font-medium text-center">
        Choose from flexible pricing options tailored to your needs
      </p>
      <div className="flex gap-5 items-center">
        <Button
          variant={monthly ? "" : "outline"}
          onClick={() => setMonthly(true)}
        >
          Monthly
        </Button>
        <Button
          variant={monthly ? "outline" : ""}
          onClick={() => setMonthly(false)}
        >
          Yearly
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
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
    </div>
  );
}

export default PricingPage;
