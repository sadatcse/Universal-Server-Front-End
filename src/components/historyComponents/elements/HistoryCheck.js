import { useState } from "react";

export default function HistoryCheck({allCheck, data, setCheckItemId, checkedItemId}) {
    const [singleCheck, setSingleCheck] = useState(false)
    const onSingleCheck = (e, id)=> {
        
        setSingleCheck(e.target.checked)
        if(e.target.checked){
            setCheckItemId([...checkedItemId, id]);
            
        }else{
            setCheckItemId(()=> checkedItemId.filter(data=> data.id)) 
        }
    }
    return (
        <label>
            <input type="checkbox" className="checkbox" checked={checkedItemId.includes(data.id) || allCheck }
                onChange={(e) => onSingleCheck(e, data?.id)} />
        </label>
    )
}
