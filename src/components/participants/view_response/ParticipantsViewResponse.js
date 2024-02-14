"use client"
import ParticipantViewResponseHeader from "./elements/ParticipantViewResponseHeader";
import ParticipantViewResponseTable from "./elements/ParticipantViewResponseTable";


function ParticipantsViewResponse() {
    return (
        <>
            <div className="w-[97%] mx-auto">
                <ParticipantViewResponseHeader />
                <div className='border-b'></div>
                <ParticipantViewResponseTable />
            </div>
        </>
    )
}

export default ParticipantsViewResponse

