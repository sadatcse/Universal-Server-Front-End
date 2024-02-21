
const question = {
    "question": "What improvements would you suggest to make our workplace better?",
    "questionType": "Text Entry Questions"
  }
function DemoShortTextQuestion() {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
            <div className="relative px-12 w-full flex justify-center items-center">
                    <input type="text" placeholder="Type Your Answer" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full input-success " />
            </div>

        </div>
    )
}

export default DemoShortTextQuestion