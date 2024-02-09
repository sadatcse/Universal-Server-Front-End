import { FaSearch } from "react-icons/fa";

function ExportResponseSearchBar({setExportSurveyData, surveyData}) {
    const onSearch = (e) => {
        const userInput = e.target.value;
        console.log(userInput)
    
        const filterResult = surveyData.filter(item => item.SurveyTitle.toLowerCase().includes(userInput.toLowerCase()))
    
        setExportSurveyData(filterResult)
    }

    return (
        <div className="pt-2 relative text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" onKeyUp={onSearch}  />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                
                    <FaSearch />
                </button>
        </div>
  )
}

export default ExportResponseSearchBar