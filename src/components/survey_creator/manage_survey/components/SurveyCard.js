"use client";
import UseAxioSecure from "@/Hook/UseAxioSecure";
import Link from "next/link";
import { FaEdit, FaStarOfLife } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbEyeglass2 } from "react-icons/tb";

function SurveyCard({ survey, setCurrentSurvey, setIsOpenModal, setReFetch }) {
  const axiosSecure = UseAxioSecure();

  const deleteSurvey = () => {
    axiosSecure
      .delete(`/delete_survey/${survey._id}`)
      .then((res) => {
        if (res.data?.acknowledged) {
          swal({
            title: "Good job!",
            text: "You Completed the Survey!",
            icon: "success",
            button: "Ok",
          });
          setReFetch((prev) => prev + 1);
        }
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Before Create Survey, Please Change Your role!",
          icon: "error",
          button: "Try Again",
        });
      });
  };

  return (
    <div className="flex flex-col group items-start text-left p-6 border shadow-lg rounded-md hover:bg-blue-200 hover:shadow-2xl hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral cursor-pointer relative">
      <FaStarOfLife className="group-hover:rotate-180 transition-all duration-300 text-3xl" />
      <h3 className="my-3 text-2xl font-semibold">{survey?.title}</h3>
      <p>
        <b>Q: </b> {survey?.questions?.length}
      </p>
      <div></div>

      <div className="absolute top-0 right-0 w-8 h-full flex justify-start items-center flex-col py-2 gap-2">
        <button
          onClick={deleteSurvey}
          className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-neutral hover:text-white"
        >
          <MdDelete />
        </button>
        <Link
          className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-neutral hover:text-white"
          href={`/dashboard/company/create_survey/${survey._id}`}
        >
          <FaEdit />
        </Link>
        <button
          className="p-1 text-[12px] text-neutral bg-white border rounded-full hover:bg-neutral hover:text-white"
          onClick={() => {
            setIsOpenModal(true);
            setCurrentSurvey(survey.questions);
          }}
        >
          <TbEyeglass2 />
        </button>
      </div>
    </div>
  );
}

export default SurveyCard;
