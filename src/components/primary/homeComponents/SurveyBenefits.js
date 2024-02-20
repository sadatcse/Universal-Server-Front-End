"use client"
import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";

function SurveyBenefits() {
    const [surveyBenefitData, setSurveyBenefitData] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=> {
            const res = await fetch("https://back-end-vercel-seven.vercel.app/selling_points");
            const data = await res.json();
            setSurveyBenefitData(data);
        }
        fetchData()

        
    },[])
    
    return (
        <section className="m-4 md:m-8 text-neutral">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-semibold mb-7  dark:text-white">Survey Benefits</h2>
                <p className="dark:text-white max-w-2xl mx-auto">USPs are distinct features that set your product or service apart, attracting customers by offering unique benefits and a competitive edge.</p>
            </div>
            <div className="container mx-auto grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3">

                {surveyBenefitData && surveyBenefitData.map((item, ind)=> (
                <div key={ind} className="flex flex-col group shadow-sm items-start text-left p-12 border  hover:bg-[#E9F1FA] rounded-md  hover: hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral">
                        <FaStarOfLife className='group-hover:rotate-180 transition-all  duration-300 text-3xl' />
                    <h3 className="my-3 text-3xl font-semibold">{item.point}</h3>
                    <div className="space-y-1">
                        <p>{item.description}</p>
                    </div>
                </div>

                ))}
            </div>
        </section>
    )
}

export default SurveyBenefits