import Reveal, { Fade } from "react-awesome-reveal"
import Slider from "react-slick"
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";

interface IHeader {
    label: string
    subtitle?: string
    fine?: boolean
    backButton?: boolean
}

export const Header = ({ label, subtitle, fine, backButton }: IHeader) => {

    return (
        <Reveal delay={0} triggerOnce duration={320}>

        <header className=" flex-1 relative">
            { backButton && (
                <Link
                    href="/"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </Link>
            ) }
            <h1 className="text-3xl dark:text-gray-100 font-bold">{ label }</h1>
            { subtitle && !fine && (
                <div className="text-xl dark:text-dark-text font-semibold">{subtitle}</div>
            ) }

            { subtitle && fine && (
                <div>{subtitle}</div>
            ) }
        </header>
        </Reveal>
    )
}
