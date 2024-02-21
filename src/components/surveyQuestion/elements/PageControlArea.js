
export default function PageControlArea({incrementAndDecrement, currentQuestion, questions, setIsViewResult, isNext}) {
    return (
        <div className="flex items-center justify-between py-1 bg-blue-200 absolute left-1/2 bottom-0 w-full md:w-4/6 rounded-full px-8 -translate-x-1/2 " >
            <button className={`btn btn-neutral ${currentQuestion > 0 ? "" : "btn-disabled"}`} onClick={() => incrementAndDecrement('decrement')} >Prev</button>
            <p className="text-3xl font-bold">{currentQuestion + 1}/{questions.length}</p>
            {
                currentQuestion === questions.length - 1 ?

                    <button className={`btn btn-neutral ${isNext ? "" : "btn-disabled"}`} onClick={() => setIsViewResult(true)} >View Result</button> :
                    <button className={`btn btn-neutral ${isNext ? "" : "btn-disabled"}`} onClick={() => incrementAndDecrement('increment')} >Next</button>
            }

        </div>
    )
}
