import { useEffect, useState } from "react";

export default function HistoryCheck({allCheck, data, setCheckItemId, checkedItemId}) {
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

    useEffect(()=> {

        setSingleCheck(checkedItemId.includes(data.id))

    },[checkedItemId, data])
    return (
        <label>
            <input type="checkbox" className="checkbox" checked={singleCheck || allCheck }
                onChange={(e) => onSingleCheck(e, data?.id)} />
        </label>
    )
}
