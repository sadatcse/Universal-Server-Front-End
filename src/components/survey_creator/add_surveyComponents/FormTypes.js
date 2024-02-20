import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa6';
import QuestionTypeCard from './QuestionTypeCard';

export default function FormTypes({ setQuestionTypeName, typeNames , isOpenFormTypesDropDown , setIsOpenFormTypesDropDown, questionTypeName}) {
    
    return (
        <details className="dropdown text-inherit h-5/6 absolute top-0 right-1">
            <summary className="m-1 btn  btn-primary mb-4" onClick={()=> setIsOpenFormTypesDropDown(!isOpenFormTypesDropDown)}>Form Types {isOpenFormTypesDropDown ? <FaArrowDown /> : <FaArrowUp/>} </summary>
            <div className="w-full h-full overflow-auto dropdown-content space-y-3" style={{ display: "grid" }}>

                {typeNames && typeNames.map((item, idx) => (
                    <QuestionTypeCard key={idx} item={item} setQuestionTypeName={setQuestionTypeName} questionTypeName={questionTypeName}
                    />
                ))}

            </div>
        </details>
    )
}
