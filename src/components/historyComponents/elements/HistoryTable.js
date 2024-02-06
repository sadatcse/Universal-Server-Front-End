"use client"
import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import HistoryCheck from "./HistoryCheck";

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

function HistoryTable({checkedItemId, setCheckItemId}) {
    const [allCheck, setAllCheck] = useState(false)
    const [surveyHistoryData, setSurveyHistoryData] = useState(surveyData)
    
    const deleteCheckedItem = ()=> {
        setSurveyHistoryData(surveyHistoryData.filter((data)=>  !checkedItemId.includes(data.id)))
        setCheckItemId([])
        setAllCheck(false);
    }
    const onAllCheck = (e)=> {
        
        setAllCheck(e.target.checked)
        console.log(e.target.checked)
        if(e.target.checked){
            setCheckItemId(surveyHistoryData.map(data => data.id));
            
        }else{
            setCheckItemId([]) 
        }
    }
    
    const deleteStyle = checkedItemId.length > 0 ? {width: "80%"} : {width: "0%"}
    
    return (
        <div className="overflow-x-auto relative">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" checked={allCheck} onChange={onAllCheck} />
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Participants</th>
                        <th>Response Rate</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {surveyHistoryData && surveyHistoryData.map((data, idx) => (

                        <tr key={idx}>
                            <td>
                                <HistoryCheck allCheck={allCheck} data={data} setCheckItemId={setCheckItemId} checkedItemId={checkedItemId} />
                            </td>
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
                                <button className="btn btn-ghost btn-xs bg-blue-300">Details</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs bg-red-300">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
            <div className="shadow-xl border-2 flex justify-center items-center text-neutral-800 text-4xl bg-red-300 border-red-500 h-16 overflow-hidden absolute bottom-0 right-0 cursor-pointer transition-all duration-300" style={deleteStyle} onClick={deleteCheckedItem}><RiDeleteBin2Fill /></div>
        </div>
    )
}

export default HistoryTable