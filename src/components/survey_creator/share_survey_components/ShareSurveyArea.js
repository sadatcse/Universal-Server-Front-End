"use client";
import { useEffect, useState } from "react";
import ShareSurveyCard from "./elements/ShareSurveyCard";
import ShareSurveyHeader from "./elements/ShareSurveyHeader";
import ShareSurveyModal from "./elements/ShareSurveyModal";
import useAxiosPublic from "@/Hook/useAxiosPublic";

// const surveyData = [
//   {
//     title: "Customer Satisfaction Survey",
//     description:
//       "Gather feedback from customers about their experience with our products and services.",
//   },
//   {
//     title: "Customer Satisfaction ",
//     description:
//       "Gather feedback from customers about their experience with our products and services.",
//   },
//   {
//     title: "Product Feedback Survey",
//     description:
//       "Collect feedback from users about the latest product features and enhancements.",
//   },
//   {
//     title: "Website Usability Survey",
//     description: "Evaluate the ease of use and navigation of our website.",
//   },
//   {
//     title: "Training Program Feedback Survey",
//     description:
//       "Gather feedback from participants about our training programs and courses.",
//   },
// ];

function ShareSurveyArea() {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [shareSurveyData, setShareSurveyData] = useState([]);
  const [surveyQuestionLink, setSurveyQuestionLink] = useState("");
  const [surveyImmutableData, setSurveyImmutableData] = useState([]);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/get_survey").then((res) => {
      setShareSurveyData(res.data);
      setSurveyData(res.data);
    });
  }, [axiosPublic]);

  return (
    <>
      <ShareSurveyHeader
        surveyImmutableData={surveyImmutableData}
        setShareSurveyData={setShareSurveyData}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
        {shareSurveyData &&
          shareSurveyData.map((data, idx) => (
            <ShareSurveyCard
              setOpenShareModal={setOpenShareModal}
              key={idx}
              survey={data}
              setSurveyQuestionLink={setSurveyQuestionLink}
              surveyQuestionLink={surveyQuestionLink}
            />
          ))}
      </div>
      {openShareModal ? (
        <ShareSurveyModal
          setOpenShareModal={setOpenShareModal}
          shareUrl={surveyQuestionLink}
        />
      ) : null}
    </>
  );
}

export default ShareSurveyArea;
