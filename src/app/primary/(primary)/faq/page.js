import Image from "next/image";

const faq = () => {
    return (
        <div>
            <div>
                <div className="max-w-screen-lg mx-auto bg-gray-500 h-[200px] md:h-[400px] mt-5 md:mt-12 flex items-center gap-5 md:gap-10">
                    <div className=" flex flex-col items-center justify-center">
                        <h1 className="text-xl text-white md:text-4xl p-2 md:p-8 font-bold text-center mt-5 md:mt-10"><span className="text-sky-400 ">How Can We Help You?</span></h1>
                        <form className="mx-4 md:mx-0 flex justify-center">
                            <input type="text" name="search" id="" placeholder="Search for a question" required className=" md:px-2"/>
                            <button type="submit" className="bg-purple-600 rounded-r-md p-2 font-semibold text-white">Search</button>
                        </form>
                    </div>
                    <Image height={500} width={500} src="https://i.ibb.co/2WVVj7g/writing-great-blogs.jpg" alt="" className="rounded-l-full h-full w-1/2 object-cover hidden md:flex" />
                </div>
            </div>
        </div>
    );
};

export default faq;