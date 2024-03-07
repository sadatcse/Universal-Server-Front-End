"use client";
import useAxiosPublic from "@/Hook/useAxiosPublic";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function InviteParticipantTable() {
  const [participantData, setParticipantData] = useState([]);
  const [currentResponseData, setCurrentResponseData] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/get_participant")
      .then((res) => {
        setParticipantData(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosPublic]);

  return (
    <section className="md:w-[95%] mx-auto">
      {/* main div */}
      <div className="mt-4 p-4 rounded-lg border border-gray-100 shadow-sm">
        {/* search div */}
        <div className="flex p-2 rounded-lg shadow-sm border gap-2">
          <button className="text-2xl ml-1">
            <CiSearch />
          </button>
          <input
            placeholder="Search by name, survey name or email"
            className="text-sm outline-none w-full"
          ></input>
        </div>
        {participantData.length == 0 ? (
          <>
            {/* loading section */}
            <section>
              <div className="skeleton h-14 w-full mt-9 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
            </section>
          </>
        ) : (
          <>
            {/* customised table */}
            <section className="mt-4  overflow-auto">
              <div className="overflow-x-auto rounded-l-lg">
                <table className="table ">
                  {/* head */}
                  <thead className="">
                    <tr>
                      <th>Image</th>
                      <th>first Name</th>
                      <th>List Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {participantData.length > 0 &&
                      participantData.map((user) => (
                        <tr key={user._id}>
                          <td>
                            <img
                              src={user?.image ? user?.image : "/no_user.jpg"}
                              className="w-10 rounded-lg"
                              alt=""
                            />
                          </td>
                          <td>{user?.first_name}</td>
                          <td>{user?.last_name}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>{user.date}</td>
                          <td>
                            <button className="btn btn-ghost btn-xs bg-blue-300">
                              Invite
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}
