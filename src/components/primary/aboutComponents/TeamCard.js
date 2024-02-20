import Image from "next/image"

function TeamCard({ position, member, setCurrentTeam, currentTeam }) {
    return (
        <div class={`w-full p-6 rounded-md shadow-md  dark:text-white cursor-pointer hover:bg-neutral-800 dark:hover:bg-white dark:hover:border dark:hover:text-neutral-800 transition-all duration-300 ${currentTeam === position ? "bg-neutral-800 border border-transparent dark:border-black dark:bg-white dark:text-neutral-800" : "bg-white dark:bg-neutral-800 dark:text-white"}`} onClick={() => setCurrentTeam(position)}>
            <Image src={member.image} height={500} width={500} alt=""
                class="object-cover object-top md:object-center w-full rounded-md h-72  md:h-32 dark:bg-gray-800 placeholder:" />

            <div className="flex-1 my-4 dark:text-white md:hidden block">
                <p className="text-xl font-semibold">{member.name}</p>
                <p>{member?.title}</p>
                <p> <span className="text-3xl font-bold"></span>{member?.description} <span className="text-3xl font-bold" ></span></p>

            </div>

        </div>
    )
}

export default TeamCard