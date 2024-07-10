"use client"

import { stacksArray } from '@/data/stack'
import Image from 'next/image'


export const ScrolTecnologies2 = () => {
    const technologies = stacksArray

    const allIcons = technologies.map((item, i) => {
        return (
            <Image src={item} alt='Stack' width={40} height={40} className='ml-5' />
        )
    })


    return (
        <div className="max-w-[900px] absolute bottom-0 w-full  bg-gray-800 text-white py-2 rounded-sm">
            <div className='w-[calc(250%)] flex justify-between bg-red-600'>
                <div className='flex bg-blue-600' id="slider1">
                    {allIcons}
                </div>
                <div className='flex bg-green-500' id="slider2">
                    {allIcons}
                </div>
            </div>
        </div>
    )
}
//primeito --> 100ml
//segundo --> 