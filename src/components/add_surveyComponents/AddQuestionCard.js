import { FaPlus } from 'react-icons/fa'

function AddQuestionCard({setOpenAddQuestionModal}) {
  return (
    <div className="rounded-full shadow-xl border-2 flex justify-center items-center text-neutral-800 text-4xl bg-blue-100 border-blue-500 h-16 w-16 absolute bottom-3 right-5 cursor-pointer" onClick={()=> setOpenAddQuestionModal(true)}><FaPlus /></div>
  )
}

export default AddQuestionCard