"use client"
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import InviteParticipantModalCard from './InviteParticipantModalCard';
import InviteParticipantModalSearch from "./InviteParticipantModalSearch";


const surveyData = [
    {
        "id": 1,
        "SurveyTitle": "Customer Satisfaction Survey",
        "SurveyDescription": "Gather feedback from customers about their experience with our products and services.",
        "SurveyEndDate": "2023-12-31",
        "SurveyParticipants": 1500,
        "SurveyResponseRate": "85%",
        "Questions": [
            {
                "Question": "How satisfied are you with our products?",
                "Options": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"]
            },
            {
                "Question": "How would you rate our customer service?",
                "Options": ["Excellent", "Good", "Fair", "Poor"]
            },
            {
                "Question": "Would you recommend our products to others?",
                "Options": ["Definitely yes", "Probably yes", "Not sure", "Probably not"]
            },
            {
                "Question": "How often do you use our products?",
                "Options": ["Daily", "Weekly", "Monthly", "Rarely"]
            },
            {
                "Question": "What features do you find most useful?",
                "Options": ["Feature A", "Feature B", "Feature C", "Feature D"]
            },
            {
                "Question": "How likely are you to purchase from us again?",
                "Options": ["Very likely", "Likely", "Neutral", "Unlikely"]
            }
        ]
    },
    {
        "id": 2,
        "SurveyTitle": "Employee Engagement Survey",
        "SurveyDescription": "Measure employee satisfaction and identify areas for improvement in the workplace.",
        "SurveyEndDate": "2024-01-15",
        "SurveyParticipants": 500,
        "SurveyResponseRate": "70%",
        "Questions": [
            {
                "Question": "Do you feel valued in the workplace?",
                "Options": ["Strongly agree", "Agree", "Disagree", "Strongly disagree"]
            },
            {
                "Question": "Do you have clear expectations for your role?",
                "Options": ["Yes, very clear", "Somewhat clear", "Not very clear", "Not clear at all"]
            },
            {
                "Question": "Do you receive constructive feedback from your manager?",
                "Options": ["Regularly", "Sometimes", "Rarely", "Never"]
            },
            {
                "Question": "Do you feel recognized for your achievements?",
                "Options": ["Yes, always", "Sometimes", "Rarely", "Never"]
            },
            {
                "Question": "Do you have opportunities for professional development?",
                "Options": ["Yes, many opportunities", "Some opportunities", "Few opportunities", "No opportunities"]
            },
            {
                "Question": "Do you feel motivated to perform your best?",
                "Options": ["Very motivated", "Motivated", "Neutral", "Demotivated"]
            }
        ]
    },
    {
        "id": 3,
        "SurveyTitle": "Product Feedback Survey",
        "SurveyDescription": "Collect feedback from users about the latest product features and enhancements.",
        "SurveyEndDate": "2024-02-05",
        "SurveyParticipants": 1000,
        "SurveyResponseRate": "90%",
        "Questions": [
            {
                "Question": "Which product feature do you like the most?",
                "Options": ["Feature X", "Feature Y", "Feature Z", "Other"]
            },
            {
                "Question": "What improvements would you like to see in the next release?",
                "Options": ["More customization options", "Better performance", "New features", "Bug fixes"]
            },
            {
                "Question": "How satisfied are you with the user interface?",
                "Options": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"]
            },
            {
                "Question": "How likely are you to recommend our product to others?",
                "Options": ["Very likely", "Likely", "Neutral", "Unlikely"]
            },
            {
                "Question": "Do you find the product easy to use?",
                "Options": ["Very easy", "Easy", "Somewhat easy", "Difficult"]
            },
            {
                "Question": "What additional features would you like to see?",
                "Options": ["Feature A", "Feature B", "Feature C", "Feature D"]
            }
        ]
    },
    {
        "id": 4,
        "SurveyTitle": "Website Usability Survey",
        "SurveyDescription": "Evaluate the ease of use and navigation of our website.",
        "SurveyEndDate": "2024-03-20",
        "SurveyParticipants": 800,
        "SurveyResponseRate": "75%",
        "Questions": [
            {
                "Question": "How easy is it to find what you're looking for on our website?",
                "Options": ["Very easy", "Easy", "Somewhat easy", "Difficult"]
            },
            {
                "Question": "Are you satisfied with the website's loading speed?",
                "Options": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"]
            },
            {
                "Question": "How would you rate the overall design of the website?",
                "Options": ["Excellent", "Good", "Fair", "Poor"]
            },
            {
                "Question": "Do you encounter any difficulties during checkout?",
                "Options": ["No difficulties", "Occasionally", "Frequently", "Always"]
            },
            {
                "Question": "What feature would you like to see improved on the website?",
                "Options": ["Feature A", "Feature B", "Feature C", "Feature D"]
            },
            {
                "Question": "How likely are you to return to our website in the future?",
                "Options": ["Very likely", "Likely", "Neutral", "Unlikely"]
            }
        ]
    },
    {
        "id": 5,
        "SurveyTitle": "Training Program Feedback Survey",
        "SurveyDescription": "Gather feedback from participants about our training programs and courses.",
        "SurveyEndDate": "2024-04-10",
        "SurveyParticipants": 300,
        "SurveyResponseRate": "80%",
        "Questions": [
            {
                "Question": "Was the training content relevant to your needs?",
                "Options": ["Very relevant", "Relevant", "Neutral", "Irrelevant"]
            },
            {
                "Question": "Did the training meet your expectations?",
                "Options": ["Exceeded expectations", "Met expectations", "Did not meet expectations", "Not applicable"]
            },
            {
                "Question": "How satisfied are you with the training delivery?",
                "Options": ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"]
            },
            {
                "Question": "Would you recommend this training to others?",
                "Options": ["Definitely yes", "Probably yes", "Not sure", "Probably not"]
            },
            {
                "Question": "What improvements would you suggest for future training sessions?",
                "Options": ["More interactive sessions", "Better materials", "More practice exercises", "Other"]
            },
            {
                "Question": "How likely are you to apply what you've learned in your work?",
                "Options": ["Very likely", "Likely", "Neutral", "Unlikely"]
            }
        ]
    }
  ]

