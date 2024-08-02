import Slider from 'react-slick';

import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


interface IAutomaticSlider {
    images: string[] | StaticImport[]
}

export const AutomaticSlider = ({ images }: IAutomaticSlider) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    }


    const imagesComponent = images.map((image, i)=> {
        return (
            <div className='px-2' key={i}>
                <Image src={image} alt={"Screenshots"} className='w-full h-full max-w-[1024px] aspect-[4/3] rounded-lg' />
            </div>
        )
    })

    return (
        <div className="h-full w-full">
            <Slider { ...settings } >
                { imagesComponent }
            </Slider>
        </div>
    )
}