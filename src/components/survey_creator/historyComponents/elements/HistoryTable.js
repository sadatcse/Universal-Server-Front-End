"use client"
import { useState } from "react";
import HistoryCheck from "./HistoryCheck";



function HistoryTable({checkedItemId, setCheckItemId, surveyHistoryData, setSurveyHistoryData, deleteCheckedItem, allCheck, setAllCheck}) {
    
    
    
   
    const onAllCheck = (e)=> {
        
        setAllCheck(e.target.checked)
        if(e.target.checked){
            setCheckItemId(surveyHistoryData.map(data => data.id));
            
        }else{
            setCheckItemId([]) 
        }
    }

    const deleteItem = (id)=> {
        const filteredItem = surveyHistoryData.filter((item)=> item.id !== id)
        setSurveyHistoryData(filteredItem)
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
                                <button className="btn btn-ghost btn-xs bg-red-300" onClick={()=> deleteItem(data?.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
            
        </div>
    )
}

export default HistoryTable