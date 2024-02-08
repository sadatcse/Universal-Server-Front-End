import { FaStarOfLife } from 'react-icons/fa'

function SurveyCard() {
    return (
        <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral">
            <FaStarOfLife className='group-hover:rotate-180 transition-all duration-300 text-3xl' />
            <h3 className="my-3 text-3xl font-semibold">Universal Survey</h3>
                <p><b>Q: </b> 15</p>
            <div >
            </div>
        </div>
    )
}

export default SurveyCard