import { FaHistory } from 'react-icons/fa'
import ParticipantViewResponseSearch from './ParticipantViewResponseSearch'

function ParticipantViewResponseHeader() {
  return (
    <div className='my-4 mb-5  w-[97%] mx-auto relative flex justify-between items-center'>
      <div className='flex flex-col '>
        <h2 className="text-4xl font-semibold  flex items-center gap-3">
          View Response</h2>
        <p className='text-sm text-gray-500 mt-2 ml-1'>Responses from you surveys</p>
      </div>
      <ParticipantViewResponseSearch />

    </div>
  )
}

export default ParticipantViewResponseHeader