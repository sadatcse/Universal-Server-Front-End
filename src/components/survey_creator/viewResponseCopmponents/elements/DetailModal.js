import { IoClose } from "react-icons/io5";

export default function DetailModal({ setIsOpenModal, responseData }) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div
        className={`max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white pt-12 p-8 transition-all duration-500 relative`}
      >
        <h2 className="font-bold text-3xl border-b-2 border-stone-400">
          Customer Satisfaction Survey
        </h2>
        <p className="text-lg text-stone-500 p-2 ">
          Gather feedback from customers about their experience with our
          products and services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.keys(responseData).map((key, idx, array) => (
            <p
              key={idx}
              className="text-lg btn btn-outline hover:bg-transparent h-fit hover:text-neutral-700 cursor-auto select-text"
            >
              <b>{key}:</b>
              {responseData[key]}
            </p>
          ))}
        </div>

        <div className="w-full">
          <button
            className="text-neutral text-4xl absolute top-3 right-6"
            onClick={() => setIsOpenModal(false)}
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}
