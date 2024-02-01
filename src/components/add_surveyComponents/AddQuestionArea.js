"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import AddQuestionCard from "./AddQuestionCard";
import AddQuestionModal from "./AddQuestionModal";
import EditModal from "./EditModal";
import QuestionCard from "./QuestionCard";

function AddQuestionArea({ formData, setShowQuestionArea, setFormData , surveyInitialInfo, setSurveyInitialInfo}) {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false)
    const [surveyQuestions, setSurveyQuestions] = useState([])
    
    return (
        <div className='w-full'>
            <h2 className='text-3xl font-bold pb-4 border-b-2 border-rose-400 relative'>{surveyInitialInfo.title} <button className="p-2 absolute top-1/2 right-6 -translate-y-1/2 text-sm rounded-sm text-white bg-neutral-400 border hover:bg-blue-500 hover:text-white" onClick={() => setOpenEditModal(true)} ><FaEdit /></button></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 mt-4 gap-6">
            {
                surveyQuestions && surveyQuestions.map((item, idx)=> (
                <QuestionCard key={idx} item={item} />

                ))
            }
                <AddQuestionCard
                    setOpenAddQuestionModal={setOpenAddQuestionModal}
                />
                {
                    openEditModal ?
                        <EditModal
                            setOpenEditModal={setOpenEditModal}
                            surveyInitialInfo={surveyInitialInfo}
                            setSurveyInitialInfo={setSurveyInitialInfo}
                            setShowQuestionArea={setShowQuestionArea} setFormData={setFormData}

                        />
                        : null
                }
            </div>
            {
                openAddQuestionModal ?
                    <AddQuestionModal
                        setOpenAddQuestionModal={setOpenAddQuestionModal}
                        setSurveyQuestions={setSurveyQuestions}

                    />
                    : null
            }
        </div>
    )
}

export default AddQuestionArea