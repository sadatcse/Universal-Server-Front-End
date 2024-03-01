"use client";
import useAxiosPublic from "@/Hook/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Page() {
  const [surveys, setSurveys] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/get_survey").then((res) => {
      setSurveys(res.data);
    });
  }, [axiosPublic]);

  // Single survey card
  const SurveyCard = ({ survey }) => {
    const { title, description, creator } = survey;
    console.log(survey);
    return (
      <div className=" rounded-lg shadow border p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Creator: {creator}</p>
            {/* <p className="text-sm text-gray-600">Deadline: {deadline}</p> */}
          </div>
          <Link
            href={`http://localhost:3000/survey_question/${survey?._id}?email=${currentUser?.email}`}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Take Survey
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="w-[96%] mx-auto">
      {/* Head */}
      <header>
        {/* <div class="p-8 md:p-10 rounded-lg mb-5 shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 text-center text-white">
          <h1 class="font-semibold  text-5xl  mb-3">
            Available Surveys
          </h1>
          <h4 class="font-normal">
            Help Us Improve by Sharing Your Feedback
          </h4>
        </div> */}
        <div className="flex justify-between items-center">
          <div className="my-5">
            <h1 className="font-semibold text-4xl">Available Surveys</h1>
            <p className="text-sm text-gray-500 mt-1">
              Help Us Improve by Sharing Your Feedback
            </p>
          </div>

          <div className="pt-2 relative text-gray-600">
            <input
              className="border-2  border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search surveys"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="border-b mb-7 border-gray-300"></div>
      </header>

      {/* Survey cards */}
      <main className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
        {surveys ? (
          <>
            {/* While surveys data fatched */}
            {surveys.map((survey) => (
              <SurveyCard survey={survey} key={survey.title} />
            ))}
          </>
        ) : (
          <>
            {/* Skeletons while surveys are loading */}
            <p>no</p>
          </>
        )}
      </main>
    </section>
  );
}
