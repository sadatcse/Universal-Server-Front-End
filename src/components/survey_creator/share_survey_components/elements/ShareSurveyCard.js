import { BsFillShareFill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
function ShareSurveyCard({setOpenShareModal, data}) {
  return (
    <div className="flex flex-col group items-start text-left p-6 border-2 shadow-lg rounded-md hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral relative overflow-hidden border-stone-400">
        <div className="absolute top-0 right-0 w-20 h-full bg-stone-300 flex justify-start items-center flex-col pt-3 gap-3 text-neutral-800 text-lg transition-all duration-300 ">
        <button className="btn btn-outline" onClick={()=> setOpenShareModal(true)}><BsFillShareFill /></button>
        <button className="btn btn-outline"><RiEditCircleFill /></button>
         </div>
            
            <h3 className="my-3 text-xl font-semibold pr-16">{data.title}</h3>
            <div >
            </div>
        </div>
  )
}

export default ShareSurveyCard