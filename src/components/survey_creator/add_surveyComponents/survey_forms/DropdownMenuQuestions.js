"use client";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function DropdownMenuQuestions({
  setShowSurveyForm,
  setSurveyQuestions,
  setOpenAddQuestionModal,
  currentQuestion,
  setCurrentQuestion,
}) {
  const [options, setOptions] = useState(currentQuestion?.options || []);
  const optionInput = useRef(null);
  const questionInput = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
  };
  const onSave = () => {
    setSurveyQuestions((prevItem) => [...prevItem, currentQuestion]);
    setOpenAddQuestionModal(false);
    setCurrentQuestion({});
  };

  const addOption = () => {
    const name = optionInput.current.value;

    const newArray = [...options, [name]];
    setOptions(newArray);
    optionInput.current.value = "";
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      addOption();
    }
  };

  const deleteOption = (name) => {
    const newArray = options.filter((item) => item[0] !== name);

    setOptions(newArray);
  };

  useEffect(() => {
    // set current question in the current question state object
    const question = questionInput.current.value;
    const newObject = {
      questionType: "dropdown",
      question,
      options: options.flat(Infinity),
    };
    setCurrentQuestion(newObject);
  }, [setCurrentQuestion, options]);
  return (
    <div class="p-4 py-8 relative">
      <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white ">
        Dropdown Menu Questions form
      </div>
      <form
        class="editor mx-auto w-full flex flex-col text-gray-800  rounded-md shadow-xl p-4 bg-stone-200 "
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-2xl">
          Question
        </label>
        <input
          class="title bg-white shadow-md p-2 mb-4 outline-none rounded"
          spellcheck="false"
          id="title"
          placeholder="Title"
          type="text"
          required
          name="question"
          ref={questionInput}
          defaultValue={currentQuestion?.question}
        />
        <div className="flex w-full justify-stretch rounded-lg overflow-hidden gap-3">
          <div className="space-y-4 border-2 rounded-lg border-neutral p-3 w-full md:w-1/2">
            <h2 className="font-bold text-2xl">Options</h2>
            <ul className="space-y-1 list-disc list-inside min-h-24">
              {options.map((optionName, idx) => (
                <li key={idx} className="relative">
                  {optionName}{" "}
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white rounded-full"
                    onClick={() => deleteOption(optionName[0])}
                  >
                    <IoClose />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <from className="space-y-4 border-2 rounded-lg border-neutral p-3 md:w-1/2 w-full">
            <label htmlFor="title" className="font-bold text-2xl">
              Add Option
            </label>
            <input
              class="title bg-white shadow-md p-2 mb-4 outline-none rounded"
              spellcheck="false"
              id="title"
              placeholder="Add Option"
              type="text"
              required
              ref={optionInput}
              onKeyUp={onEnter}
            />
            <div
              onClick={addOption}
              class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800"
            >
              Add
            </div>
          </from>
        </div>

        <div class="flex justify-end mt-4">
          <div
            class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800"
            onClick={onSave}
          >
            Save
          </div>
        </div>
      </form>
    </div>
  );
}

export default DropdownMenuQuestions;
