'use client'

import { useEffect, useState } from "react"

export default function Page() {

  const [surveys, setSurveys] = useState(null);


  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await fetch('/fakeAllSurvey.json'); // Fetching from the public directory
        const jsonData = await response.json();
        setSurveys(jsonData.surveys);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  // Single survey card
  const SurveyCard = ({ survey }) => {
    const { title, description, creator, deadline } = survey;
    return (
        <div className=" rounded-lg shadow border p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Creator: {creator}</p>
                <p className="text-sm text-gray-600">Deadline: {deadline}</p>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Take Survey
            </button>
        </div>
    );
};



  return (

    <section>

      {/* Head */}
      <header>
        <div class="p-8 md:p-10 rounded-lg mb-5 shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 text-center text-white">
          <h1 class="font-semibold  text-4xl md:text-[40px] mb-3">
            Your Opinion Matters
          </h1>
          <h4 class="font-normal">
            Help Us Improve by Sharing Your Feedback
          </h4>
        </div>
      </header>

      {/* Survey cards */}
      <main className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
        {
          surveys ?
            <>
              {/* While surveys data fatched */}
              {surveys.map(survey => <SurveyCard survey={survey} key={survey.title} />)}
            </> : <>
              {/* Skeletons while surveys are loading */}
              <p>no</p>
            </>
        }
      </main>
    </section>
  )
}
