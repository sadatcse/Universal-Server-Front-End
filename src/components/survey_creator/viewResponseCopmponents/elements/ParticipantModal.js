import SurveyResult from "@/components/surveyQuestion/elements/SurveyResult";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ParticipantModal({ responseResult, setIsOpenModal }) {
  console.log(responseResult);
  const [currentResult, setCurrentResult] = useState({});
  const [isShowResult, setIsShowResult] = useState(false);
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div
        className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white pt-12 p-8 transition-all duration-500 relative`}
      >
        {!isShowResult ? (
          <>
            <h2 className="font-bold text-3xl border-b-2 border-stone-400">
              Participant response result
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
              {responseResult &&
                Object.keys(responseResult).map((name, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border-2 text-neutral-800 text-4xl border-stone-400 h-28 p-2 pr-6 relative "
                  >
                    <h3 className="text-base font-bold capitalize">{name}</h3>
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        setCurrentResult(responseResult[name]);
                        setIsShowResult(true);
                      }}
                    >
                      View Result
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <SurveyResult
            isViewResult={true}
            questions={currentResult}
            setQuestions={setCurrentResult}
          />
        )}

        <div className="w-full">
          {isShowResult ? (
            <button
              className="text-neutral text-4xl absolute top-3 right-6"
              onClick={() => setIsShowResult(false)}
            >
              <IoClose />
            </button>
          ) : (
            <button
              className="text-neutral text-4xl absolute top-3 right-6"
              onClick={() => setIsOpenModal(false)}
            >
              <IoClose />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
