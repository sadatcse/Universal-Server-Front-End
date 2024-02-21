"use client"

import { useEffect, useState } from "react";


function LinearScaleQuestion({question, setQuestions, isViewResult}) {
    const initialValue = question.answer === "" ? 0 : parseInt(question.answer)
    const [selectedLabel, setSelectedLabel] = useState(initialValue);
    const [mouseupIndex, setMouseupIndex] = useState(initialValue);



    useEffect(()=> {
        const labels = document.querySelectorAll(".label");

        labels.forEach((element, index)=> {
            if(index > selectedLabel ){
                element.classList.add("bg-white");
                element.classList.remove("bg-neutral-800");
                element.classList.add("text-neutral-800");
                element.classList.remove("text-white");
            }else{
                element.classList.add("bg-neutral-800");

                element.classList.remove("text-neutral-800");
                element.classList.add("text-white");
                element.classList.remove("bg-white");

            }
        })


        labels.forEach((element, index)=> {
            if(index > mouseupIndex ){
                element.classList.add("bg-white");
                element.classList.remove("bg-neutral-800");
                element.classList.add("text-neutral-800");
                element.classList.remove("text-white");
            }else{
                element.classList.add("bg-neutral-800");

                element.classList.remove("text-neutral-800");
                element.classList.add("text-white");
                element.classList.remove("bg-white");

            }
            
        })


        setQuestions(prevValue => {
            const current_question = prevValue.findIndex(item => item.id === question.id);
    
            const copyArray = {...question};
    
            copyArray.answer = selectedLabel;
    
            const updatedArray = prevValue.toSpliced(current_question, 1, copyArray)
    
            console.log(updatedArray)
    
            return updatedArray;
          })

    }, [selectedLabel, mouseupIndex])

    
    return (
        <div className={isViewResult ? "pointer-events-none": ""}>
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
            <div className="relative px-12 w-full h-40 lg:h-36">
                <ul className="w-full absolute top-1/2 left-0 -translate-y-1/2 flex justify-start md:justify-center gap-4 flex-wrap " >

                    {question.options.map((name, idx) => (
                            <li key={idx} onClick={()=> setSelectedLabel(idx)} className={`text-neutral bg-white border-2 border-neutral rounded-full w-12 h-12 lg:h-16 lg:w-16 shadow-lg hover:bg-neutral-800 hover:text-white flex justify-center items-center text-md md:text-xl  lg:text-4xl cursor-pointer label `} onMouseOver={()=> setMouseupIndex(idx)} onMouseLeave={()=> setMouseupIndex(selectedLabel > 0 ? selectedLabel : 0)}>{name}</li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default LinearScaleQuestion
