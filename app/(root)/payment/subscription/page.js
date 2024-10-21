"use client"

import { useRouter, useSearchParams } from "next/navigation"

function subscriptionPage() {
    const searchParams = useSearchParams()
    const plan = searchParams.get("plan")
    const router = useRouter()

    if (plan !== "Basic" || plan !== "Plus" || plan !== "Custom") {
        router.push("/")
    }

    return (
        <div>Yosef</div>
    )
}

export default subscriptionPage