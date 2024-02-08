import { MdOutlineStreetview } from "react-icons/md";
import ViewResponseSearchBar from './ViewResponseSearchBar';
function ViewResponseHeader() {
    return (
        <div className='pb-4 border-b-2 border-rose-400 relative flex justify-between items-center'>

            <h2 className="text-3xl font-bold  flex items-center gap-3">
                <button className="bg-red-300 text-neutral-800 btn text-3xl flex justify-center items-center" ><MdOutlineStreetview /></button>
                View Response</h2>

            <ViewResponseSearchBar />

        </div>
    )
}

export default ViewResponseHeader