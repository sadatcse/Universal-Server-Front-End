import { FaStarOfLife } from 'react-icons/fa'

function SurveyCard({data, setModalData}) {
    return (
        <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral cursor-pointer" onClick={()=> {setModalData(data)}}>
            <FaStarOfLife className='group-hover:rotate-180 transition-all duration-300 text-3xl' />
            <h3 className="my-3 text-2xl font-semibold">{data?.SurveyTitle}</h3>
                <p><b>Q: </b> {data?.Questions.length}</p>
            <div >
            </div>
        </div>
    )
}

export default SurveyCard