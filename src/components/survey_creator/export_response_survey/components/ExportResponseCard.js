import { FaFileExport } from 'react-icons/fa'

function ExportResponseCard({setOpenModal, data}) {
    return (
        <div className="flex flex-col group items-start text-left p-6 border-2 border-stone-400 shadow-lg rounded-md  hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral relative overflow-hidden pr-12">
        <div className="absolute top-0 right-0 w-10 h-full flex justify-start items-center gap-3 text-neutral-800 text-md transition-all duration-300 flex-col p-2">
        <button className="btn btn-outline btn-sm" onClick={()=> setOpenModal(true)}><FaFileExport /></button>
        
         </div>
            
         <h3 className="my-3 text-xl font-semibold">{data.SurveyTitle}</h3>
                <p><b>Q: </b> {data.Questions.length}</p>
            <div >
            </div>
        </div>
    )
}

export default ExportResponseCard