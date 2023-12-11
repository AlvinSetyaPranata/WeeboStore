'use client'

// This for handling data from cart

export default function useCartStore() {
    const storeName = "client-cart"

    let storeOrUndefined = localStorage.getItem(storeName)

    if (!storeOrUndefined) {
        localStorage.setItem(storeName, JSON.stringify([]))
    }


    const insertWithIndex = (array, value) => {
        let index = array.length - 1 + 1

        value["index"] = index

        array.push(value)
    }


    const getStoreData = () => {
        const values = localStorage.getItem(storeName)

        if (!values || values.length == 0) return []

        return JSON.parse(values)
    }

    const setStoreData = (value) => {
        let previousStoreData = JSON.parse(localStorage.getItem(storeName))

        insertWithIndex(previousStoreData, value)

        localStorage.setItem(storeName, JSON.stringify(previousStoreData))

    }


    const updateStoreData = (newArray) => {
        if (!Array.isArray(newArray)) return

        localStorage.setItem(storeName, JSON.stringify(newArray))

    }

    return [setStoreData, updateStoreData, getStoreData]
}