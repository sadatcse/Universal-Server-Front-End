import SurveyQuestion from "@/components/surveyQuestion/SurveyQuestion";

function page({ params, searchParams }) {
  return (
    <SurveyQuestion
      surveyId={params.survey_id}
      participantId={searchParams?.id}
    />
  );
}

export default page;
