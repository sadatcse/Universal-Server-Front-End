"use client"
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { TbEyeglass2 } from "react-icons/tb";

function QuestionCard({ item, deleteQuestion, setShowSurveyForm, setOpenAddQuestionModal, setQuestionTypeName, setCurrentQuestion, setIsDemo }) {
    return (
        <div className="rounded-lg border-2 text-neutral-800 text-4xl border-stone-400 h-28 p-2 pr-6 relative "   >
            <h3 className="text-base font-bold capitalize" >{item?.question}?</h3>
            <div className='absolute top-0 right-0 w-8 h-full flex justify-start items-center flex-col py-2 gap-2' >
                <button className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-blue-500 hover:text-white" onClick={() => deleteQuestion(item.question)}><MdDelete /></button>
                <button className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-blue-500 hover:text-white" onClick={() => { setQuestionTypeName(item?.questionType); setOpenAddQuestionModal(true); setCurrentQuestion(item)}}><FaEdit /></button>
                <button className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-blue-500 hover:text-white" onClick={() => { setIsDemo(true); setOpenAddQuestionModal(true); setCurrentQuestion(item) }}><TbEyeglass2 /></button>

            </div>
        </div>
    )
}

export default QuestionCard