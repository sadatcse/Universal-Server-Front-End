"use client";
import { useState } from "react";

const surveyData = [
  {
    SurveyName: "Customer Satisfaction Survey",
    SurveyCompany: "ABC Corp",
    SurveyStartDate: "2023-01-15",
    YourSubmission: "Completed",
  },
  {
    SurveyName: "Employee Feedback Survey",
    SurveyCompany: "XYZ Inc",
    SurveyStartDate: "2023-02-20",
    YourSubmission: "Incomplete",
  },
  {
    SurveyName: "Product Feedback Survey",
    SurveyCompany: "123 Co.",
    SurveyStartDate: "2023-03-10",
    YourSubmission: "Completed",
  },
  {
    SurveyName: "Website Usability Survey",
    SurveyCompany: "Tech Solutions",
    SurveyStartDate: "2023-04-05",
    YourSubmission: "Incomplete",
  },
  {
    SurveyName: "Market Research Survey",
    SurveyCompany: "Global Insights",
    SurveyStartDate: "2023-05-20",
    YourSubmission: "Incomplete",
  },
  {
    SurveyName: "Training Program Evaluation",
    SurveyCompany: "Education Plus",
    SurveyStartDate: "2023-06-15",
    YourSubmission: "Completed",
  },
];

function ParticipantViewResponseTable() {
  const [surveyHistoryData, setSurveyHistoryData] = useState(surveyData);

  const onAllCheck = (e) => {
    setAllCheck(e.target.checked);

    if (e.target.checked) {
      setCheckItemId(surveyHistoryData.map((data) => data.id));
    } else {
      setCheckItemId([]);
    }
  };
  return (
    <div className="overflow-x-auto relative">
      <table className="table">
        {/* head */}
        <thead className="text-lg font-bold text-gray-600">
          <tr>
            <th>Survey Name</th>
            <th>Survey Company</th>
            <th>Survey StartDate</th>
            <th>Your Submission</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {surveyHistoryData &&
            surveyHistoryData.map((data, idx) => (
              <tr key={idx}>
                <td>
                  <h3>{data?.SurveyName}</h3>
                </td>
                <td>
                  <h3>{data?.SurveyCompany}</h3>
                </td>
                <td>{data?.SurveyStartDate}</td>
                <td>
                  {data?.YourSubmission === "Completed" ? (
                    <button className="btn btn-xs bg-blue-400 text-white hover:bg-blue-500">
                      {data?.YourSubmission}
                    </button>
                  ) : (
                    <button className="btn btn-xs bg-rose-400 hover:bg-rose-500 text-white">
                      {data?.YourSubmission}
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantViewResponseTable;
