"use client"
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import QuestionTypeCard from './QuestionTypeCard';
import CheckboxQuestions from './survey_forms/CheckboxQuestions';
import DropdownMenuQuestions from './survey_forms/DropdownMenuQuestions';
import LikertScaleQuestions from './survey_forms/LikertScaleQuestions';
import MultipleChoice from './survey_forms/MultipleChoice';
import RankingQuestions from './survey_forms/RankingQuestions';
import RatingScaleQuestions from './survey_forms/RatingScaleQuestions';
import TextEntryQuestions from './survey_forms/TextEntryQuestions';

function AddQuestionModal({ setOpenAddQuestionModal, setSurveyQuestions }) {

    const [showSurveyForm, setShowSurveyForm] = useState(false);

    const [questionTypeName, setQuestionTypeName] = useState("");


    const typeNames = [
        "Multiple Choice Questions",
        "Checkbox Questions",
        "Dropdown Menu Questions",
        "Rating Scale Questions",
        "Text Entry Questions",
        "Ranking Questions",
        "Likert Scale Questions"
    ]

    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8">
                {
                    !showSurveyForm ?
                        <>

                            <h2 className='text-center text-3xl font-bold mb-5'>Add Question</h2>
                            <div className="gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ display: "grid" }}>
                                {typeNames && typeNames.map((type, idx) => (
                                    <QuestionTypeCard key={idx} type={type} setQuestionTypeName={setQuestionTypeName}
                                        setShowSurveyForm={setShowSurveyForm}

                                    />
                                ))}

                            </div>
                        </>
                        :
                        <>
                            {
                                questionTypeName === "Multiple Choice Questions" && <MultipleChoice setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                    setShowSurveyForm={setShowSurveyForm}
                                />}

                            {questionTypeName === "Checkbox Questions" &&
                                <CheckboxQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                    setShowSurveyForm={setShowSurveyForm}
                                />}

                            {questionTypeName === "Dropdown Menu Questions" && <DropdownMenuQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} />}

                            {questionTypeName === "Likert Scale Questions" && <LikertScaleQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm} />}

                            {questionTypeName === "Ranking Questions" && <RankingQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm}

                            />}

                            {questionTypeName === "Text Entry Questions" && <TextEntryQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm}

                            />}

                            {questionTypeName === "Rating Scale Questions" && <RatingScaleQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                                setShowSurveyForm={setShowSurveyForm}

                            />}

                        </>
                }


                <div class="w-full">

                    <button class="text-white text-4xl absolute top-6 right-10" onClick={() => setOpenAddQuestionModal(false)}><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestionModal