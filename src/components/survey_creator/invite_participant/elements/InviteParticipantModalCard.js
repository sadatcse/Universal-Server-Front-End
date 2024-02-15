import { useEffect, useState } from "react";

function InviteParticipantModalCard({data, selectedItem, setSelectedItem, allCheck, surveyData}) {
    const [isCheck, setIsCheck] = useState(false)

    const [singleCheck, setSingleCheck] = useState(false)

    function onSingleCheck (isTrue) {
        
        setSingleCheck(isTrue)
        
        if(isTrue){
            setSelectedItem([...selectedItem, data]);
            
        }else{
            setSelectedItem(selectedItem.filter(item => item.id !== data.id)) 
        }
    }

    useEffect(()=> {

        setSingleCheck(selectedItem.map(item => item.id).includes(data.id))

    },[selectedItem, data])

    return (
        <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral cursor-pointer" onClick={()=> onSingleCheck(!singleCheck)}>
            <input type="checkbox" className="checkbox checkbox-lg" checked={singleCheck || allCheck }  name="check"
                />
            <h3 className="my-3 text-2xl font-semibold">{data?.SurveyTitle}</h3>
            <div >
            </div>
        </div>
    )
}

export default InviteParticipantModalCard