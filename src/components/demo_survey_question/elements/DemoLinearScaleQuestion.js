"use client";

import { useEffect, useRef, useState } from "react";

// const question = {
//     "question": "On a scale of 1 to 10, how likely are you to recommend our company to a friend or colleague?",
//     "questionType": "Rating Scale Questions",
//     "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
//   };

function DemoLinearScaleQuestion({ question }) {
  const [searchValue, setSearchValue] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(0);
  const searchInput = useRef(null);

  const onSelect = (value) => {
    if (value.length > 0) {
      setSelectValue(value);
    } else {
      setSearchValue([]);
    }
  };

  const onSearch = (userInput) => {
    setSelectValue(userInput);

    if (userInput.length > 0) {
      const filterResult = question.options.filter((item) =>
        item.toLowerCase().includes(userInput.toLowerCase())
      );

      setSearchValue(filterResult);
      setSelectValue(userInput);
    }
  };

  const onObserver = (e) => {
    const tagNames = ["ul", "li", "input"];
    if (!tagNames.includes(e.target.tagName.toLowerCase())) {
      onSelect("");
    }
  };

  useEffect(() => {
    const labels = document.querySelectorAll(".label");

    labels.forEach((element, index) => {
      if (index >= selectedLabel) {
        element.classList.add("bg-white");
        element.classList.remove("bg-neutral-800");
        element.classList.add("text-neutral-800");
        element.classList.remove("text-white");
      } else {
        element.classList.add("bg-neutral-800");

        element.classList.remove("text-neutral-800");
        element.classList.add("text-white");
        element.classList.remove("bg-white");
      }
    });
  }, [selectedLabel]);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center pt-8 pb-10">
        {question?.question}
      </h2>
      <div className="relative px-12 w-full h-40 lg:h-36">
        <ul className="w-full absolute top-1/2 left-0 -translate-y-1/2 flex justify-start md:justify-center gap-4 flex-wrap ">
          {question.options.map((num, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedLabel(idx + 1)}
              className="text-neutral bg-white border-2 border-neutral rounded-full w-12 h-12 lg:h-16 lg:w-16 shadow-lg hover:bg-neutral-800 hover:text-white flex justify-center items-center text-md md:text-xl  lg:text-4xl cursor-pointer label"
            >
              {idx + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DemoLinearScaleQuestion;
