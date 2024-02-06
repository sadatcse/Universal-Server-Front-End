import ManageSearchBar from '@/components/manage_survey/components/ManageSearchBar';
import { SiSharex } from "react-icons/si";

function ShareSurveyHeader() {
    return (
        <div className='pb-4 border-b-2 border-rose-400 relative flex justify-between items-center'>

            <h2 className="text-3xl font-bold  flex items-center gap-3">
                <button className="text-neutral-800 btn text-3xl flex justify-center items-center" ><SiSharex /></button>
                Share Survey</h2>

            <ManageSearchBar />

        </div>
    )
}

export default ShareSurveyHeader