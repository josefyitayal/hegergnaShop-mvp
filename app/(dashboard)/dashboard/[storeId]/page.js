import { getStoreById } from "@/lib/actions/store.action";
import { getUserByClerkId } from "@/lib/actions/user.action"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }) {
  const storeId = params.storeId
  const store = await getStoreById(storeId)
  const clerkUser = await currentUser()
  if (!clerkUser) redirect("/sign-up")

  if (!store) {
    return <div className="h-screen w-full flex justify-center items-center"><p className="font-bold text-3xl">Store not found</p></div>
  }
  const user = await getUserByClerkId(clerkUser.id)
  if (!user) throw new Error("what kind of error is this - dashboard[storeId]")
  console.log(user.isActive, "----=-=====-==-----")
  if (!user.isActive) return <div className="h-screen w-full flex justify-center items-center"><p className="font-bold text-3xl">User is inActive </p></div>

  return (
    <div>
      <p>{store.storeName}</p>
      <p>yosef</p>
    </div>
  );
}

export default page;
