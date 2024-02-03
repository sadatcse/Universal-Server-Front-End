"use client"
import { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function TextEntryQuestions({setShowSurveyForm, setSurveyQuestions, setOpenAddQuestionModal}) {
  const [options, setOptions] = useState([]);
  const optionInput = useRef(null)
  const questionInput = useRef(null)
    const onSubmit = (e)=> {
        e.preventDefault();
        const question = e.target.question.value;
        console.log({question})
        const newObject = {type: "TextEntry" ,question}
        setSurveyQuestions((prevItem)=> [...prevItem, newObject])
        setOpenAddQuestionModal(false)
      }
  return (
    <div class="p-4 py-8 relative">
        <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white ">Dropdown Menu Questions form</div>
        <button className="text-4xl absolute top-4 left-6" onClick={()=> setShowSurveyForm(false)}><FaArrowLeftLong /></button>
        <form class="editor mx-auto w-10/12 flex flex-col text-gray-800  rounded-md shadow-xl p-4  max-w-2xl bg-stone-400 md:min-w-[500px] lg:min-w-[700px]" onSubmit={onSubmit}>
          <label htmlFor="title" className="font-bold text-2xl">Question</label>
            <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded" spellcheck="false" id="title" placeholder="Title" type="text" required name="question" ref={questionInput} />

            <div class="flex justify-end mt-4">
                <button class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800">Save</button>
            </div>
        </form>
    </div>
  )
}

export default TextEntryQuestions