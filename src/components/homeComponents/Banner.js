import Image from "next/image";
import Link from "next/link";


const Banner = () => {
    const image1 = 'https://images.pexels.com/photos/6801636/pexels-photo-6801636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src={image1} width={700} height={700} className="w-full object-cover object-center" alt="image" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className="text-6xl font-bold">Unlock Insights with our Surveys</h2>
                        <p>Make a Difference - Share Your Thoughts and Shape the Future!</p>
                        <div>
                            <Link href="/about"><button className="btn btn-primary mr-5">Create Sruvey</button> </Link>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    )
};

export default Banner;