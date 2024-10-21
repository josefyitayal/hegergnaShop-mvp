"use server"

import dbConnect from "../database/db"
import Store from "../database/models/store.model"
// import { revalidatePath } from "next/cache"

// creating store
export async function CreateStore(store) {
    try {
        await dbConnect()        

        const newStore = await Store.create(store)

        if (!newStore) throw new Error("sorry the store won't create")

        return JSON.parse(JSON.stringify(newStore))
    } catch (error) {
        console.log(error)
    }
}


// get store by id
export async function getStoreById(storeId) {
    try {
        await dbConnect()

        const store = await Store.findOne({_id: storeId})

        if (!store) throw new Error("store not found")

        return JSON.parse(JSON.stringify(store))
    } catch (error) {
        console.log(error)
    }
}

// update the store
export async function updateStore(id, store) {
    try {
        await dbConnect()

        const updatedStore = await Store.findOneAndUpdate({_id}, store, {new: true})

        if (!updatedStore) throw new Error("there is no updated store")

        return JSON.parse(JSON.stringify(updatedStore))
    } catch (error) {
        console.log(error)
    }
}

