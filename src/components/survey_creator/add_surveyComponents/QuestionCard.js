"use client"
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import ToolTip from './ToolTip';

function QuestionCard({ item , deleteQuestion, setShowSurveyForm,setOpenAddQuestionModal }) {
    const [isMouseUp, setIsMuseUp] = useState(false);
    return (
        <div className="rounded-lg border-2 text-neutral-800 text-4xl bg-amber-200 border-amber-500 hover:bg-blue-200 hover:border-blue-500 h-24 p-2 relative " onMouseOver={()=> setIsMuseUp(true)} onMouseLeave={()=> setIsMuseUp(false)}  >
            <h3 className="text-base font-bold capitalize" >{item?.question}?</h3>
            <button className="p-1 absolute -top-3 -right-3 text-[10px] text-white bg-neutral-400 border rounded-full hover:bg-red-500 hover:text-white" onClick={()=> deleteQuestion(item.question)}><IoCloseSharp /></button>
            <button className="p-1 absolute bottom-2 left-3 text-[12px] text-neutral bg-white border rounded-full hover:bg-blue-500 hover:text-white" onClick={()=>{ setShowSurveyForm(true); setOpenAddQuestionModal(item?.type)}}><FaEdit /></button>
            {
                isMouseUp && 
                <ToolTip info={item} />
            }
        </div>
    )
}

export default QuestionCard