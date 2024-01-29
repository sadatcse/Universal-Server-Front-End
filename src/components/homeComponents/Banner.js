import Image from "next/image";
import Link from "next/link";
import logo from "../../Asset/logo2.png";
const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div className="carousel w-full h-fit md:h-screen -mt-24 relative z-[1] dark:text-white" >
        <div className="w-full h-full absolute top-0 left-0 z-[-1] dark:hidden" style={{backgroundImage: `url("/home-banner.jpg")`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
            <div id="slide1" className="carousel-item relative container m-auto">
                
                <div className="absolute flex flex-col  md:flex-row items-center gap-10 h-full ">
                    <div className='text-neutral-800 space-y-7 pl-20 w-1/2 dark:text-white'>
                        <h2 className="text-6xl font-bold font-exo">Unlock Insights with our Surveys</h2>
                        <p>Make a Difference - Share Your Thoughts and Shape the Future!</p>
                        <div>
                            <Link href="/about"><button className="btn-lg rounded-md bg-amber-100 shadow-lg mr-5 text-neutral-800 dark:bg-blue-200">Create Survey</button> </Link>

                        </div>
                    </div>
                    <div className="p-12 max-w-[500px] rounded-xl shadow-3xl flex justify-center items-center bg-amber-100 relative dark:bg-blue-200 border-2">
                        <Image width={600} height={600} alt="company logo" src={logo}className={`w-full h-full object-contain object-center logoRotate`}  />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] overflow-hidden rounded-full bg-amber-100 dark:bg-blue-200  flex flex-col justify-center items-center text-neutral-800">
                        <Image width={600} height={600} src="https://i.pinimg.com/564x/2a/1e/7f/2a1e7f07ebaaf23c0fbe8ac472d45bd4.jpg" alt="lgo image" className="w-[80px] mix-blend-multiply " />
                        <p className="font-flower text-xl -mt-3">Universal Survey</p>
                        <p className="font-exo text-xs text-stone-800 ">Online Platform</p>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    )
};

export default Banner;