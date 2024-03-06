import { TbTableExport } from "react-icons/tb";
import ExportResponseSearchBar from "./ExportResponseSearchBar";
function ExportResponseHeader({ setExportSurveyData, surveyData }) {
  return (
    <div className="pb-4 border-b-2 border-stone-400 relative flex justify-between items-center flex-wrap">
      <h2 className="text-3xl font-bold  flex items-center gap-3">
        <button className="bg-stone-300 text-neutral-800 btn text-3xl flex justify-center items-center">
          <TbTableExport />
        </button>
        Export Response Data
      </h2>

      <ExportResponseSearchBar
        setExportSurveyData={setExportSurveyData}
        surveyData={surveyData}
      />
    </div>
  );
}

export default ExportResponseHeader;
