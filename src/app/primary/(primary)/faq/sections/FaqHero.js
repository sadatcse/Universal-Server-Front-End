
function FaqHero({faqData}) {
    return (
        <section className=" relative z-[1] dark:bg-transparent bg-[#E9F1FA]" id="faqHero">
            <div className="container grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between gap-4 gap-x-10">
                {faqData.map((faqItem, index) => (
                    <a href={`#ans${index === 0 ? "" : index }`} key={index} className="collapse collapse-plus bg-white hover:bg-[#00ABE4] hover:text-white scale-100 hover:scale-105 transition-all duration-300 text-neutral-800">
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