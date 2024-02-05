"use client"

import UseAxioSecure from "@/Hook/UseAxioSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";


function AddSurveyForm({setSurveyInitialInfo, setShowQuestionArea}) {
  const axiosSecure = UseAxioSecure();
  const {user} = useContext(AuthContext);
  
  const onSubmit = async (e)=> {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const formData = {title, description, email: user.email};
    setSurveyInitialInfo(formData);
    setShowQuestionArea(title.length > 0 && description.length > 0);
    localStorage.setItem("my_survey", JSON.stringify(formData));

    // try {
    //   const result = await axiosSecure.post("/create-survey", formData);
      
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <div class="p-4 py-8">
        <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white">Add Your Survey</div>
        <form class="editor mx-auto w-10/12 flex flex-col text-gray-800  rounded-md shadow-xl p-4  max-w-2xl bg-stone-400 md:min-w-[500px] lg:min-w-[700px]" onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
            <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded" spellcheck="false" id="title" placeholder="Title" type="text" required name="title" />

            <label htmlFor="description">Description</label>
            <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none rounded" spellcheck="false" placeholder="Describe everything about your Survey" id="description" required name="description"></textarea>
            {/* {description.length === 0 && <p className="text-red-300 text-sm">This Field is Required</p>} */}

            <div class="flex justify-end mt-4">
                <button type="submit" class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800"> Continue </button>
            </div>
        </form>
    </div>
  )
}

export default AddSurveyForm