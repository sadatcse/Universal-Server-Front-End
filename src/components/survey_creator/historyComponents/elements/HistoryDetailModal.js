import { IoClose } from 'react-icons/io5'

export default function HistoryDetailModal() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white pt-12 p-8 transition-all duration-500 relative`} >

               <h2 className='font-bold text-3xl border-b-2 border-stone-400'>Customer Satisfaction Survey</h2>

                <div className="flex flex-wrap">
                    <p className='text-lg text-stone-500 p-2 max-2xl:'>Gather feedback from customers about their experience with our products and services.</p>

                    <p className='text-lg'><b>survey id:</b>ABC123</p>
                    <p className='text-lg'><b>Start Date:</b>2023-12-01</p>

                    <p className='text-lg'><b>End Date:</b>2023-12-29</p>

                    <p className='text-lg'><b>Survey Participants:</b>510</p>

                    <p className='text-lg'><b>Survey ResponseRate:</b>50%</p>

                    <p className='text-lg'><b>Survey Creator:</b>Marketing Team</p>

                    <p className='text-lg'><b>Survey Creator:</b>Marketing Team</p>

                    <p className='text-lg'><b>Survey Category:</b>SProduct Feedback</p>

                    <p className='text-lg'><b>Survey Duration:</b>1 month</p>

                    <p className='text-lg'><b>Survey Platform:</b>Online Form</p>

                    <button className='btn btn-outline'>Survey Results</button>

                    <button className='btn btn-outline'>Survey Feedback</button>

                </div>



                <div className="w-full">
                            <button className="text-neutral text-4xl absolute top-3 left-6" onClick={() => setOpenDemoModal(false)}><IoClose /></button>
                    
                </div>
            </div>
        </div>
  )
}
