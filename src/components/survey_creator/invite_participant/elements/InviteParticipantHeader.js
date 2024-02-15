import { FaUsers } from "react-icons/fa";
export default function InviteParticipantHeader({ setOpenModal, setOpenSelectedItemModal }) {
  return (
    <div className='pb-4 border-b-2 border-rose-400 relative flex justify-between items-center'>

      <h2 className="text-3xl font-bold  flex items-center gap-3">
        <button className="bg-red-300 text-neutral-800 btn text-3xl flex justify-center items-center" ><FaUsers /></button>
        View Participant</h2>

      <div className="flex gap-3 items-center">
        <button className="btn btn-md btn-neutral" onClick={() => setOpenModal(true)} >Select Survey</button>

        <button className="btn btn-md btn-info" onClick={() => setOpenSelectedItemModal(true)} >View Selected Survey</button>

      </div>

    </div>
  )
}
