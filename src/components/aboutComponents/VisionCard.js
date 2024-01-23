import Image from "next/image"

function VisionCard({path, title, description}) {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <Image src={path} width={200} height={200} alt="icon" />
                </div>
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-medium leadi dark:text-gray-50">{title}</h4>
                <p className="mt-2 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default VisionCard