import {alertWorkingApiService, TestApiWorkService} from "@/services/apiConnection";

import {useEffect} from "react";
import {getStoreLastUsedTime, storeLastUsedTime} from "@/utils/apiConnectionStorage.ts";
import {Env} from "@/lib/env.ts";
import {Console} from "@/utils/console.ts";
import {RedirectEndpoints} from "@/utils/callRedirectApi.ts";


interface IConnectionTest {
    setLockActions?: (s: boolean) => void
    baseUrl: string
    name: string
    redirectApiEndpoint: RedirectEndpoints
}

let attempts = 0
/*
* setNavigationLock → true _> não navega para outras áreas
* */
export const ConnectionTest = ({setLockActions, baseUrl, name, redirectApiEndpoint}: IConnectionTest) => {
    useEffect(() => {
        if (Env.isDev || name == "PLACEHOLDER") {
            if (setLockActions)
                setLockActions(false)
            return
        }

        Console.dev("STARTING: " + name);

        (async () => {
            const success = await handleTestAgainClick()

            if (success) {
                await alertWorkingApiService(redirectApiEndpoint)
                return
            }

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
            Console.dev("Already loaded recently!")

            return true
        }

        const isSuccess = await TestApiWorkService(baseUrl)
        if (!isSuccess)
            return false


        storeLastUsedTime(now)


        if (setLockActions)
            setLockActions(false)

        await alertWorkingApiService(redirectApiEndpoint)
        return true
    }


    const TryAgain = async () => {
        attempts++
        Console.dev("Trying again for: " + name + " " + attempts)

        const success = await handleTestAgainClick()

        if (success) {
            Console.dev("STARTED!!" + name)
            return
        }

        setTimeout(async () => {
            await TryAgain()
        }, 5000)
    }

    return null
}
