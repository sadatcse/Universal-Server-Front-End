import Image from "next/image";
import Link from "next/link";
import logo from "../../../Asset/logo2.png";
const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div className="w-full min-h-[200vh] md:min-h-[900px] md:flex items-center justify-center relative z-[1] dark:text-white -mt-24" >
        <div className="w-full h-full absolute top-0 left-0 z-[-1] dark:hidden" style={{backgroundImage: `url("/home-banner.jpg")`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
            <div className="relative container mx-auto">
                
                <div className="flex flex-col  md:flex-row justify-center md:justify-start items-center gap-10 h-full">
                    <div className='text-neutral-800 space-y-7 md:w-1/2 dark:text-white text-center md:text-left w-full'>
                        <h2 className="text-6xl font-permanent font-normal">Discover Insights with Our Surveys</h2>
                        <p>Make a Difference - Share Your Thoughts and Shape the Future!</p>
                            <Link href="/about"><button className="btn-lg rounded-md bg-neutral-800 text-white shadow-lg mr-5 dark:text-neutral-800 dark:bg-blue-200 hover:bg-amber-100 hover:text-neutral-800 mt-6">Create Survey</button> </Link>
                    </div>
                    <div className="p-12 mx-4 md:mx-0 w-full md:w-1/2 rounded-xl shadow-3xl flex justify-center items-center bg-amber-100 relative dark:bg-blue-200 shadow-2xl">
                        <Image width={600} height={600} alt="company logo" src={logo}className={`max-w-md object-contain object-center logoRotate`}  />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[120px] lg:w-[200px] h-[200px] md:h-[120px] lg:h-[200px] overflow-hidden rounded-full bg-amber-100 dark:bg-blue-200  flex flex-col justify-center items-center text-neutral-800">
                        <Image width={600} height={600} src="https://i.pinimg.com/564x/2a/1e/7f/2a1e7f07ebaaf23c0fbe8ac472d45bd4.jpg" alt="lgo image" className="sm:w-[80px] w-[50px] lg:w-[80px] mix-blend-multiply " />
                        <p className="font-flower text-center sm:text-xl md:text-[12px] lg:text-xl -mt-3">Universal Survey</p>
                        <p className="font-exo sm:text-xs lg:text-xs md:text-[6px] text-stone-800 ">Online Platform</p>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    )
};

export default Banner;