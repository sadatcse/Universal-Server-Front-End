import useAxiosPublic from "@/Hook/useAxiosPublic";
import moment from "moment";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import CheckBoxGridQuestion from "./CheckBoxGridQuestion";
import DropDownQuestion from "./DropDownQuestion";
import LinearScaleQuestion from "./LinearScaleQuestion";
import LongTextQuestion from "./LongTextQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import RankingScaleQuestion from "./RankingScaleQuestion";
import ShortTextQuestion from "./ShortTextQuestion";
import axios from "axios";

export default function SurveyResult({
  setQuestions,
  isViewResult,
  questions,
  userData,
  surveyId,
  titleAndDescription,
}) {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();
  const onSubmit = () => {
    const { surveyIds, ...restData } = userData;
    const answers = { [titleAndDescription?.title]: questions };

    console.log(answers);
    const combinedObject = {
      ...restData,
      answers,
      date: moment().format("MM/DD/YYYY"),
      surveyIds: surveyIds ? [...surveyIds, surveyId] : [surveyId],
    };

    axiosPublic
      .post("/create_participant", combinedObject)
      .then((res) => {
        console.log(res);
        if (
          res.data?.participantResult?.acknowledged ||
          res.data?.surveyResult?.acknowledged ||
          res.data?.acknowledged
        ) {
          swal({
            title: "Good job!",
            text: "You Completed the Survey!",
            icon: "success",
            button: "Go Home",
          }).then((value) => {
            router.push("/", { scroll: false });
          });
        }
      })
      .catch((err) => {
        swal({
          title: "Alert!",
          text: "There is an error!",
          icon: "error",
          button: "Try Again",
        });
      });
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-8 w-full border-b-2">
        Your Answers
      </h2>
      {questions?.map((qn, idx) => (
        <div key={idx}>
          {qn?.questionType === "multiple_choice" && (
            <MultipleChoiceQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "checkbox_grid" && (
            <CheckBoxGridQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "dropdown" && (
            <DropDownQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "linear_scale" && (
            <LinearScaleQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "ranking" && (
            <RankingScaleQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "sort_text" && (
            <ShortTextQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
          {qn?.questionType === "long_text" && (
            <LongTextQuestion
              setQuestions={setQuestions}
              question={qn}
              isViewResult={isViewResult}
            />
          )}
        </div>
      ))}
      <button className="btn btn-neutral block mx-auto mt-8" onClick={onSubmit}>
        Submit Answers
      </button>
    </>
  );
}
