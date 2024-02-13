import { CiUser } from 'react-icons/ci';

export default function CreateParticipant() {


    return (
        <section className="w-[90%]  mx-auto mt-3 ">
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <CiUser className="text-3xl  -ml-1" />
                        <h1 className="text-4xl font-bold">Create Participant</h1>
                    </div>
                    <p className="mt-2 ">Add a new participant</p>
                </div>

                <div className="relative">

                </div>
            </div>

            {/* info */}
            <div className="grid grid-cols-2 gap-4 mt-5">
                {/* input */}
                <div>
                    <p className="text-sm font-bold">First Name</p>
                    <input type="text" placeholder="First Name"  className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>
                {/* input */}
                <div>
                    <p className="text-sm font-bold">Last Name</p>
                    <input type="text" disabled placeholder="Last Name" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>
                {/* input */}
                <div>
                    <p className="text-sm font-bold">Email:</p>
                    <input type="text" placeholder="Email" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>
                {/* input */}
                <div>
                    <p className="text-sm font-bold">Organization:</p>
                    <input type="text" placeholder="Organization" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>
                {/* input */}
                <div>
                    <p className="text-sm font-bold">Department:</p>
                    <input type="text" placeholder="Department" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>
                {/* input */}
                <div>
                    <p className="text-sm font-bold">Role</p>
                    <input type="text" placeholder="Role" disabled className="border pl-4 p-2 disabled focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
                </div>

            </div>

            {/* save button */}
            <div className="flex justify-end mt-16">
                <button className=" px-5 hover:bg-neutral-800 py-1 bg-blue-500 rounded-full text-white">Add Participant</button>
            </div>
        </section>
    );
}
