
function QuestionTypeCard({type, setQuestionTypeName, setShowSurveyForm}) {
    return (
        <div className="rounded-lg border-2 text-neutral-800 text-4xl bg-blue-200 shadow-xl h-24 p-2 relative cursor-pointer" onClick={()=> {setQuestionTypeName(type) ; setShowSurveyForm(true)}}>
            <h3 className="text-base font-bold">{type}</h3>
        </div>
    )
}

export default QuestionTypeCard