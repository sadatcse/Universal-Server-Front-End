"use client";
import { useEffect, useState } from "react";
import ExportResponseCard from "./components/ExportResponseCard";
import ExportResponseHeader from "./components/ExportResponseHeader";
import ExportResponseModal from "./components/ExportResponseModal";
import useAxiosPublic from "@/Hook/useAxiosPublic";

const surveyData = [
  {
    SurveyTitle: "Customer Satisfaction Survey",
    SurveyDescription:
      "Gather feedback from customers about their experience with our products and services.",
    SurveyEndDate: "2023-12-31",
    SurveyParticipants: 1500,
    SurveyResponseRate: "85%",
    Questions: [
      {
        Question: "How satisfied are you with our products?",
        Options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      },
      {
        Question: "How would you rate our customer service?",
        Options: ["Excellent", "Good", "Fair", "Poor"],
      },
      {
        Question: "Would you recommend our products to others?",
        Options: ["Definitely yes", "Probably yes", "Not sure", "Probably not"],
      },
      {
        Question: "How often do you use our products?",
        Options: ["Daily", "Weekly", "Monthly", "Rarely"],
      },
      {
        Question: "What features do you find most useful?",
        Options: ["Feature A", "Feature B", "Feature C", "Feature D"],
      },
      {
        Question: "How likely are you to purchase from us again?",
        Options: ["Very likely", "Likely", "Neutral", "Unlikely"],
      },
    ],
  },
  {
    SurveyTitle: "Employee Engagement Survey",
    SurveyDescription:
      "Measure employee satisfaction and identify areas for improvement in the workplace.",
    SurveyEndDate: "2024-01-15",
    SurveyParticipants: 500,
    SurveyResponseRate: "70%",
    Questions: [
      {
        Question: "Do you feel valued in the workplace?",
        Options: ["Strongly agree", "Agree", "Disagree", "Strongly disagree"],
      },
      {
        Question: "Do you have clear expectations for your role?",
        Options: [
          "Yes, very clear",
          "Somewhat clear",
          "Not very clear",
          "Not clear at all",
        ],
      },
      {
        Question: "Do you receive constructive feedback from your manager?",
        Options: ["Regularly", "Sometimes", "Rarely", "Never"],
      },
      {
        Question: "Do you feel recognized for your achievements?",
        Options: ["Yes, always", "Sometimes", "Rarely", "Never"],
      },
      {
        Question: "Do you have opportunities for professional development?",
        Options: [
          "Yes, many opportunities",
          "Some opportunities",
          "Few opportunities",
          "No opportunities",
        ],
      },
      {
        Question: "Do you feel motivated to perform your best?",
        Options: ["Very motivated", "Motivated", "Neutral", "Demotivated"],
      },
    ],
  },
  {
    SurveyTitle: "Product Feedback Survey",
    SurveyDescription:
      "Collect feedback from users about the latest product features and enhancements.",
    SurveyEndDate: "2024-02-05",
    SurveyParticipants: 1000,
    SurveyResponseRate: "90%",
    Questions: [
      {
        Question: "Which product feature do you like the most?",
        Options: ["Feature X", "Feature Y", "Feature Z", "Other"],
      },
      {
        Question:
          "What improvements would you like to see in the next release?",
        Options: [
          "More customization options",
          "Better performance",
          "New features",
          "Bug fixes",
        ],
      },
      {
        Question: "How satisfied are you with the user interface?",
        Options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      },
      {
        Question: "How likely are you to recommend our product to others?",
        Options: ["Very likely", "Likely", "Neutral", "Unlikely"],
      },
      {
        Question: "Do you find the product easy to use?",
        Options: ["Very easy", "Easy", "Somewhat easy", "Difficult"],
      },
      {
        Question: "What additional features would you like to see?",
        Options: ["Feature A", "Feature B", "Feature C", "Feature D"],
      },
    ],
  },
  {
    SurveyTitle: "Website Usability Survey",
    SurveyDescription:
      "Evaluate the ease of use and navigation of our website.",
    SurveyEndDate: "2024-03-20",
    SurveyParticipants: 800,
    SurveyResponseRate: "75%",
    Questions: [
      {
        Question:
          "How easy is it to find what you're looking for on our website?",
        Options: ["Very easy", "Easy", "Somewhat easy", "Difficult"],
      },
      {
        Question: "Are you satisfied with the website's loading speed?",
        Options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      },
      {
        Question: "How would you rate the overall design of the website?",
        Options: ["Excellent", "Good", "Fair", "Poor"],
      },
      {
        Question: "Do you encounter any difficulties during checkout?",
        Options: ["No difficulties", "Occasionally", "Frequently", "Always"],
      },
      {
        Question: "What feature would you like to see improved on the website?",
        Options: ["Feature A", "Feature B", "Feature C", "Feature D"],
      },
      {
        Question: "How likely are you to return to our website in the future?",
        Options: ["Very likely", "Likely", "Neutral", "Unlikely"],
      },
    ],
  },
  {
    SurveyTitle: "Training Program Feedback Survey",
    SurveyDescription:
      "Gather feedback from participants about our training programs and courses.",
    SurveyEndDate: "2024-04-10",
    SurveyParticipants: 300,
    SurveyResponseRate: "80%",
    Questions: [
      {
        Question: "Was the training content relevant to your needs?",
        Options: ["Very relevant", "Relevant", "Neutral", "Irrelevant"],
      },
      {
        Question: "Did the training meet your expectations?",
        Options: [
          "Exceeded expectations",
          "Met expectations",
          "Did not meet expectations",
          "Not applicable",
        ],
      },
      {
        Question: "How satisfied are you with the training delivery?",
        Options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      },
      {
        Question: "Would you recommend this training to others?",
        Options: ["Definitely yes", "Probably yes", "Not sure", "Probably not"],
      },
      {
        Question:
          "What improvements would you suggest for future training sessions?",
        Options: [
          "More interactive sessions",
          "Better materials",
          "More practice exercises",
          "Other",
        ],
      },
      {
        Question:
          "How likely are you to apply what you've learned in your work?",
        Options: ["Very likely", "Likely", "Neutral", "Unlikely"],
      },
    ],
  },
];

function ExportResponse() {
  const [openModal, setOpenModal] = useState(false);
  const [surveyImmutableData, setSurveyImmutableData] = useState([]);
  const [exportSurveyData, setExportSurveyData] = useState([]);
  const [currentSurveyData, setCurrentSurvey] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/get_survey")
      .then((res) => {
        setExportSurveyData(res.data);
        setSurveyImmutableData(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic]);
  return (
    <>
      <ExportResponseHeader
        setExportSurveyData={setExportSurveyData}
        surveyData={surveyData}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
        {exportSurveyData &&
          exportSurveyData.map((data, idx) => (
            <ExportResponseCard
              data={data}
              key={idx}
              setOpenModal={setOpenModal}
              setCurrentSurvey={setCurrentSurvey}
            />
          ))}
      </div>
      {openModal ? (
        <ExportResponseModal
          setOpenModal={setOpenModal}
          currentSurveyData={currentSurveyData}
        />
      ) : null}
    </>
  );
}

export default ExportResponse;
