
  
export default function MultipleChoiceQuestion({question , setQuestions, isViewResult}) {

  const onAnswer = ( value)=> {
      setQuestions(prevValue => {
        const current_question = prevValue.findIndex(item => item.id === question.id);

        const copyArray = {...question};

        copyArray.answer = value;

        const updatedArray = prevValue.toSpliced(current_question, 1, copyArray)

        console.log(updatedArray)

        return updatedArray;
      })
  }

  
  return (
    <div className={isViewResult ? "pointer-events-none": ""}>
        <h2 className='text-3xl font-bold text-center pt-8'>{question.question}</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-10 lg:justify-between gap-4 gap-x-10">
        {question.options.map((qn, ind)=> (

            <li className={`btn ${qn === question?.answer ? "btn-neutral": "btn-outline"} `} key={ind} onClick={()=> onAnswer(qn)}>{qn}</li>
        ))}
        </ul>
    </div>
  )
}
