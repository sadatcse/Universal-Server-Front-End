import Image from "next/image"

function VisionCard({path, title, description}) {
    return (
        <div className="flex group relative bg-blue-200 rounded-2xl">
            <div className="flex-shrink-0 w-24 h-24 bg-red-200 rounded-br-full absolute top-0 left-0 flex justify-center items-center z-[2]">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <Image src={path} width={200} height={200} alt="icon" />
                </div>
            </div>
            <div className="pl-20 pt-16 p-8 relative z-[1]">
            <div className="w-0 h-0 rounded-br-full bg-red-200 absolute top-0 left-0 group-hover:h-full group-hover:w-full transition-all duration-500 z-[-1]"></div>
                <h4 className="text-lg font-medium leadi dark:text-gray-50">{title}</h4>
                <p className="mt-2 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default VisionCard