"use client"
import { useState } from 'react'
import HistoryTable from './elements/HistoryTable'




function SurveyHistory() {
    const [checkedItemId, setCheckItemId] = useState([])
    return (
        <>
            <HistoryTable checkedItemId={checkedItemId} setCheckItemId={setCheckItemId} />
        </>
    )
}

export default SurveyHistory