"use client"

import StepOne from "@/components/onboardSteps/StepOne";
import StepThree from "@/components/onboardSteps/StepThree";
import StepTwo from "@/components/onboardSteps/StepTwo";
import { setSaleType } from "@/lib/actions/user.action";
import { useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";


function OnBoard() {
  const { user } = useAuth;
  const router = useRouter()
  const searchParams = useSearchParams()
  const step = searchParams.get("step")

  if (!user) router.push("/sign-up")

  useEffect(() => {
    if (!step) {
      router.push('/onboard?step=1')
    }
  }, [step])

  const saveDate = async (key, value) => {
    if (key === "step1") {
      await setSaleType(user.id, value)
    }
    localStorage.setItem(key, value)
  }

  const renderSteps = () => {
    switch (step) {
      case "1":
        return <StepOne saveData={saveDate}/>
      case "2":
        return <StepTwo saveData={saveDate}/>
      case "3":
        return <StepThree saveData={saveDate}/>
    }
  };
  return (
    <div className="w-full min-h-screen relative flex justify-center pt-10">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {renderSteps()}
    </div>
  );
}

export default OnBoard;
