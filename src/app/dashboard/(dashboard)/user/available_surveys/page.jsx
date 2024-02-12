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
  const SurveyCard = () => {
    return (
      <div>
        <p>i am a survey</p>
      </div>
    )
  }

  return (

    <section>

      {/* Head */}
      <header>
        <div class="p-8 md:p-10 rounded-lg mb-5 shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 text-center text-white">
          <h1 class="font-semibold text-5xl mb-3">
            Your Opinion Matters
          </h1>
          <h4 class="text-lg font-normal">
            Help Us Improve by Sharing Your Feedback
          </h4>
        </div>
      </header>

      {/* Survey cards */}
      <main>
        {
          surveys ?
            <>
              {/* While surveys data fatched */}
              {surveys.map(survey => <p>hi</p>)}
            </> : <>
              {/* Skeletons while surveys are loading */}
              <p>no</p>
            </>
        }
      </main>
    </section>
  )
}