export default function SelectSurveyModal({ setOpenModal, selectedItem, setSelectedItem }) {
    const [surveyItem , setSurveyItem ] = useState(surveyData);
    
    const [allCheck, setAllCheck] = useState(false)

    const onAllCheck = (e)=> {
        
        setAllCheck(e.target.checked)
        if(e.target.checked){
            setSelectedItem(surveyData.map(data => data));
            
        }else{
            setSelectedItem([]) 
        }
    }


    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[1000px] overflow-y-auto sm:rounded-2xl bg-white p-8">
                <div className="flex pb-3 border-b-2 border-blue-500 mb-3 items-center justify-between">
                    <h2 className="text-3xl text-neutral-800 flex items-center"> 

                    <input type="checkbox" className="checkbox checkbox-lg mr-4" onChange={onAllCheck} />

                     Choose Survey 

                    <span className='ml-3 text-2xl text-blue-500'>{selectedItem.length}</span>
                    </h2>
                    <div className='flex gap-3 items-center'>
                <InviteParticipantModalSearch  />
                <button className={`btn btn-md btn-neutral ${selectedItem.length > 0 ? "" : "btn-disabled"}`} onClick={()=> setOpenModal(false)}>Save</button>

                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-4 gap-6">
                {
          surveyItem && surveyItem.map((data, idx)=> (
        <InviteParticipantModalCard key={idx} data={data} selectedItem={selectedItem} setSelectedItem={setSelectedItem} allCheck={allCheck} surveyData={surveyData} />
            
          ))
        }

                </div>

            </div>
                    <button class="text-white text-4xl absolute top-6 right-10" onClick={() => {setSelectedItem(selectedItem); setOpenModal(false)}} ><IoClose /></button>
        </div>
    )
}
