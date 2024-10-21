import { isUserActive, getStoreByClerkId, getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import {  redirect } from "next/navigation";

async function page() {
    const clerkUser = await currentUser()
    // const router = useRouter()
    const isActive = await isUserActive(clerkUser.id)
    console.log(isActive)

    if (isActive) {
        const store = await getStoreByClerkId(clerkUser.id)
        if (!store) throw new Error("not store here in dashboard")
        //router.push(`/dashboard/${store._id}`)
        redirect(`/dashboard/${store._id}`)
    }else {
        redirect("/onboard?step=1")
    }
}

export default page;
