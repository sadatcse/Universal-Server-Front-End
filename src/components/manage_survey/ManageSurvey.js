import ManageHeader from "./components/ManageHeader";
import SurveyCard from "./components/SurveyCard";
function ManageSurvey() {
  return (
    <>
        <ManageHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 mt-4 gap-6">
            <SurveyCard />
            <SurveyCard />
            <SurveyCard />
        </div>
    </>
  )
}

export default ManageSurvey