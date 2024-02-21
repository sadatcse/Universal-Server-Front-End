

// const question = {
//     "question": "Please rate your satisfaction with the following aspects of our service:",
//     "questionType": "Checkbox Grid Questions",
//     "options": {
//         "columnLabels": ["Customer Support", "Product Quality", "Delivery Time", "Website Usability"],

//         "rowLabels": ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
//     }
// }

export default function DemoCheckBoxGridQuestion({question}) {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            {question.options.rowLabels.map((name, idx) => (
                                <th key={idx} className="text-neutral">
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {question.options.columnLabels.map((name, idx) => (
                            <tr key={idx}>
                                <th>
                                    {name}
                                </th>
                                {question.options.rowLabels.map((name, idx) => (
                                    <td key={idx}>
                                        <label >
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td>
                                ))}


                            </tr>
                        ))}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            {question.options.rowLabels.map((name, idx) => (
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
