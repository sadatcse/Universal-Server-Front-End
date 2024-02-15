"use client"
import { useState } from "react"
import InviteParticipantHeader from "./elements/InviteParticipantHeader"
import InviteParticipantTable from "./elements/InviteParticipantTable"
import SelectSurveyModal from "./elements/SelectSurveyModal"


function InviteParticipant() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <InviteParticipantHeader setOpenModal={setOpenModal} />
            <InviteParticipantTable />
            {
                openModal ?
                    <SelectSurveyModal setOpenModal={setOpenModal} /> : null
            }
        </>
    )
}

export default InviteParticipant