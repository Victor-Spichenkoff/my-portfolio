"use client"

import { stacksArray } from '@/data/stack'
import Image from 'next/image'


export const ScrolTecnologies = () => {
    const technologies = stacksArray

    const allIcons = technologies.map((item, i) => {
        return (
            <Image src={item} alt='Stack' width={40} height={40} className='ml-5' key={i}/>
        )
    })


    return (
        <div className="max-w-[1200px] absolute bottom-8 w-full  bg-gray-800 text-white py-2 rounded-sm items-center h-[60px] overflow-hidden hidden" id="scroll-tecnologies">
        {/* <div className="max-w-[1200px] absolute bottom-8 w-full  bg-gray-800 text-white py-2 rounded-sm items-center h-[60px] overflow-hidden hidden md:block" id="scroll-tecnologies"> */}
            <div className='ml-[100%] w-[calc(200%)] bg-red-500 flex justify-end relative'>
                <div className='absolute top-[0px] left-[100px] flex flex-1' id="slider1">
                    {allIcons}
                </div>
                <div className='absolute top-[0px] left-0 flex' id="slider2">
                    {allIcons}
                </div>
            </div>
        </div>
    )
}