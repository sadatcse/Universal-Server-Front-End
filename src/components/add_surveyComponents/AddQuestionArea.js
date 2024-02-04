"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import AddQuestionCard from "./AddQuestionCard";
import AddQuestionModal from "./AddQuestionModal";
import EditModal from "./EditModal";
import QuestionCard from "./QuestionCard";

function AddQuestionArea({ formData, setShowQuestionArea, setFormData, surveyInitialInfo, setSurveyInitialInfo }) {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false)
    const [surveyQuestions, setSurveyQuestions] = useState([])
    const [questionTypeName, setQuestionTypeName] = useState("");
    const [showSurveyForm, setShowSurveyForm] = useState(false);
    const onSaveSurvey = () => {
        localStorage.removeItem("my_survey");
        setShowQuestionArea(false)
    }
    const onBack = () => {
        localStorage.removeItem("my_survey");
        setShowQuestionArea(false)
    }

    const deleteQuestion = (question)=> {
        const newArray = surveyQuestions.filter((item) => item.question !== question)
        setSurveyQuestions(newArray)
       }
    return (
        <div className='w-full'>
            <div className='pb-4 border-b-2 border-rose-400 relative'>
            <button className="absolute top-1/2 left-1 -translate-y-1/2 bg-red-300 hover:bg-blue-300 text-neutral-800 btn text-3xl flex justify-center items-center" onClick={onBack} ><IoMdArrowRoundBack /></button>
            <h2 className="text-3xl font-bold ml-20">{surveyInitialInfo?.title}</h2>
                <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center gap-2">
                    <button className="p-2  text-sm rounded-sm text-white bg-neutral-400 border hover:bg-blue-500 hover:text-white" onClick={() => setOpenEditModal(true)} ><FaEdit /></button>

                    <button className="p-2  text-sm rounded-sm text-white bg-neutral-800 border hover:bg-blue-300 hover:text-neutral-800" onClick={onSaveSurvey}>Save Survey</button>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 mt-4 gap-6">
                {
                    surveyQuestions && surveyQuestions.map((item, idx) => (
                        <QuestionCard key={idx} item={item} deleteQuestion={deleteQuestion} setQuestionTypeName={setQuestionTypeName}
                        setOpenAddQuestionModal={setOpenAddQuestionModal}
                        setShowSurveyForm={setShowSurveyForm}
                         />

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
                        questionTypeName={questionTypeName} setQuestionTypeName={setQuestionTypeName}
                        showSurveyForm={showSurveyForm} setShowSurveyForm={setShowSurveyForm}

                    />
                    : null
            }
        </div>
    )
}

export default AddQuestionArea