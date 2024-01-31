"use client"

import AddQuestionArea from "@/components/add_surveyComponents/AddQuestionArea";
import AddSurveyForm from "@/components/add_surveyComponents/AddSurveyForm";
import { useState } from "react";

function AddSurvey() {
  const [formData, setFormData] = useState({})
  const [showQuestionArea, setShowQuestionArea] = useState(false)
  console.log(formData)
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
      <AddQuestionArea formData={formData} setShowQuestionArea={setShowQuestionArea} setFormData={setFormData} />
      : null
      }
    </div>
  )
}

export default AddSurvey