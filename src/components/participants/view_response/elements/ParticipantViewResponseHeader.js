import { FaHistory } from 'react-icons/fa'
import ParticipantViewResponseSearch from './ParticipantViewResponseSearch'

function ParticipantViewResponseHeader() {
  return (
    <div className='pb-4 border-b border-neutral-500 relative flex justify-between items-center'>

            <h2 className="text-3xl font-bold  flex items-center gap-3">
                <button className="bg-blue-400 text-white btn text-3xl flex justify-center items-center" ><FaHistory /></button>
                View Response</h2>

            <ParticipantViewResponseSearch />

        </div>
  )
}

export default ParticipantViewResponseHeader