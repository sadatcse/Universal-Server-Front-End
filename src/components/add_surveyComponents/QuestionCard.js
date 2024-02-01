import { IoCloseSharp } from 'react-icons/io5'

function QuestionCard({ item }) {
    return (
        <div className="rounded-lg border-2 text-neutral-800 text-4xl bg-amber-200 border-amber-500 h-24 p-2 relative">
            <h3 className="text-base font-bold capitalize">{item?.question}?</h3>
            <button className="p-1 absolute -top-3 -right-3 text-[10px] text-white bg-neutral-400 border rounded-full hover:bg-red-500 hover:text-white"><IoCloseSharp /></button>
        </div>
    )
}

export default QuestionCard