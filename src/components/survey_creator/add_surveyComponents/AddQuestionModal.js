"use client"
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

function AddQuestionModal({ setOpenAddQuestionModal, setSurveyQuestions, questionTypeName, setQuestionTypeName, showSurveyForm, setShowSurveyForm }) {
    const [isOpenFormTypesDropDown , setIsOpenFormTypesDropDown] = useState(false);

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
            <div className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8 transition-all duration-500 relative  ${isOpenFormTypesDropDown ? "pr-36" : ""}`} >

                <FormTypes setQuestionTypeName={setQuestionTypeName} typeNames={typeNames} isOpenFormTypesDropDown={isOpenFormTypesDropDown}  setIsOpenFormTypesDropDown={setIsOpenFormTypesDropDown} questionTypeName={questionTypeName} />

                {
                    questionTypeName === "multiple_choice" && <MultipleChoice setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                        setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}
                    />}

                {questionTypeName === "checkbox_grid" &&
                    <CheckboxQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                        setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}
                    />}

                {questionTypeName === "dropdown" && <DropdownMenuQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName} />}

                {questionTypeName === "ranking" && <RankingQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}

                />}

                {questionTypeName === "sort_text" && <ShortTextQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}

                />}
                {questionTypeName === "long_text" && <LongTextQuestion setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}

                />}

                {questionTypeName === "linear_scale" && <RatingScaleQuestions setOpenAddQuestionModal={setOpenAddQuestionModal} setSurveyQuestions={setSurveyQuestions}
                    setShowSurveyForm={setShowSurveyForm} questionTypeName={questionTypeName}

                />
                }


                <div className="w-full">

                    <button className="text-neutral text-4xl absolute top-3 left-6" onClick={() => setOpenAddQuestionModal(false)}><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestionModal