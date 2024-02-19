
const question = {
    "question": "Which of the following benefits do you value the most? (Select all that apply)",
    "questionType": "Multiple Choice Questions",
    "options": ["Health insurance", "Paid time off", "Retirement plans", "Flexible work hours"]
  }
  
export default function MultipleChoiceQuestion() {
  return (
    <div>
        <h2 className='text-3xl font-bold text-center pt-8'>{question.question}</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-10 lg:justify-between gap-4 gap-x-10">
        {question.options.map((qn, ind)=> (

            <li className="btn btn-outline" key={ind}>{qn}</li>
        ))}
        </ul>
    </div>
  )
}
