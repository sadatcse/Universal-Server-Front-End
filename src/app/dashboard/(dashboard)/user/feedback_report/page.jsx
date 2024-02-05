'use client'
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from "react-icons/ri";


export default function Page() {
  return (
    // feedback form
    <section>
      <h1 className="text-3xl font-semibold text-[#0091ea] text-center mt-2">Feedback Report</h1>
      <form className="border md:w-[60%] mx-auto mt-7 rounded-lg">
        {/* heading */}
        <div className="bg-[#0091ea] py-7 px-5 text-white rounded-t-lg">
          <h2 className="text-2xl font-semibold">Send us your feedback!</h2>
          <p className="text-sm text-gray-100 mt-1">Do you have a suggestion of found some bug ? let us know in the field below</p>
        </div>
        {/* main */}
        <main className="rounded-b-lg"> 
          {/* emoji part */}
          <div className="px-5 py-2">
            <h2 className="text-lg font-medium text-gray-500 mt-1">How was your experience?</h2>
            <div className="flex text-3xl gap-4 mb-3 mt-2 text-gray-400">
              <span className="text-yellow-500 cursor-pointer"><RiEmotionHappyLine /></span>
              <span className="hover:text-yellow-500 cursor-pointer"><RiEmotionUnhappyLine /></span>
              <span className="hover:text-yellow-500 cursor-pointer"><RiEmotionNormalLine /></span>

            </div>
          </div>
          <textarea name="feedback" className="w-full resize-none md:h-52 bg-gray-50  outline-none p-4" placeholder="Describe your experience here... " />
          {/* checkbox */}
          <div className="px-5 flex mt-3 items-center gap-10 font-medium">
            <div className="flex gap-2 items-center">
              <input type="radio" id="bug" name="feedback_radio" className="text-gray-400" value="bug" />
              <label for="bug">Bug</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id="suggestion" name="feedback_radio" className="text-gray-400" value="suggestion" />
              <label for="suggestion">Suggestion</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id="others" name="feedback_radio" className="text-gray-400" value="others" />
              <label for="others">Others</label>
            </div>
          </div>
          {/* button */}
          <div className="px-5 mt-4 pb-7 rounded-full">
            <button className="font-medium bg-[#0091ea] rounded-md text-white w-full py-2">Send Feedback</button>
          </div>
        </main>

      </form>
    </section>
  )
}
