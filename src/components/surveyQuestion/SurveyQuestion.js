import DropDownQuestion from "./elements/DropDownQuestion";

export default function SurveyQuestion() {
    return (
        <section className=" relative z-[1]  dark:bg-transparent pb-16">
            <div className="w-full h-4/6 absolute top-0 left-0 z-[-1] bg-blue-200"  >
                <div className="w-full h-full  opacity-20" style={{ backgroundImage: "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')" }} ></div>
            </div>
            
            <h2 className='text-6xl font-bold text-center pt-12 pb-4'>Survey Satisfaction</h2>
            <p className='text-gray-500 text-center text-2xl font-semibold mb-8'>Please provide your feedback on various aspects of your experience at our company.</p>
            <div className="container mx-auto bg-white py-6 rounded-xl relative pb-28 px-8">
            <progress className="progress progress-success w-4/6 mx-auto block h-1" value="70" max="100"></progress>


                {/* <SurveyForm /> */}
                {/* <MultipleChoiceQuestion /> */}
                {/* <CheckBoxGridQuestion /> */}
                <DropDownQuestion />


                <div className="flex items-center justify-between py-1 bg-blue-200 absolute left-1/2 bottom-0 w-full md:w-4/6 rounded-full px-8 -translate-x-1/2 " >
                    <button className="btn btn-neutral btn-disabled">Prev</button>
                    <p className="text-3xl font-bold">1/8</p>
                    <button className="btn btn-neutral">Next</button>
                </div>
            </div>
        </section>
    )
}

