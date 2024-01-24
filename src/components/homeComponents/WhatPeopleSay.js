"use client"
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function WhatPeopleSay() {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=> {
            const res = await fetch("https://back-end-vercel-seven.vercel.app/testimonials.json");
            const data = await res.json();
            setTestimonialData(data);
        }
        fetchData()

        
    },[])
    
    return (
        <section className="py-6 bg-slate-100 text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">What people Say About Our Service</h1>
                <Marquee pauseOnHover={true}>
                    <div className="flex mt-8">
                        {testimonialData && testimonialData.map((item, ind) => (
                            <div key={ind} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 shadow-2xl bg-white transition-all duration-300 hover:bg-gray-800 text-gray-800 hover:text-gray-100 group">
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover" src={item?.image} />
            <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">{item.name}</p>
                <p>{item?.title}</p>
                <p> <span className="text-3xl font-bold">“</span>{item?.comment} <span className="text-3xl font-bold" >”</span></p>

            </div>
            
        </div>

                        ))}
                    </div>

                </Marquee>


            </div>
        </section>
    )
}

export default WhatPeopleSay
