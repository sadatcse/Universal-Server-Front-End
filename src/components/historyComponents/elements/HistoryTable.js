"use client"
import { useState } from "react";


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

    const onAllCheck = (e)=> {
        
        console.log(checkedItemId)
        if(e.target.checked){
            setCheckItemId(()=> surveyData.map(data => data.id));
            
        }else{
            setCheckItemId([]) 
        }
    }
    const onSingleCheck = (e, id)=> {
        
        setAllCheck(e.target.checked)
        if(e.target.checked){
            setCheckItemId([...checkedItemId, id]);
            
        }else{
            setCheckItemId(()=> checkedItemId.filter(data=> data.id)) 
        }
    }
    
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" onChange={onAllCheck} />
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
                    {surveyData && surveyData.map((data, idx) => (

                        <tr key={idx}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" defaultChecked={checkedItemId.includes(data?.id)} onChange={(e)=> onSingleCheck(e, data?.id)} />
                                </label>
                            </th>
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
        </div>
    )
}

export default HistoryTable