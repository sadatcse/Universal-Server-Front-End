import Image from 'next/image'
import about from "../../../Asset/about.png"
import { FaPlay } from "react-icons/fa";

function AboutHero() {
    return (
        <section className="  relative z-[1] pb-40 pt-8 bg-[#E9F1FA] dark:bg-transparent">
            <div className=" h-full absolute top-0 left-0 z-[-1] opacity-20" >

            </div>
            <div className="w-[90%] container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm xl:max-w-2xl lg:text-left items-center sm:items-start dark:text-white">
                    <h1 className="text-5xl font-semibold leading-tight">We combine <span className='text-[#00ABE4]'> data </span> and technology for enterprise
                    solutions
                    </h1>
                    <div className="max-w-md  pt-12 flex flex-col sm:flex-row items-center sm:justify-start sm:space-x-6">
                        <div className=' shadow-lg border border-b-0 animate-bounce cursor-pointer p-4 flex items-center rounded-full'>
                            <FaPlay className='text-2xl text-[#00ABE4]' />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-4 ">
                            <div>
                                <h2 className="text-2xl font-semibold">Know more about us</h2>
                                <span className="text-sm">Introduction by Programming Hero</span>
                            </div>
                        </div>
                    </div>

                </div>
                <Image src={about} className='w-full sm:w-[500px] object-cover' width={500} height={500} alt='survey image' />
            </div>
        </section>
    )
}

export default AboutHero