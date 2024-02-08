import { FaSearch } from 'react-icons/fa'

function ViewResponseSearchBar() {
    return (
        <div className="pt-2 relative text-gray-600 w-full">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-3 mr-1 text-white bg-blue-400 px-12 py-2 rounded-md" >
                <FaSearch />
            </button>
        </div>
    )
}

export default ViewResponseSearchBar