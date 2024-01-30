
function page() {
  return (
    <div class="shadow p-4 py-8" x-data="{ images: [] }">
        <div class="heading text-center font-bold text-4xl m-5 text-gray-800 bg-white">Add Your Survey</div>
        <form class="editor mx-auto w-10/12 flex flex-col text-gray-800 border rounded-md shadow-xl p-4  max-w-2xl bg-blue-100">
          <label htmlFor="title">Title</label>
            <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" id="title" placeholder="Title" type="text" />

            <label htmlFor="description">Description</label>
            <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about your Survey" id="description"></textarea>

            <div class="buttons flex justify-end mt-4">
                <div class="btn border p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-neutral-800">Continue</div>
            </div>
        </form>
    </div>
  )
}

export default page