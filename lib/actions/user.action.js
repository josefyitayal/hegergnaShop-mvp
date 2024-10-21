"use server"

import dbConnect from "../database/db"
import User from "../database/models/user.model"
import { revalidatePath } from "next/cache"

//create new user
export async function createUser(user) {
    try {
        await dbConnect()

        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
}

// get user by id
export async function getUserById(userId) {
    try {
        await dbConnect()        

        const user = await User.findOne({id: userId})

        if (!user) throw new Error("user not found")

        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        console.log(error)
    }
}

// get user by clerk id
export async function getUserByClerkId(clerkId) {
    try {
        await dbConnect()        

        const user = await User.findOne({clerkId: clerkId})

        if (!user) throw new Error("user not found")

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.log(error)
    }
}

// delete user by id
export async function deleteUser(clerkId) {
    try {
        await dbConnect()        

        const userToDelete = await User.findOne({clerkId: clerkId})

        if (!userToDelete) throw new Error("user not found")

        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath("/")

        return deletedUser ? JSON.parse(JSON.stringify(deleteUser)) : null
    } catch (error) {
        console.log(error)
    }
}

// updating user
export async function UpdateUser(clerkId, user) {
    try {
        await dbConnect()        

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, {new: true})

        if (!updatedUser) throw new Error("user not found")

        return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
        console.log(error)
    }
}

// is user active by clerk id
export async function isUserActive(clerkId) {
    try {
        const user = await User.findOne({clerkId: clerkId})
        console.log("xxxxxx", user.isActive, "xxxxxxxx")
        return user.isActive
    } catch(error) {
        console.log(error)
    }
}

// get store by clerk id
export async function getStoreByClerkId(clerkId) {
    try {
        if (isUserActive(clerkId)) {
            await dbConnect()

            const user = await User.findOne({clerkId: clerkId}).populate("Store")

            if (!user) throw new Error("user or store not found")

            return JSON.parse(JSON.stringify(user.store))
        }else {
            throw new Error("there is not store the user is not activated")
        }
    } catch(error) {
        console.log(error)
    }
}


// set sale type
export async function setSaleType(clerkId, type) {
    try {
        console.log("------------------1-------------------")
        const user = await User.findOne({clerkId: clerkId})
        console.log("------------------2-------------------")

        if (!user) throw new Error("user not found in setSaleType")

        if (type === 'dropshipping' || type === 'self-fulfillment' || type === 'not-selected') {
            user.saleType = type

            user.save() 
        }else {
            throw new Error("SatSaleType accept only dropshipping, self-fulfillment or not-selected. do not use not-selected")
        }
    } catch(error) {
        console.log(error)
    }
}


// update isActive
export async function updateUserIsActiveByClerkId(clerkId, isActive) {
    try {
        await dbConnect()

        const updatedUser = await User.findOneAndUpdate({clerkId: clerkId}, {"$set": {isActive: isActive}})

        if (!updatedUser) throw new Error("error when trying to updatedUserIsActiveByClerkId - updatedUser is not found")

        return JSON.parse(JSON.stringify(updatedUser))
    }catch(error) {
        console.log(error)
    }
}

// set plan by clerk id
export async function setPlanByClerkId(clerkId, plan) {
    try {
        await dbConnect()

        const user = await User.findOne({clerkId: clerkId})
        if (!user) throw new Error("error when trying to setPlanByClerkId - setPlanByClerkId is not found")

        user.selectedPlan = plan
        user.updatedAt = new Date()

        await user.save()
        return JSON.parse(JSON.stringify(user))
    } catch(error) {
        console.log(error)
    }
}

// set plan by id
export async function setPlanById(id, plan) {
    try {
        await dbConnect()

        const user = await User.findOne({_id: id})
        if (!user) throw new Error("error when trying to setPlanBykId - setPlanById is not found")

        user.selectedPlan = plan
        user.updatedAt = new Date()

        await user.save()
        return JSON.parse(JSON.stringify(user))
    } catch(error) {
        console.log(error)
    }
}