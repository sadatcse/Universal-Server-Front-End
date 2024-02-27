import CheckboxGridInput from "./checkbox_grid_question/CheckboxGridInput";

export default function CheckBoxGridQuestion({ question, setQuestions , isViewResult}) {
    const onCheck = (key, label) => {

        setQuestions(prevValue => {
            const current_question = prevValue.findIndex(item => item.id === question.id);

            const copyArray = { ...question };

            copyArray.answer[key][label] = true;

            const updatedArray = prevValue.toSpliced(current_question, 1, copyArray)

            return updatedArray;
        })
    }
    return (
        <div className={isViewResult ? "pointer-events-none": ""}>
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            {question?.options?.rowLabels.map((name, idx) => (
                                <th key={idx} className="text-neutral">
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {question?.options?.columnLabels.map((name, idx1) => (
                            <tr key={idx1}>
                                <th>
                                    {name}
                                </th>
                                {question.options.rowLabels.map((label, idx2) => (
                                    <td key={idx2}>
                                        <CheckboxGridInput idx1={idx1} label={label} isAnswer={question?.answer[idx1][label]} onCheck={onCheck} />
                                    </td>
                                ))}


                            </tr>
                        ))}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            {question?.options?.rowLabels.map((name, idx) => (
                                <th key={idx} className="text-neutral">
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}
