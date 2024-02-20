import { BiFoodMenu } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaRankingStar } from "react-icons/fa6";
import { MdLinearScale, MdShortText } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
const typeNames = [
    {
        "name": "Multiple Choice",
        "type": "multiple_choice"
    },
    {
        "name": "Checkbox Grid",
        "type": "checkbox_grid"
    },
    {
        "name": "Dropdown Menu",
        "type": "dropdown"
    },
    {
        "name": "Linear Scale",
        "type": "linear_scale"
    },
    {
        "name": "Long Text",
        "type": "sort_text"
    },
    {
        "name": "Short Text",
        "type": "long_text"
    },
    {
        "name": "Ranking",
        "type": "ranking"
    }
]

function QuestionTypeCard({ item, setQuestionTypeName, questionTypeName }) {
    return (
        <div className={`btn btn-outline h-24 relative cursor-pointer text-md flex justify-center items-center flex-col gap-1 ${questionTypeName === item.type ? "btn-active" : ""}`} onClick={() => setQuestionTypeName(item.type)}>
                {
                    item.type === "multiple_choice" &&
                    <BiFoodMenu className="text-2xl" />
                }
                {
                    item.type === "checkbox_grid" &&
                    <CgMenuGridR className="text-2xl" />
                }
                {
                    item.type === "dropdown" &&
                    <TfiMenuAlt className="text-2xl" />
                }
                {
                    item.type === "linear_scale" &&
                    <MdLinearScale className="text-2xl" />
                }
                {
                    item.type === "sort_text" &&
                    <MdShortText className="text-2xl" />
                }
                {
                    item.type === "long_text" &&
                    <BsTextParagraph className="text-2xl" />
                }
                {
                    item.type === "ranking" &&
                    <FaRankingStar className="text-2xl" />
                }
            <h3 className="text-base font-bold">
                {item.name}
            </h3>
        </div>
    )
}

export default QuestionTypeCard