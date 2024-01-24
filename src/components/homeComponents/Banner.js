import Image from "next/image";
import Link from "next/link";
import logo from "../../Asset/logo2.png";
const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div className="carousel w-full h-fit md:h-screen -mt-24" style={{backgroundImage: `url("/home-banner.jpg")`, backgroundSize: "cover", backgroundPosition: "center"}} >
        {/* <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <Image src={bannerBg} width={800} height={800} className="w-full h-full object-cover object-center" alt="banner background" />
        </div> */}
            <div id="slide1" className="carousel-item relative w-full">
                
                <div className="absolute flex items-center h-full ">
                    <div className='text-neutral-800 space-y-7 pl-20 w-1/2'>
                        <h2 className="text-6xl font-bold font-exo">Unlock Insights with our Surveys</h2>
                        <p>Make a Difference - Share Your Thoughts and Shape the Future!</p>
                        <div>
                            <Link href="/about"><button className="btn-lg rounded-md bg-amber-100 shadow-md mr-5">Create Survey</button> </Link>

                        </div>
                    </div>
                    <div className="p-12 max-w-[500px] rounded-xl shadow-2xl flex justify-center items-center bg-amber-100 relative">
                        <Image width={600} height={600} alt="company logo" src={logo}className="w-full h-full object-contain object-center logoRotate" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] overflow-hidden rounded-full bg-amber-100 flex flex-col justify-center items-center">
                        <img src="https://i.pinimg.com/564x/2a/1e/7f/2a1e7f07ebaaf23c0fbe8ac472d45bd4.jpg" alt="lgo image" className="w-[80px] mix-blend-multiply" />
                        <p className="font-flower text-xl -mt-3">Universal Survey</p>
                        <p className="font-exo text-xs text-stone-800">Online Platform</p>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    )
};

export default Banner;