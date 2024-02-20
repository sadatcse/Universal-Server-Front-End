import Image from "next/image"

function VisionCard({path, title, description}) {
    return (
        <div className="flex group relative bg-white rounded-2xl  border-t-0 border-l-0 shadow text-neutral-900">
            <div className="flex-shrink-0 w-24 h-24 bg-[#E9F1FA]  rounded-br-full rounded-t-2xl absolute top-0 left-0 flex justify-center items-center z-[2]">
                <div className="flex items-center justify-center w-12 h-12 rounded-full">
                    <Image src={path} width={200} height={200} alt="icon" />
                </div>
            </div>
            <div className="pl-20 pt-16 p-8 relative z-[1]">
            <div className="w-0 h-0  bg-[#E9F1FA] rounded-2xl absolute top-0 left-0 group-hover:h-full group-hover:w-full transition-all duration-500 z-[-1]"></div>
                <h4 className="text-lg font-medium">{title}</h4>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    )
}

export default VisionCard