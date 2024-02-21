import React from 'react'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import CheckBoxGridQuestion from './CheckBoxGridQuestion'
import DropDownQuestion from './DropDownQuestion'
import LinearScaleQuestion from './LinearScaleQuestion'
import RankingScaleQuestion from './RankingScaleQuestion'
import ShortTextQuestion from './ShortTextQuestion'
import LongTextQuestion from './LongTextQuestion'

export default function QuestionArea({setQuestions ,questions ,currentQuestion}) {
    return (
        <>
            {
                questions[currentQuestion]?.questionType === "multiple_choice" &&
                <MultipleChoiceQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }
            {
                questions[currentQuestion]?.questionType === "checkbox_grid" &&
                <CheckBoxGridQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }
            {
                questions[currentQuestion]?.questionType === "dropdown" &&
                <DropDownQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />

            }
            {
                questions[currentQuestion]?.questionType === "linear_scale" &&
                <LinearScaleQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }
            {
                questions[currentQuestion]?.questionType === "ranking" &&
                <RankingScaleQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }
            {
                questions[currentQuestion]?.questionType === "sort_text" &&
                <ShortTextQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }
            {
                questions[currentQuestion]?.questionType === "long_text" &&
                <LongTextQuestion setQuestions={setQuestions} question={questions[currentQuestion]} />
            }

        </>
    )
}
