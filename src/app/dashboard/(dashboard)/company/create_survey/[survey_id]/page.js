import CreateSurveyPage from "@/components/survey_creator/add_surveyComponents/CreateSurveyPage"



function Page({params}) {

  return (
    <>
      <CreateSurveyPage surveyId={params.survey_id} />
    </>
  )
}

export default Page