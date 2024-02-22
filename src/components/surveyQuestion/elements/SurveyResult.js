import CheckBoxGridQuestion from './CheckBoxGridQuestion'
import DropDownQuestion from './DropDownQuestion'
import LinearScaleQuestion from './LinearScaleQuestion'
import LongTextQuestion from './LongTextQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import RankingScaleQuestion from './RankingScaleQuestion'
import ShortTextQuestion from './ShortTextQuestion'

export default function SurveyResult({ setQuestions, isViewResult, questions }) {
    return (
        <>
        <h2 className='text-4xl font-bold text-center mb-8 w-full border-b-2'>Your  Answers</h2>
            {
                questions?.map((qn, idx) => (
                        <div key={idx}>

                        {
                            qn?.questionType === "multiple_choice" &&
                                <MultipleChoiceQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult}  />
                        }
                            {
                    qn?.questionType === "checkbox_grid" &&
                    <CheckBoxGridQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult} />
                }
                {
                    qn?.questionType === "dropdown" &&
                    <DropDownQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult} />

                }
                {
                    qn?.questionType === "linear_scale" &&
                    <LinearScaleQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult} />
                }
                {
                    qn?.questionType === "ranking" &&
                    <RankingScaleQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult} />
                }
                {
                    qn?.questionType === "sort_text" &&
                    <ShortTextQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult} />
                }
                {
                    qn?.questionType === "long_text" &&
                    <LongTextQuestion setQuestions={setQuestions} question={qn} isViewResult={isViewResult}  />
                }
            </div>))
            }
        </>
    )
}
