"use client"

import UseAxioSecure from "@/Hook/UseAxioSecure";


function AddSurveyForm({setSurveyInitialInfo, setShowQuestionArea}) {
  const axiosSecure = UseAxioSecure();
  
  const onSubmit = async (e)=> {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const formData = {title, description};
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
    <div className="">
        <h2 className="heading font-bold text-4xl  text-gray-800 bg-white pb-3 border-b-2 mb-8">Add Your Survey</h2>
        <form className="editor mx-auto w-10/12 flex flex-col text-gray-800  rounded-md shadow-xl p-4  max-w-2xl bg-stone-200 md:min-w-[500px] lg:min-w-[700px]" onSubmit={onSubmit}>
          <label htmlFor="title" className="text-lg font-semibold mb-3">Title</label>
            <input className="title bg-white shadow-lg p-2 mb-4 outline-none rounded" spellcheck="false" id="title" placeholder="Title" type="text" required name="title" />

            <label htmlFor="description" className="text-lg font-semibold mb-3">Description</label>
            <textarea className="description bg-white shadow-lg p-3 h-60  outline-none rounded" spellcheck="false" placeholder="Describe everything about your Survey" id="description" required name="description"></textarea>
            {/* {description.length === 0 && <p classNameName="text-red-300 text-sm">This Field is Required</p>} */}

            <div className="flex justify-end mt-4">
                <button type="submit" className="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800"> Continue </button>
            </div>
        </form>
    </div>
  )
}

export default AddSurveyForm