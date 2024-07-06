"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"
import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "@/navigation"

export const ToggleLocale = () => {
  const [newLocale, setNewLocale] = useState("en")
  const router = useRouter()
  const pathname = usePathname()



  
  const changeLocale = (locale: "en" | "br") => {
    setNewLocale(locale)
    router.replace(pathname, {locale})
  }

  const handleBRClick = () => {
    setNewLocale("br")
    changeLocale("br")
  }

  const handleENClick = () => {
    setNewLocale("en")
    changeLocale("en")
    console.log("ENIN")
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
          <Globe />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleENClick}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleBRClick}>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}