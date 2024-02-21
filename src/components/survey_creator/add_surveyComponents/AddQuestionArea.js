"use client"
import DemoModal from "@/components/demo_survey_question/elements/drag_and_drop/DemoModal";
import { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import AddQuestionModal from "./AddQuestionModal";
import EditModal from "./EditModal";
import QuestionCard from "./QuestionCard";

function AddQuestionArea({ setShowQuestionArea, surveyInitialInfo, setSurveyInitialInfo }) {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false)
    const [openDemoModal, setOpenDemoModal] = useState(false)
    const [surveyQuestions, setSurveyQuestions] = useState([])
    const [questionTypeName, setQuestionTypeName] = useState("multiple_choice");
    const [showSurveyForm, setShowSurveyForm] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [isDemo, setIsDemo] = useState(false);
    
    const onSaveSurvey = () => {
        localStorage.removeItem("my_survey");
        setShowQuestionArea(false)
    }
    const onBack = () => {
        localStorage.removeItem("my_survey");
        setShowQuestionArea(false)
    }

    const deleteQuestion = (question) => {
        const newArray = surveyQuestions.filter((item) => item.question !== question)
        setSurveyQuestions(newArray)
    }

    return (
        <div className='w-full'>
            <div className='pb-6 flex items-center border-b-2 relative'>
                <button className="absolute top-0 left-1 hover:bg-stone-200 text-neutral-800 btn text-3xl flex justify-center items-center" onClick={onBack} ><IoMdArrowRoundBack /></button>
                <h2 className="text-3xl font-bold ml-20">{surveyInitialInfo?.title}</h2>
                <div className="absolute top-0 right-6 flex items-center gap-2">
                    <button className="btn btn-md btn-outline" onClick={() => setOpenEditModal(true)} ><FaEdit /></button>
                    <button className="btn btn-md btn-outline" onClick={()=> setOpenAddQuestionModal(true)} ><FaPlus /></button>

                    <button className={`btn btn-md btn-neutral ${surveyQuestions.length > 0 ? "" : "btn-disabled"}`} onClick={() => setOpenDemoModal(true)}>Demo</button>

                    <button className="btn btn-md btn-outline" onClick={onSaveSurvey}>Save Survey</button>

                </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
                {
                    surveyQuestions && surveyQuestions.map((item, idx) => (
                        <QuestionCard key={idx} item={item} deleteQuestion={deleteQuestion} setQuestionTypeName={setQuestionTypeName}
                        setOpenAddQuestionModal={setOpenAddQuestionModal}
                        setShowSurveyForm={setShowSurveyForm}
                        setCurrentQuestion={setCurrentQuestion}
                        setIsDemo={setIsDemo}

                        />

                    ))
                }
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
                        surveyQuestions={surveyQuestions}
                        currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                        isDemo={isDemo} 
                        setIsDemo={setIsDemo}
                    />
                    : null
            }
            {
                openDemoModal ?
                    <DemoModal
                        currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions} setOpenDemoModal={setOpenDemoModal}
                    />
                    : null
            }
        </div>
    )
}

export default AddQuestionArea