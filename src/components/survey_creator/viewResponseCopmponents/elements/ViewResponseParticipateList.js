'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ParticipantModal from "./ParticipantModal";

// using fake data now
const userData = [ 
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 1,
    "name": "John Doe",
    "surveyName": "Customer Satisfaction Survey",
    "date": "2023-12-31",
    "email": "johndoe@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  },
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 2,
    "name": "Jane Smith",
    "surveyName": "Employee Engagement Survey",
    "date": "2023-12-31",
    "email": "johesmith@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  },
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 3,
    "name": "Sam Wilson",
    "surveyName": "Product Feedback Survey",
    "date": "2023-12-31",
    "email": "samwilson@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  },
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 4,
    "name": "Sara Jones",
    "surveyName": "Customer Satisfaction Survey",
    "date": "2023-12-31",
    "email": "sarajones@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  },
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 5,
    "name": "Alex Rodriguez",
    "surveyName": "Employee Engagement Survey",
    "date": "2023-12-31",
    "email": "alexroot@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  },
  {
    "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
    "id": 6,
    "name": "Emily White",
    "surveyName": "Product Feedback Survey",
    "date": "2023-12-31",
    "email": "emilywhtie@yahoo.com",
    "responseSurvey": [
      {
        "title": "Employee Feedback Survey",
        "description": "Please provide your feedback on various aspects of your experience at our company.",
        "questions": [
            {
                "question": "Which of the following benefits do you value the most? (Select all that apply)",
                "answer": "Health insurance",
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
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "1": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": true,
                        "Very Dissatisfied": false,
                    },
                    "2": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": true,
                        "Dissatisfied": false,
                        "Very Dissatisfied": false,
                    },
                    "3": {
                        "Very Satisfied": false,
                        "Satisfied": false,
                        "Neutral": false,
                        "Dissatisfied": false,
                        "Very Dissatisfied": true,
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
                "answer": "8",
                "id": 3,
                "questionType": "linear_scale",
                "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                "question": "Where Your office?",
                "answer": "Angola",
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
                "answer": [{ "id": 1, "title": "Compensation" },
                { "id": 4, "title": "Company culture" },
                { "id": 2, "title": "Work-life balance" },
                { "id": 3, "title": "Career opportunities" },
                { "id": 5, "title": "Job security" }
              ],
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
                "answer": "focus your quality",
                "id": 6,
                "questionType": "sort_text"
            },
            {
                "question": "What are your career goals for the next five years?",
                "answer": "I want to become a web developer",
                "id": 7,
                "questionType": "long_text"
            }
    
        ]
    }
    ]
  }
]

export default function ViewResponseParticipateList() {
  const [currentResponseResult, setCurrentResponseResult] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  return (
    <>
    <section className='md:w-[95%] mx-auto'>
      
      {/* main div */}
      <div className='mt-4 p-4 rounded-lg border border-gray-100 shadow-sm'>
        {/* search div */}
        <div className='flex p-2 rounded-lg shadow-sm border gap-2'>
          <button className='text-2xl ml-1'><CiSearch /></button>
          <input placeholder='Search by name, survey name or email' className='text-sm outline-none w-full'></input>
        </div> 
        {userData.length == 0 ?
          <>
            {/* loading section */}
            <section>
              <div className="skeleton h-14 w-full mt-9 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
            </section>
          </>
          : <>
            {/* customised table */}
            <section className='mt-4  overflow-auto'>
              <div className="overflow-x-auto rounded-l-lg">
                <table className="table ">
                  {/* head */}
                  <thead className=''>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Survey Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userData.map(user =>
                        <tr key={user._id}>
                          <td><img src={user.image} className='w-10 rounded-lg' alt="" /></td>
                          <td>{user.name}</td>
                          <td>{user.surveyName}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile == null ? 'None' : user.mobile}</td>
                          <td>{user.date}</td>
                          <td>
                          <button className="btn btn-ghost btn-xs bg-blue-300" onClick={()=>{ setCurrentResponseResult(user?.responseSurvey); setIsOpenModal(true)}}>Details</button>
                          </td>
                        </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </section>
          </>
        }
      </div>
    </section>
        {
          isOpenModal ?
          <ParticipantModal responseResult={currentResponseResult} setIsOpenModal={setIsOpenModal} /> : null
        }
    </>
  )
}