import SurveyQuestion from "@/components/surveyQuestion/SurveyQuestion";

function page({ params, searchParams }) {
  return (
    <SurveyQuestion
      surveyId={params.survey_id}
      userEmail={searchParams?.email}
    />
  );
}

export default page;
