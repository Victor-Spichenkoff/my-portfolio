export const storeLastUsedTime = (newTime: number) => {
    localStorage.setItem("last_start", newTime.toString())
}

export const getStoreLastUsedTime = () => {
    const timeStorage = localStorage.getItem("last_start")

    if(!timeStorage)
        return null

    return Number(timeStorage)
}

export const clearStorageLastUsedTime = () => storeLastUsedTime(0)
