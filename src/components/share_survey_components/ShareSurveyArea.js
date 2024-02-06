"use client"
import { useState } from 'react'
import ShareSurveyCard from './elements/ShareSurveyCard'
import ShareSurveyModal from './elements/ShareSurveyModal'

function ShareSurveyArea() {
    const [openShareModal, setOpenShareModal] = useState(false)
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 mt-4 gap-6">
        <ShareSurveyCard setOpenShareModal={setOpenShareModal} />
        <ShareSurveyCard setOpenShareModal={setOpenShareModal} />
        <ShareSurveyCard setOpenShareModal={setOpenShareModal} />
    </div>
    {
        openShareModal ?
    <ShareSurveyModal setOpenShareModal={setOpenShareModal} /> : null
    }
    </>
  )
}

export default ShareSurveyArea