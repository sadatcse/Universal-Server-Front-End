"use client"
import { useState } from "react";
import ViewResponseSearchBar from "./ViewResponseSearchBar";

const surveyData = [
    {
        id: 1,
        "title": "Customer Satisfaction Survey",
        "description": "Gather feedback from customers about their experience with our products and services.",
        "date": "2023-12-31",
        "participants": 1500,
        "responseRate": "85%"
    },
    {
        id: 2,
        "title": "Employee Engagement Survey",
        "description": "Measure employee satisfaction and identify areas for improvement in the workplace.",
        "date": "2024-01-15",
        "participants": 500,
        "responseRate": "70%"
    },
    {
        id: 3,
        "title": "Product Feedback Survey",
        "description": "Collect feedback from users about the latest product features and enhancements.",
        "date": "2024-02-05",
        "participants": 1000,
        "responseRate": "90%"
    },
    {
        id: 4,
        "title": "Customer Satisfaction Survey",
        "description": "Gather feedback from customers about their experience with our products and services.",
        "date": "2023-12-31",
        "participants": 1500,
        "responseRate": "85%"
    },
    {
        id: 5,
        "title": "Employee Engagement Survey",
        "description": "Measure employee satisfaction and identify areas for improvement in the workplace.",
        "date": "2024-01-15",
        "participants": 500,
        "responseRate": "70%"
    },
    {
        id: 6,
        "title": "Product Feedback Survey",
        "description": "Collect feedback from users about the latest product features and enhancements.",
        "date": "2024-02-05",
        "participants": 1000,
        "responseRate": "90%"
    },
    {
        id: 7,
        "title": "Website Usability Survey",
        "description": "Evaluate the ease of use and navigation of our website.",
        "date": "2024-03-20",
        "participants": 800,
        "responseRate": "75%"
    }
]

function ViewResponseTable({setIsOpenModal}) {
    const [surveyHistoryData, setSurveyHistoryData] = useState(surveyData)

    const onAllCheck = (e) => {

        setAllCheck(e.target.checked)
        console.log(e.target.checked)
        if (e.target.checked) {
            setCheckItemId(surveyHistoryData.map(data => data.id));

        } else {
            setCheckItemId([])
        }
    }



    return (
        <div className="overflow-x-auto relative">
        <ViewResponseSearchBar />
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Participants</th>
                        <th>Response Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {surveyHistoryData && surveyHistoryData.map((data, idx) => (

                        <tr key={idx}>
                            <td>
                                <h3>{data?.title}</h3>
                            </td>
                            <td style={{ textOverflow: "ellipsis" }} className="max-w-[80px] whitespace-nowrap overflow-hidden"
                                title={data?.description} >
                                {data?.description}
                            </td>
                            <td>{data?.date}</td>
                            <td>{data?.participants}</td>
                            <td>{data?.responseRate}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs bg-blue-300" onClick={()=> setIsOpenModal(true)}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>

        </div>
    )
}

export default ViewResponseTable