import SurveyQuestion from "@/components/surveyQuestion/SurveyQuestion"



function page({params}) {
  
  return (
    <SurveyQuestion surveyId={params.survey_id} />
  )
}

export default page