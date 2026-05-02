import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface IStackCardItem {
    alt: string
    src: string | StaticImport
    size?: number
}


export const StackCardItem = ({alt, src, size}: IStackCardItem) => {
    return (
        <div
            className={`p-1.5 rounded-md  bg-card-highlight hover:bg-card-highlight/80`}
        >
            <Image
                src={src}
                alt={alt}
                width={size ?? 24}
                height={size ?? 24}
            />
        </div>
    )
}
