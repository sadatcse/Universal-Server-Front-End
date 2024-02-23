"use client"
import UseAxioSecure from "@/Hook/UseAxioSecure";
import { useEffect, useState } from "react";
import AddQuestionArea from "./AddQuestionArea";
import AddSurveyForm from "./AddSurveyForm";

function CreateSurveyPage({surveyId}) {
  
  const [formData, setFormData] = useState({})
  const [surveyInitialInfo, setSurveyInitialInfo] = useState({})
  const [showQuestionArea, setShowQuestionArea] = useState(false)
  const [surveyQuestions, setSurveyQuestions] = useState([])
  const axiosSecure = UseAxioSecure()

  useEffect(()=> {
    
    if(surveyId){
      axiosSecure.get(`/get_survey/${surveyId}`).then(res => {
        setSurveyQuestions(res?.data?.questions)
          setSurveyInitialInfo({title: res.data.title, description: res?.data?.description})
          setShowQuestionArea(true)
      }).catch(err => console.log(err))
      
    }else{
      const surveyInitialObject = JSON.parse(localStorage.getItem("my_survey")) || {};
      
      const isTrue = Object.keys(surveyInitialObject).length > 0 ? true : false;
      setShowQuestionArea(isTrue)
      if(isTrue){
        setSurveyInitialInfo(surveyInitialObject)

      }

    }
},[axiosSecure, surveyId])

  return (
    <div className="w-full flex justify-center">
    {
      !showQuestionArea ?
      <AddSurveyForm setSurveyInitialInfo={setSurveyInitialInfo} setShowQuestionArea={setShowQuestionArea} />
      : null
    }

      {
        showQuestionArea
         ?
      <AddQuestionArea formData={formData} setShowQuestionArea={setShowQuestionArea} setFormData={setFormData} surveyInitialInfo={surveyInitialInfo}
      setSurveyInitialInfo={setSurveyInitialInfo} surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions} />
      : null
      }
    </div>
  )
}

export default CreateSurveyPage