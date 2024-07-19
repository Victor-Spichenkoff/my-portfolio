export const LevelBar = ({ percent }: {percent: string}) => {
    return (
    <div className="w-full h-4 bg-gray-400/80 inline-block rounded-lg overflow-hidden">
        <span className={`h-full bg-green-600 block`} style={{width: `${percent}%`}}>

        </span>
    </div>)
}