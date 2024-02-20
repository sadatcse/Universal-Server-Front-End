import { FaStarOfLife } from "react-icons/fa";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
function FaqAnswer({faqData}) {
  return (
    <section className=" relative z-[1] bg-[#00ABE4]  dark:bg-transparent pt-16" id="ans">
            <h2 className="text-center font-bold text-5xl pt-6 pb-4 text-white dark:text-white">FAQ Answers</h2>
            <div className="container p-6 mx-auto sm:py-12 lg:py-24 sm:px-16 space-y-8">
            {faqData.map((faqItem, index) => (
                    <section id={`ans${faqItem.id}`} key={index} className="flex flex-col group items-start text-left p-12 border shadow-lg rounded-md bg-white  hover:bg-[#E9F1FA] hover:shadow-2xl hover:scale-105 transition-all duration-300 sm:pr-44 relative text-neutral-800 max-w-[900px] mx-auto">
                        {/* <FaStarOfLife className='group-hover:rotate-180 transition-all duration-300 text-3xl' /> */}
                    <h3 className="my-3 text-3xl font-semibold">{faqItem.question}</h3>
                    <div className="space-y-1">
                        <p>{faqItem.answer}</p>
                    </div>
                    <a href="#faqHero" className="w-10 sm:w-16 h-12 sm:h-24 sm:-translate-y-1/2 absolute top-6 sm:top-1/2 rounded-lg right-10 text-neutral-800 shadow  hover:text-white bg-white hover:border hover:bg-[#00ABE4] flex justify-center items-center text-5xl"><LiaLongArrowAltUpSolid /></a>
                </section>

                ))}

            </div>
        </section>
  )
}

export default FaqAnswer