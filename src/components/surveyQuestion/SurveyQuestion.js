"use client"
import { useEffect, useState } from "react";
import PageControlArea from "./elements/PageControlArea";
import QuestionArea from "./elements/QuestionArea";
import SurveyForm from "./elements/SurveyForm";
import SurveyResult from "./elements/SurveyResult";

const surveyData = {
    "title": "Employee Feedback Survey",
    "description": "Please provide your feedback on various aspects of your experience at our company.",
    "questions": [
        {
            "question": "Which of the following benefits do you value the most? (Select all that apply)",
            "answer": "",
            "id": 1,
            "questionType": "multiple_choice",
            "options": ["Health insurance", "Paid time off", "Retirement plans", "Flexible work hours"]
        },
        {
            "question": "Please rate your satisfaction with the following aspects of our service:",
            "answer": {
                "0": {
                    "Very Satisfied": false,
                    "Satisfied": false,
                    "Neutral": false,
                    "Dissatisfied": false,
                    "Very Dissatisfied": false,
                },
                "1": {
                    "Very Satisfied": false,
                    "Satisfied": false,
                    "Neutral": false,
                    "Dissatisfied": false,
                    "Very Dissatisfied": false,
                },
                "2": {
                    "Very Satisfied": false,
                    "Satisfied": false,
                    "Neutral": false,
                    "Dissatisfied": false,
                    "Very Dissatisfied": false,
                },
                "3": {
                    "Very Satisfied": false,
                    "Satisfied": false,
                    "Neutral": false,
                    "Dissatisfied": false,
                    "Very Dissatisfied": false,
                },
            },
            "id": 2,
            "questionType": "checkbox_grid",
            "options": {
                "columnLabels": ["Customer Support", "Product Quality", "Delivery Time", "Website Usability"],
                "rowLabels": ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
            }
        },
        {
            "question": "On a scale of 1 to 10, how likely are you to recommend our company to a friend or colleague?",
            "answer": "",
            "id": 3,
            "questionType": "linear_scale",
            "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        {
            "question": "Where Your office?",
            "answer": "",
            "id": 4,
            "questionType": "dropdown",
            "options": [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
                "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
                "Fiji", "Finland", "France",
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
                "Haiti", "Honduras", "Hungary",
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
                "Jamaica", "Japan", "Jordan",
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
                "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
                "Oman",
                "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                "Qatar",
                "Romania", "Russia", "Rwanda",
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
                "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
                "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
                "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
                "Yemen",
                "Zambia", "Zimbabwe"
            ]
        },
        {
            "question": "Please rank the following aspects of your job from most important to least important:",
            "answer": "",
            "id": 5,
            "questionType": "ranking",
            "options": [{ "id": 1, "title": "Compensation" },
            { "id": 2, "title": "Work-life balance" },
            { "id": 3, "title": "Career growth opportunities" },
            { "id": 4, "title": "Company culture" },
            { "id": 5, "title": "Job security" }]
        },
        {
            "question": "What improvements would you suggest to make our workplace better?",
            "answer": "",
            "id": 6,
            "questionType": "sort_text"
        },
        {
            "question": "What are your career goals for the next five years?",
            "answer": "",
            "id": 7,
            "questionType": "long_text"
        }

    ]
}

export default function SurveyQuestion() {
    const [userData, setUserData] = useState({});
    const [questions, setQuestions] = useState(surveyData.questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isNext, setIsNext] = useState(false);
    const [isViewResult, setIsViewResult] = useState(false);

    const incrementAndDecrement = (action) => {
        if (action === "increment") {
            setCurrentQuestion((prevValue) => {
                if (prevValue < questions.length - 1) {
                    return prevValue + 1
                } else {
                    return prevValue
                }
            })
        } else if (action === "decrement") {
            setCurrentQuestion((prevValue) => {
                if (prevValue > 0) {
                    return prevValue - 1
                } else {
                    return prevValue
                }
            })
        }
    }

    useEffect(() => {
        if (questions[currentQuestion].questionType === "checkbox_grid") {

            const isTrue = Object.keys(questions[currentQuestion].answer).some(key => Object.values(questions[currentQuestion].answer[key]).includes(true));

            setIsNext(isTrue)
        } else if (
            !(questions[currentQuestion].questionType === "ranking") ||

            !(questions[currentQuestion].questionType === "checkbox_grid")
        ) {
            if (questions[currentQuestion].answer === "") {

                setIsNext(false)
            } else {
                setIsNext(true)

            }
        }



    }, [currentQuestion, questions])

    return (
        <section className=" relative z-[1]  dark:bg-transparent pb-16">
            <div className="w-full h-4/6 absolute top-0 left-0 z-[-1] bg-blue-200"  >
                <div className="w-full h-full  opacity-20" style={{ backgroundImage: "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')" }} ></div>
            </div>

            <h2 className='text-3xl md:text-6xl font-bold text-center pt-12 pb-4'>Survey Satisfaction</h2>
            <p className='text-gray-500 text-center text-xl md:text-2xl font-semibold mb-8'>Please provide your feedback on various aspects of your experience at our company.</p>
            <div className="container mx-auto bg-white py-6 rounded-xl relative pb-28 px-8">
                { 

                    isViewResult ?
                        <SurveyResult questions={questions} setQuestions={setQuestions} isViewResult={isViewResult} />
                        :
                        !userData?.email
                        ?
                        <SurveyForm setQuestions={setQuestions} setUserData={setUserData} />
                        :
                        <>

                        <progress className="progress progress-success w-full md:w-4/6 mx-auto block h-1 transition-all duration-500" value={((currentQuestion + 1) / questions.length) * 100} max="100"></progress>

                        <QuestionArea setQuestions={setQuestions} questions={questions} currentQuestion={currentQuestion} />

                        <PageControlArea incrementAndDecrement={incrementAndDecrement} currentQuestion={currentQuestion} questions={questions} setIsViewResult={setIsViewResult} 
                        isNext={isNext} />
                        </>

                }

            </div>
        </section >
    )
}

