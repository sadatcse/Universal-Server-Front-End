
"use client"
import { useState } from "react";
import AddQuestionArea from "./AddQuestionArea";
import AddSurveyForm from "./AddSurveyForm";

function CreateSurveyPage() {
  const surveyInitialObject = JSON.parse(localStorage.getItem("my_survey"))
  const [formData, setFormData] = useState({})
  const [surveyInitialInfo, setSurveyInitialInfo] = useState(surveyInitialObject)
  const [showQuestionArea, setShowQuestionArea] = useState(typeof surveyInitialObject === "object")

  return (
    <div className="w-full flex justify-center">
    {
      !showQuestionArea ?
      <AddSurveyForm setFormData={setFormData} setShowQuestionArea={setShowQuestionArea} />
      : null
    }

      {
        showQuestionArea
         ?
      <AddQuestionArea formData={formData} setShowQuestionArea={setShowQuestionArea} setFormData={setFormData} surveyInitialInfo={surveyInitialInfo}
      setSurveyInitialInfo={setSurveyInitialInfo} />
      : null
      }
    </div>
  )
}

export default CreateSurveyPage