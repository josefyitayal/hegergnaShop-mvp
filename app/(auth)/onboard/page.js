"use client"

import StepOne from "@/components/onboardSteps/StepOne";
import StepThree from "@/components/onboardSteps/StepThree";
import StepTwo from "@/components/onboardSteps/StepTwo";
import { CreateStore } from "@/lib/actions/store.action";
import { getUserByClerkId, setPlanByClerkId, setSaleType, updateUserIsActiveByClerkId } from "@/lib/actions/user.action";
import { useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";


function OnBoard() {
  const { userId } = useAuth();
  const router = useRouter()
  const searchParams = useSearchParams()
  const step = searchParams.get("step")
  const [user, setUser] = useState("")
  // if (!userId) router.push("/sign-up")

  useEffect(() => {
    if (!step) {
      router.push('/onboard?step=1')
    }
  }, [step])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserByClerkId(userId)
    
        setUser(fetchedUser)
      }catch(error) {
        console.log(error)
      }
    }
    fetchUser()
    console.log(user, "========= === = = =")
  },[])

  const handleNext = async (whatStep, data) => {
    if (whatStep === "step1") {
      console.log("-----", step, "--------", data, "-------1")
      await setSaleType(userId, data)
      router.push('/onboard?step=2')

    }else if (whatStep === "step2") {
      console.log("-----", step, "--------", data, "-------2")
      if (data !== "later") {
        const updatedPlanUser = await setPlanByClerkId(userId)
        if (!updatedPlanUser) throw new Error("plan is not updated or change") 
        console.log(updatedPlanUser)
        router.push('/onboard?step=3')
      }

    }else if (whatStep === "step3") {
      console.log("-----", step, "--------", data, "-------3")
      try {
        const store = await CreateStore(data)
        if (store) {
          const updatedIsActiveUser = await updateUserIsActiveByClerkId(userId, true)
          if (updatedIsActiveUser) {
            router.push(`/dashboard/${store._id}`)
          }else {
            throw new Error("trying to update user isActive but faild")
          }
        }
      }catch(error) {
        console.log("error---error---error---error---", error)
      }
    }else {
      console.log("brah......")
    }
  }

  const renderSteps = () => {
    switch (step) {
      case "1":
        return <StepOne handleNext={handleNext}/>
      case "2":
        return <StepTwo handleNext={handleNext}/>
      case "3":
        return <StepThree handleNext={handleNext}/>
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
