"use client";
import { useEffect, useId, useState } from "react";

function RatingScaleQuestions({
  setShowSurveyForm,
  setSurveyQuestions,
  setOpenAddQuestionModal,
  currentQuestion,
  setCurrentQuestion,
}) {
  const [questionInput, setQuestionInput] = useState(
    currentQuestion.question || ""
  );
  const [options, setOptions] = useState("5");
  const createdId = useId();
  const onSubmit = (e) => {
    e.preventDefault();
    setSurveyQuestions((prevItem) => [...prevItem, currentQuestion]);
    setOpenAddQuestionModal(false);
    setCurrentQuestion({});
  };

  useEffect(() => {
    // set current question in the current question state object

    const newObject = {
      questionType: "linear_scale",
      question: questionInput,
      options: [...Array(parseInt(options)).keys()],
      answer: "",
      id: createdId,
    };

    setCurrentQuestion(newObject);
  }, [setCurrentQuestion, questionInput, options, createdId]);

  return (
    <div class="p-4 py-8 relative">
      <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white ">
        Long Text Question
      </div>

      <form
        class="editor mx-auto w-full flex flex-col text-gray-800  rounded-md shadow-xl p-4 bg-stone-200"
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
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />

        <select
          className="select select-bordered select-lg w-full"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>

        <div class="flex justify-end mt-4">
          <button class="btn p-1 px-4 font-semibold cursor-pointer hover:bg-blue-200 hover:text-neutral-800 border-none text-gray-200 ml-2 bg-neutral-800">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default RatingScaleQuestions;
