
function TeamCard({position , url ,setCurrentTeam}) {
    return (
        <div class="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 cursor-pointer hover:bg-neutral-800 transition-all duration-300" onClick={()=> setCurrentTeam(position)}>
            <img src={url} alt=""
                class="object-cover object-center w-full rounded-md h-32 dark:bg-gray-500" />

        </div>
    )
}

export default TeamCard