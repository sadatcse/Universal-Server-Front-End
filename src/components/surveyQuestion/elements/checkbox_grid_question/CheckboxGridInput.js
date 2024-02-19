import { useState } from 'react';

export default function CheckboxGridInput({idx1, label, isAnswer,onCheck}) {
    const [isChecked, setIsChecked] = useState(isAnswer);

    return (
        <label >
            <input type="checkbox" className="checkbox" checked={isChecked} onChange={(e) => {onCheck(idx1, label); setIsChecked(e.target.checked)}} />
        </label>
    )
}
