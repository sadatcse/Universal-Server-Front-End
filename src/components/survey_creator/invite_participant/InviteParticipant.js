"use client"
import { useState } from "react"
import ChosenSurveyModal from "./elements/ChosenSurveyModal"
import InviteParticipantHeader from "./elements/InviteParticipantHeader"
import InviteParticipantTable from "./elements/InviteParticipantTable"
import SelectSurveyModal from "./elements/SelectSurveyModal"


function InviteParticipant() {
    const [openModal, setOpenModal] = useState(false)
    const [OpenSelectedItemModal, setOpenSelectedItemModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState([]);
    return (
        <>
            <InviteParticipantHeader setOpenModal={setOpenModal} setOpenSelectedItemModal={setOpenSelectedItemModal} />
            <InviteParticipantTable />
            {
                openModal ?
                    <SelectSurveyModal setOpenModal={setOpenModal} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : null
            }
            {
                OpenSelectedItemModal ?
                    <ChosenSurveyModal setOpenSelectedItemModal={setOpenSelectedItemModal} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : null
            }
        </>
    )
}

export default InviteParticipant