import { FaHistory } from 'react-icons/fa'
import HistorySearchBar from './HistorySearchBar'

function HistoryHeader() {
    return (
        <div className='pb-4 border-b-2 border-rose-400 relative flex justify-between items-center'>

            <h2 className="text-3xl font-bold  flex items-center gap-3">
                <button className="bg-red-300 text-neutral-800 btn text-3xl flex justify-center items-center" ><FaHistory /></button>
                Survey History</h2>

            <HistorySearchBar />

        </div>
    )
}

export default HistoryHeader