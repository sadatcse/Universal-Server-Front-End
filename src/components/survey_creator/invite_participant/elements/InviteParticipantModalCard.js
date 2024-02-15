import { useState } from "react"

function InviteParticipantModalCard({data, checkedItemId, setCheckItemId, allCheck}) {
    const [isCheck, setIsCheck] = useState(false)

    const [singleCheck, setSingleCheck] = useState(false)
    const onSingleCheck = (e, id)=> {
        
        setSingleCheck(e.target.checked)
        console.log(e.target.checked)
        if(e.target.checked){
            setCheckItemId([...checkedItemId, id]);
            
        }else{
            setCheckItemId(checkedItemId.filter(itemId => itemId !== id)) 
        }
    }

    return (
        <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral cursor-pointer" >
            <input type="checkbox" className="checkbox checkbox-lg" checked={singleCheck || allCheck }
                onChange={(e) => onSingleCheck(e, data?.id)} />
            <h3 className="my-3 text-2xl font-semibold">{data?.SurveyTitle}</h3>
            <div >
            </div>
        </div>
    )
}

export default InviteParticipantModalCard