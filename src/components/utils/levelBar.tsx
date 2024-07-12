export const LevelBar = ({ percent }: {percent: string}) => {
    console.log(percent)
    return (
    <div className="w-full h-4 bg-gray-400/80 inline-block rounded-lg overflow-hidden">
        <span className={`w-[${percent}%] h-full bg-green-600 block`}>
        {/* <span className={`w-[${percent}%] h-full bg-green-600 block`}> */}

        </span>
    </div>)
}