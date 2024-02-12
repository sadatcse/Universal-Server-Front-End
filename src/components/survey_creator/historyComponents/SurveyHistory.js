"use client"
import { useState } from 'react';
import HistoryHeader from './elements/HistoryHeader';
import HistoryTable from './elements/HistoryTable';

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



function SurveyHistory() {
    const [checkedItemId, setCheckItemId] = useState([]);
    const [surveyHistoryData, setSurveyHistoryData] = useState(surveyData)
    console.log(checkedItemId)
    return (
        <>
         <HistoryHeader setSurveyHistoryData={setSurveyHistoryData} surveyData={surveyData} />
        <HistoryTable checkedItemId={checkedItemId} setCheckItemId={setCheckItemId} surveyHistoryData={surveyHistoryData} setSurveyHistoryData={setSurveyHistoryData} />
        </>
    )
}

export default SurveyHistory