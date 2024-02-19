"use client"

import { useRef, useState } from "react";

const question = {
    "question": "What is your preferred method of communication?",
    "questionType": "Dropdown Menu Questions",
    "options": ["Email", "Phone", "Text Message", "In-Person Meeting"]
}

function DropDownQuestion() {
    const [searchValue, setSearchValue] = useState([]);
    const [selectValue, setSelectValue] = useState("");
    const searchInput = useRef(null)
    
    const onSelect = (value)=> {
        if(value.length > 0){

            setSelectValue(value)
        }else{
            setSearchValue([])
        }
    }

    const onSearch = (userInput) => {
        setSelectValue(userInput)
        
        if(userInput.length > 0){
            const filterResult = question.options.filter(item => item.toLowerCase().includes(userInput.toLowerCase()))
            
            setSearchValue(filterResult)
            setSelectValue(userInput)
        }
    }

    const onObserver = (e)=> {
        const tagNames = ["ul" , "li" , "input"]
        if(!tagNames.includes(e.target.tagName.toLowerCase())){
            onSelect("")
        }
        console.log(!tagNames.includes(e.target.tagName.toLowerCase()))
    }

    const dropdownStyle = searchValue.length > 0 ? {padding: "8px"} : {padding: "0px"};
    return (
        <div onClick={onObserver}>
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>

            <div className="mx-auto w-1/2 relative" >
                <input type="text" ref={searchInput} placeholder="Select Answer" className="input input-bordered input-success w-full mx-auto" onFocus={()=> {setSearchValue(question.options); setSelectValue("")}} onChange={(e)=> onSearch(e.target.value , "")}  value={selectValue} />

                <ul className="shadow menu dropdown-content z-[1] bg-success gap-3 rounded-box w-full max-h-40 overflow-auto flex-nowrap transition-all duration-100 absolute top-full left-0 mt-3 p-6" style={dropdownStyle} >

                    {searchValue.map((name, idx) => (
                            <li key={idx} onClick={()=> onSelect( name)} className="text-neutral bg-white shadow-sm rounded-md hover:bg-neutral-800 hover:text-white"><a>{name}</a></li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default DropDownQuestion