"use client"
import { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function RatingScaleQuestions({ setShowSurveyForm, setSurveyQuestions, setOpenAddQuestionModal }) {
  const [options, setOptions] = useState([]);
  const [levelNames, setLevelNames] = useState([]);
  const optionInput = useRef(null)
  const questionInput = useRef(null)
  const levelInput = useRef(null)
  const onSubmit = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    console.log({ question })
  }
  const onSave = () => {
    const question = questionInput.current.value;
    console.log({ question, options })
    const newObject = {type: "Rating Scale Questions" , question, options, levelNames }
    setSurveyQuestions((prevItem) => [...prevItem, newObject])
    setOpenAddQuestionModal(false)
  }

  const addOption = () => {
    const name = optionInput.current.value;

    const newArray = [...options, [name]]
    setOptions(newArray)
    optionInput.current.value = "";
  }

  const addLevel = () => {
    const name = levelInput.current.value;

    const newArray = [...levelNames, [name]]
    setLevelNames(newArray)
    levelInput.current.value = "";
  }

  const onEnter = (e, field) => {

    switch (field) {
      case "level":
        if (e.key === "Enter") {
          addLevel()
        }
        break;

      case "option":
        if (e.key === "Enter") {
          addOption()
        }
        break;

      default:
        break;
    }


  }

  const deleteOption = (name, field) => {


    switch (field) {
      case "level":
        const levelNewArray = levelNames.filter((item) => item[0] !== name)
        console.log(levelNewArray)
        setLevelNames(levelNewArray)
        break;
      case "option":
        const optionNewArray = options.filter((item) => item[0] !== name)
        console.log(optionNewArray)
        setOptions(optionNewArray)
        break;

      default:
        break;
    }
  }

  return (
    <div class="p-4 py-8 relative">
      <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white ">Rating Scale Questions form</div>
      <button className="text-4xl absolute top-4 left-6" onClick={() => setShowSurveyForm(false)}><FaArrowLeftLong /></button>
      <form class="editor mx-auto w-10/12 flex flex-col text-gray-800  rounded-md shadow-xl p-4  max-w-2xl bg-stone-400 md:min-w-[500px] lg:min-w-[700px]" onSubmit={onSubmit}>
        {/* questions field */}
        <label htmlFor="title" className="font-bold text-2xl">Question</label>
        <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded" spellcheck="false" id="title" placeholder="Question" type="text" required name="question" ref={questionInput} />
        {/* level names field */}
        <label htmlFor="title" className="font-bold text-2xl">Add Level</label>
        <div className="flex items-center">
          <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded w-[90%]" spellcheck="false" id="level" placeholder="Add Level" type="text" required name="question" ref={levelInput} onKeyUp={(e) => onEnter(e, "level")} />
          <div class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800" onClick={addLevel}>Add</div>
        </div>

        {/* level names appear area */}
        <div className="flex shrink-0 overflow-x-auto gap-2 p-3 border border-neutral-800 rounded-2xl mb-3">
          {
            levelNames && levelNames.map((name, idx) => (
              <div key={idx} className="relative p-2 rounded-xl border bg-gray-400 pr-6">{name[0]}
                <span className="absolute top-1/2 right-1 -translate-y-1/2 bg-white rounded-full" onClick={() => deleteOption(name[0], "level")}><IoClose /></span>
              </div>
            ))
          }
        </div>

        <div className="flex w-full justify-stretch rounded-lg overflow-hidden">
          <div className="space-y-4 bg-blue-300 text-neutral-950 p-3 w-full md:w-1/2">
            <h2 className="font-bold text-2xl">Options</h2>
            <ul className="space-y-1 list-disc list-inside min-h-24" >
              {
                options.map((optionName, idx) => (
                  <li key={idx} className="relative">{optionName[0]} <div className="absolute top-1/2 right-3 -translate-y-1/2 bg-white rounded-full" onClick={() => deleteOption(optionName[0], "option")}><IoClose /></div></li>

                ))
              }
            </ul>
          </div>
          <from className="space-y-4 bg-amber-200 p-3 md:w-1/2 w-full" >
            <label htmlFor="title" className="font-bold text-2xl">Add Option</label>
            <input class="title bg-gray-00 border border-gray-300 p-2 mb-4 outline-none rounded" spellcheck="false" id="title" placeholder="Add Option" type="text" required ref={optionInput} onKeyUp={(e) => onEnter(e, "option")} />
            <div onClick={addOption} class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800" >Add</div>
          </from>
        </div>

        <div class="flex justify-end mt-4">
          <div class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800" onClick={onSave}>Save</div>
        </div>
      </form>
    </div>
  )
}




export default RatingScaleQuestions