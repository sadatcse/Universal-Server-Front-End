"use client";
import { useEffect, useState } from "react";
import DetailModal from "./DetailModal";
import ViewResponseSearchBar from "./ViewResponseSearchBar";
import useAxiosPublic from "@/Hook/useAxiosPublic";

const surveyData = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    description:
      "Gather feedback from customers about their experience with our products and services.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 2,
    title: "Employee Engagement Survey",
    description:
      "Measure employee satisfaction and identify areas for improvement in the workplace.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 3,
    title: "Product Feedback Survey",
    description:
      "Collect feedback from users about the latest product features and enhancements.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 4,
    title: "Customer Satisfaction Survey",
    description:
      "Gather feedback from customers about their experience with our products and services.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 5,
    title: "Employee Engagement Survey",
    description:
      "Measure employee satisfaction and identify areas for improvement in the workplace.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 6,
    title: "Product Feedback Survey",
    description:
      "Collect feedback from users about the latest product features and enhancements.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
  {
    id: 7,
    title: "Website Usability Survey",
    description: "Evaluate the ease of use and navigation of our website.",
    info: {
      surveyID: "ABC123",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      participants: 1500,
      responseRate: "85%",
      creator: "Marketing Team",
      category: "Product Feedback",
      language: "English",
      duration: "1 month",
      platform: "Online Form",
    },
  },
];

function ViewResponseTable() {
  const [surveyResponseData, setSurveyResponseData] = useState(surveyData);
  const [currentResponseData, setCurrentResponseData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onAllCheck = (e) => {
    setAllCheck(e.target.checked);
    if (e.target.checked) {
      setCheckItemId(surveyHistoryData.map((data) => data.id));
    } else {
      setCheckItemId([]);
    }
  };

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/get_survey")
      .then((res) => {
        setSurveyResponseData(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic]);

  return (
    <>
      <div className="overflow-x-auto relative">
        <ViewResponseSearchBar />
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Creator</th>
              <th>Participants Count</th>
              <th>Date</th>
              <th>Platform</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {surveyResponseData.length > 0 &&
              surveyResponseData.map((data, idx) => (
                <tr key={idx}>
                  <td>
                    <h3>{data?.title}</h3>
                  </td>
                  <td
                    style={{ textOverflow: "ellipsis" }}
                    className="max-w-[80px] whitespace-nowrap overflow-hidden"
                    title={data?.description}
                  >
                    {data?.description}
                  </td>
                  <td>{data?.creator}</td>
                  <td className="text-center">
                    {data?.participantIds ? data?.participantIds.length : 0}
                  </td>
                  <td>{data?.createDate}</td>
                  <td>{data?.platform}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs bg-blue-300"
                      onClick={() => {
                        setIsOpenModal(true);
                        setCurrentResponseData(data);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isOpenModal ? (
        <DetailModal
          setIsOpenModal={setIsOpenModal}
          responseData={currentResponseData}
        />
      ) : null}
    </>
  );
}

export default ViewResponseTable;
