"use client"

import { Circle, Diamond } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface IScrollMenu {
    currentIndex: number
}

/**
 * INDEX COMEÇA EM 0
 * 
 */
export const ScrollMenu = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const ids: string[] = ["me", "formation", "projects", "contact"]

    const checkCurrentScreen = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const rect = element.getBoundingClientRect()
            const top = rect.top
            const bottom = rect.bottom


            const isVisible = (top < window.innerHeight && bottom > 0)
            if (isVisible) {
                const index = ids.indexOf(id)
                setCurrentIndex(index)
            }
        }

        return null
    }


    const handleScroll = () => {
        ids.forEach((id, i) => {
            checkCurrentScreen(id)
        })
    }

    useEffect(() => {
        const scrolavel = document.getElementById("scrolavel")
        if (scrolavel) {
            scrolavel.addEventListener("scroll", handleScroll)

        }

        return () => {
            scrolavel?.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])


    const handleClick = (e:any, id:string) => {
        e.preventDefault()
        const targetElement = document.getElementById(id)
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          })
        }
    }


    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 ">
            {ids.map((v, i) => {
                const color = i == currentIndex ? "white" : "gray"
                return (
                    <p className="mt-2" key={i}>
                        <Link href={`#${v}`} scroll >
                            <Diamond size={15} stroke={color} />
                        </Link>
                    </p>
                )
            })}
        </div>
    )
}