"use client"
import DemoModal from "@/components/demo_survey_question/elements/drag_and_drop/DemoModal";
import { useState } from "react";
import ManageHeader from "./components/ManageHeader";
import SurveyCard from "./components/SurveyCard";

const surveyData = [
    {
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
                        "Very Dissatisfied": false
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false
                    }
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
                "options": [
                    { "id": 1, "title": "Compensation" },
                    { "id": 2, "title": "Work-life balance" },
                    { "id": 3, "title": "Career growth opportunities" },
                    { "id": 4, "title": "Company culture" },
                    { "id": 5, "title": "Job security" }
                ]
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
    },
    {
        "title": "Customer Satisfaction Survey",
        "description": "Please take a moment to share your feedback about our products and services.",
        "questions": [
            {
                "question": "How satisfied are you with the quality of our products?",
                "answer": "",
                "id": 1,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "What is your primary reason for purchasing our products?",
                "answer": "",
                "id": 2,
                "questionType": "multiple_choice",
                "options": ["Quality", "Price", "Brand reputation", "Customer service"]
            },
            {
                "question": "How likely are you to recommend our company to others?",
                "answer": "",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "Which aspect of our service needs the most improvement?",
                "answer": "",
                "id": 4,
                "questionType": "dropdown",
                "options": ["Shipping speed", "Communication", "Product variety", "Return policy"]
            },
            {
                "question": "Please share any additional comments or suggestions.",
                "answer": "",
                "id": 5,
                "questionType": "long_text"
            }
        ]
    },
    {
        "title": "Website Feedback Survey",
        "description": "Help us improve your online experience by providing feedback on our website.",
        "questions": [
            {
                "question": "How easy was it to find the information you were looking for on our website?",
                "answer": "",
                "id": 1,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "Which section of our website do you visit most frequently?",
                "answer": "",
                "id": 2,
                "questionType": "multiple_choice",
                "options": ["Homepage", "Products", "Services", "Contact Us", "About Us"]
            },
            {
                "question": "Are you satisfied with the loading speed of our website?",
                "answer": "",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "How likely are you to recommend our website to others?",
                "answer": "",
                "id": 4,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "What features or improvements would you like to see on our website?",
                "answer": "",
                "id": 5,
                "questionType": "long_text"
            }
        ]
    },
    {
        "title": "Training Program Feedback Survey",
        "description": "Please provide your feedback on our recent training program.",
        "questions": [
            {
                "question": "How satisfied were you with the content covered in the training sessions?",
                "answer": "",
                "id": 1,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "Did the training program meet your expectations?",
                "answer": "",
                "id": 2,
                "questionType": "multiple_choice",
                "options": ["Yes", "No", "Partially"]
            },
            {
                "question": "How likely are you to apply the knowledge gained from the training in your work?",
                "answer": "",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5"]
            },
            {
                "question": "What additional topics would you like to see covered in future training sessions?",
                "answer": "",
                "id": 4,
                "questionType": "long_text"
            }
        ]
    }
]


function ManageSurvey() {
    const [manageSurveyData, setManageSurveyData] = useState(surveyData);
    const [currentSurvey, setCurrentSurvey] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <>
            <ManageHeader surveyData={surveyData} setManageSurveyData={setManageSurveyData} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
                {
                    manageSurveyData && manageSurveyData.map((survey, idx) => (

                        <SurveyCard survey={survey} key={idx} setCurrentSurvey={setCurrentSurvey} setIsOpenModal={setIsOpenModal} />
                    ))
                }

            </div>

            {
                isOpenModal ?
                <DemoModal
                         surveyQuestions={currentSurvey} setSurveyQuestions={setCurrentSurvey} setOpenDemoModal={setIsOpenModal}
                    />
                    : null
            }
        </>
    )
}

export default ManageSurvey