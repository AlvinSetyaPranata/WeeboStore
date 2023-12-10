'use client'


export default function useStore(storeName, initialValue) {
    const storeOrUndefined = localStorage.getItem(storeName)

    if (!storeOrUndefined) {
        localStorage.setItem(storeName, JSON.stringify(initialValue))
    }


    const getStoreData = () => {
        return JSON.parse(localStorage.getItem(storeName))
    }

    const store = (value) => {
        let previousStoreData = JSON.parse(localStorage.getItem(storeName))

        previousStoreData.push(value)

        localStorage.setItem(storeName, JSON.stringify(previousStoreData))

    } 
    
    
    return [store, getStoreData]
}