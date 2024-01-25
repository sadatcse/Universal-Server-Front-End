
function FaqHero({faqData}) {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 relative z-[1] bg-amber-200" id="faqHero">
            <div className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20" style={{ backgroundImage: "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')" }} >

            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between gap-4 gap-x-10">
                {faqData.map((faqItem, index) => (
                    <a href={`#ans${index === 0 ? "" : index }`} key={index} className="collapse collapse-plus bg-white hover:bg-neutral-800 hover:text-white scale-100 hover:scale-105 transition-all duration-700">
                        <div className="collapse-title text-xl font-medium">
                            {faqItem.question}
                        </div>
                    </a>

                ))}

            </div>
        </section>
    )
}

export default FaqHero