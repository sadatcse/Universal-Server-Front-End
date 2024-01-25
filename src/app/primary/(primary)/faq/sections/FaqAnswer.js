import { FaStarOfLife } from "react-icons/fa";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
function FaqAnswer({faqData}) {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 relative z-[1] bg-blue-300 pt-16" id="ans">
            <h2 className="text-center font-bold text-3xl pt-6 pb-4">FAQ Answers</h2>
            <div className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20" style={{ backgroundImage: "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')" }} >

            </div>
            <div className="container p-6 mx-auto sm:py-12 lg:py-24 px-16 space-y-8">
            {faqData.map((faqItem, index) => (
                    <section id={`ans${faqItem.id}`} key={index} className="flex flex-col group items-start text-left p-12 border shadow-lg rounded-md bg-white hover:bg-amber-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-44 relative">
                        <FaStarOfLife className='group-hover:rotate-180 transition-all duration-300 text-3xl' />
                    <h3 className="my-3 text-3xl font-semibold">{faqItem.question}</h3>
                    <div className="space-y-1">
                        <p>{faqItem.answer}</p>
                    </div>
                    <a href="#faqHero" className="w-16 h-24 -translate-y-1/2 absolute top-1/2 rounded-lg right-10 text-white bg-neutral-800 flex justify-center items-center text-5xl"><LiaLongArrowAltUpSolid /></a>
                </section>

                ))}

            </div>
        </section>
  )
}

export default FaqAnswer