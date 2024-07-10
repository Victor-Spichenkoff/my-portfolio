"use client"

import { stacksArray } from '@/data/stack'
import Image from 'next/image'


export const ScrolTecnologies = () => {
    const technologies = stacksArray

    const allIcons = technologies.map((item, i) => {
        return (
            <Image src={item} alt='Stack' width={40} height={40} className='ml-5' />
        )
    })


    return (
        <div className="max-w-[900px] absolute bottom-0 w-full overflow-hidden bg-gray-800 text-white py-2 rounded-sm">
            <div className='w-[calc(190%)]'>
                <div className='slider flex justify-end'>
                    <div id="final-first-queeue">
                    {allIcons}
                    </div>
                    <div>
                        {allIcons}
                    </div>
                </div>
            </div>
        </div>
    )
}
