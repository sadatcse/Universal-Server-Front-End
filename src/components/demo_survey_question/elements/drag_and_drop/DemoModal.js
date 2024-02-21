import { IoClose } from 'react-icons/io5';
import DemoSurveyQuestionModal from '../../DemoSurveyQuestionModal';

export default function DemoModal({ surveyQuestions, setSurveyQuestions, setOpenDemoModal}) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white pt-12 p-8 transition-all duration-500 relative`} >

               <DemoSurveyQuestionModal surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions} />




                <div className="w-full">
                            <button className="text-neutral text-4xl absolute top-3 left-6" onClick={() => setOpenDemoModal(false)}><IoClose /></button>
                    
                </div>
            </div>
        </div>
  )
}
