import { FaHistory } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import HistorySearchBar from "./HistorySearchBar";

function HistoryHeader({
  setSurveyHistoryData,
  surveyData,
  deleteCheckedItem,
  checkedItemId,
}) {
  return (
    <div className="pb-4 border-b-2 border-stone-400 relative flex justify-between items-center flex-wrap">
      <h2 className="text-3xl font-bold  flex items-center gap-3">
        {checkedItemId.length > 0 ? (
          <button
            className="bg-red-300 text-neutral-800 btn text-3xl flex justify-center items-center"
            onClick={deleteCheckedItem}
          >
            <RiDeleteBin2Fill />
          </button>
        ) : (
          <button className="bg-stone-300 text-neutral-800 btn text-3xl flex justify-center items-center">
            <FaHistory />
          </button>
        )}
        Survey History
      </h2>

      <HistorySearchBar
        setSurveyHistoryData={setSurveyHistoryData}
        surveyData={surveyData}
      />
    </div>
  );
}

export default HistoryHeader;
