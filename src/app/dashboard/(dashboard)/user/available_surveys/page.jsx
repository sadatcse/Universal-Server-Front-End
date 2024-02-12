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
  const SurveyCard = () =>{
    return(
      <div>
        <p>i am a survey</p>
      </div>
    )
  }
  
  return (

    <section>

      {/* Banner */}
      <header>
        
      </header>

      {/* Survey cards */}
      <div>
        {
          surveys?
          <>
          {/* While surveys data fatched */}
          {surveys.map(survey=><p>hi</p>)}
          </>:<>
          {/* Skeletons while surveys are loading */}
          <p>no</p>
          </>
        }
      </div> 
    </section>
  )
}
