import {TestApiWorkService} from "@/services/apiConnection";

import {useEffect, useState} from "react";
import {getStoreLastUsedTime, storeLastUsedTime} from "@/utils/apiConnectionStorage.ts";
import {Env} from "@/lib/env.ts";




interface IConnectionTest {
    setLockActions?: (s: boolean) => void
    baseUrl: string
    name: string
}

let attempts = 0
/*
* setNavigationLock → true _> não navega para outras áreas
* */
export const ConnectionTest = ({setLockActions, baseUrl, name}: IConnectionTest) => {
    useEffect(() => {
        if (Env.isDev) {
            if (setLockActions)
                setLockActions(false)
            return
        }

        console.log("STARTING: " + name);

        (async () => {
            const success = await handleTestAgainClick()

            if (success)
                return


            // recursive
            await TryAgain()
            // setTimeout(() => TryAgain(), 5000)
        })()
    }, [])


    const handleTestAgainClick = async () => {
        if (attempts > 12) {
            return true
        }

        // dont need to load everytime
        const oldTime = getStoreLastUsedTime() ?? 1
        const now = Date.now()


        if (oldTime + 1000 * 60 * 10 > now && !Env.isDevOrTest) {
            console.log("Already loaded!")
            return true
        }


        const isSuccess = await TestApiWorkService(baseUrl)
        if (!isSuccess)
            return false

        storeLastUsedTime(now)


        if (setLockActions)
            setLockActions(false)
        return true
    }

    const TryAgain = async () => {
        attempts++

        const success = await handleTestAgainClick()

        if (success)
            return


        setTimeout(async () => {
            await TryAgain()
        }, 5000)
    }


    return null
}
