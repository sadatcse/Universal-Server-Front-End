import { CiUser } from "react-icons/ci";
import CreateParticipantForm from "./components/CreateParticipantForm";

export default function CreateParticipant() {
  return (
    <section className="w-[90%] mx-auto mt-3 ">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <CiUser className="text-3xl  -ml-1" />
            <h1 className="text-4xl font-bold">Create Participant</h1>
          </div>
          <p className="mt-2 ">Add a new participant</p>
        </div>

        <div className="relative"></div>
      </div>

      <CreateParticipantForm />
    </section>
  );
}
