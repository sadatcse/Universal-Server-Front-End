"use client"

import AddQuestionArea from "@/components/add_surveyComponents/AddQuestionArea";
import AddSurveyForm from "@/components/add_surveyComponents/AddSurveyForm";
import { useState } from "react";

function Page() {
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

export default Page