"use client"
import DemoSurveyQuestion from '@/components/demo_survey_question/DemoSurveyQuestion';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import FormTypes from './FormTypes';
import CheckboxQuestions from './survey_forms/CheckboxQuestions';
import DropdownMenuQuestions from './survey_forms/DropdownMenuQuestions';
import LongTextQuestion from './survey_forms/LongTextQuestion';
import MultipleChoice from './survey_forms/MultipleChoice';
import RankingQuestions from './survey_forms/RankingQuestions';
import RatingScaleQuestions from './survey_forms/RatingScaleQuestions';
import ShortTextQuestions from './survey_forms/ShortTextQuestions';

function AddQuestionModal({ setOpenAddQuestionModal,
    surveyQuestions,
    setSurveyQuestions,
    questionTypeName,
    setQuestionTypeName,
    showSurveyForm,
    setShowSurveyForm,
    currentQuestion, 
    setCurrentQuestion,
    isDemo, 
    setIsDemo
}) {
    const [isOpenFormTypesDropDown, setIsOpenFormTypesDropDown] = useState(false);
    
    
    const typeNames = [
        {
            "name": "Multiple Choice",
            "type": "multiple_choice"
        },
        {
            "name": "Checkbox Grid",
            "type": "checkbox_grid"
        },
        {
            "name": "Dropdown Menu",
            "type": "dropdown"
        },
        {
            "name": "Linear Scale",
            "type": "linear_scale"
        },
        {
            "name": "Long Text",
            "type": "long_text"
        },
        {
            "name": "Short Text",
            "type": "sort_text"
        },
        {
            "name": "Ranking",
            "type": "ranking"
        }
    ]

    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white pt-12 p-8 transition-all duration-500 relative  ${isOpenFormTypesDropDown ? "pr-36" : ""}`} >

                {
                    !isDemo ?
                        <>
                            <button className={`absolute top-1 right-40 btn btn-neutral`} onClick={() => {setIsDemo(true); setIsOpenFormTypesDropDown(false)}} >Demo</button>
                            <FormTypes setQuestionTypeName={setQuestionTypeName} typeNames={typeNames} isOpenFormTypesDropDown={isOpenFormTypesDropDown} setIsOpenFormTypesDropDown={setIsOpenFormTypesDropDown} questionTypeName={questionTypeName} setCurrentQuestion={setCurrentQuestion} />

                            {
                                questionTypeName === "multiple_choice" && <MultipleChoice setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                    setQuestionTypeName={setQuestionTypeName}

                                    
                                />}

                            {questionTypeName === "checkbox_grid" &&
                                <CheckboxQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                    setQuestionTypeName={setQuestionTypeName}
                                />}

                            {questionTypeName === "dropdown" && <DropdownMenuQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                setQuestionTypeName={setQuestionTypeName} />}

                            {questionTypeName === "ranking" && <RankingQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                setQuestionTypeName={setQuestionTypeName}

                            />}

                            {questionTypeName === "sort_text" && <ShortTextQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                setQuestionTypeName={setQuestionTypeName}

                            />}
                            {questionTypeName === "long_text" && <LongTextQuestion setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                setQuestionTypeName={setQuestionTypeName}

                            />}

                            {questionTypeName === "linear_scale" && <RatingScaleQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                setQuestionTypeName={setQuestionTypeName}

                            />
                            }
                        </>
                        :

                        <DemoSurveyQuestion currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                        setQuestionTypeName={setQuestionTypeName} surveyQuestions={surveyQuestions}
                            setSurveyQuestions={setSurveyQuestions} />
                }




                <div className="w-full">
                    {
                        !isDemo ?
                            <button className="text-neutral text-4xl absolute top-3 left-6" onClick={() => setOpenAddQuestionModal(false)}><IoClose /></button>
                            :
                            <button className="text-neutral text-4xl absolute top-3 left-6" onClick={() => setIsDemo(false)}><IoClose /></button>

                    }
                </div>
            </div>
        </div>
    )
}

export default AddQuestionModal