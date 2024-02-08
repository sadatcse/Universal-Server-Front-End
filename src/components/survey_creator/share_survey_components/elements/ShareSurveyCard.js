import { BsFillShareFill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
function ShareSurveyCard({setOpenShareModal}) {
  return (
    <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md bg-red-300 hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral relative overflow-hidden before:w-[90%] before:h-[90%] before:border-4 before:border-white before:rounded-md before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
        <div className="absolute top-0 -left-full w-full h-full bg-blue-300 flex justify-center items-center gap-3 text-neutral-800 text-3xl group-hover:left-0 transition-all duration-300 ">
        <button className="hover:text-white p-3 border border-white rounded-lg" onClick={()=> setOpenShareModal(true)}><BsFillShareFill /></button>
        <button className="hover:text-white  p-3 border border-white rounded-lg"><RiEditCircleFill /></button>
         </div>
            
            <h3 className="my-3 text-3xl font-semibold">Universal Survey</h3>
                <p><b>Q: </b> 15</p>
            <div >
            </div>
        </div>
  )
}

export default ShareSurveyCard