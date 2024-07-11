export const LevelBar = ({ percent }: {percent: number}) => {
    return (
    <div className="w-full h-4 bg-gray-400/80 inline-block">
        <span className={`w-[${percent}%] h-full bg-green-600 block`}>

        </span>
    </div>)
}