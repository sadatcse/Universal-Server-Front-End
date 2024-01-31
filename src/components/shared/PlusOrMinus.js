import { FaMinus, FaPlus } from 'react-icons/fa'

function PlusOrMinus({ isTrue }) {
    return (
        <span className='absolute top-[18px] -left-3 cursor-pointer -translate-y-[50%] pointer-events-none' >
            <FaPlus className={`text-xl  transition-all duration-500 absolute top-1/2 right-0 -translate-y-[50%] ${isTrue ? "scale-0" : "scale-100"}`} />

            <FaMinus className={`text-xl  transition-all duration-500 absolute top-1/2 right-0 -translate-y-[50%] ${!isTrue ? "scale-0" : "scale-100"}`} />
        </span>
    )
}

export default PlusOrMinus