"use client";
import Link from "next/link";
import { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
function ShareSurveyCard({
  setOpenShareModal,
  survey,
  surveyQuestionLink,
  setSurveyQuestionLink,
}) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://universal-server-front-end.vercel.app//survey_question/${survey._id}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col group items-start text-left p-6 border-2 shadow-lg rounded-md hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral relative overflow-hidden border-stone-400 min-h-40">
      <div className="absolute top-0 right-0 w-20 h-full bg-stone-300 flex justify-start items-center flex-col pt-3 gap-3 text-neutral-800 text-lg transition-all duration-300 ">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            setOpenShareModal(true);
            setSurveyQuestionLink(
              `https://universal-server-front-end.vercel.app//survey_question/${survey._id}`
            );
          }}
        >
          <BsFillShareFill />
        </button>
        <Link
          href={`/dashboard/company/create_survey/${survey._id}`}
          className="btn btn-outline btn-sm"
        >
          <RiEditCircleFill />
        </Link>

        <button className={`btn btn-outline btn-sm`} onClick={onCopy}>
          {isCopied ? <FaCheck className="text-green-300" /> : <IoCopy />}
        </button>
      </div>

      <h3 className="my-3 text-xl font-semibold pr-16">{survey.title}</h3>
      <div></div>
    </div>
  );
}

export default ShareSurveyCard;
