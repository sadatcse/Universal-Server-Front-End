"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import { RiArrowDropDownLine, RiDeleteBinLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import useAxiosPublic from "@/Hook/useAxiosPublic";
import ViewResponseParticipateList from "@/components/survey_creator/viewResponseCopmponents/elements/ViewResponseParticipateList";

function Page() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("item2");
  const [userData, setUserData] = useState([]);
  const axiosPublic = useAxiosPublic();
  // fetching the user data from db
  useEffect(() => {
    axiosPublic("/get_participant")
      .then((data) => setUserData(data.data))
      .catch((err) => console.log(err));
  }, [axiosPublic]);

  // dropdown
  const handleChange = (e) => {
    setShowDropdown(!showDropdown);
    setSelectedValue(e.target.value);
  };
  return (
    <section className="md:w-[95%] mx-auto">
      <h1 className="text-xl font-bold">All Users</h1>
      <div className="text-xs mt-2 text-gray-500 breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Dasboard</a>
          </li>
          <li>
            <a>Perticipiants</a>
          </li>
        </ul>
      </div>
      {/* main div */}
      <div className="mt-4 p-4 rounded-lg border border-gray-100 shadow-sm">
        {/* search and dropdown div */}
        <div className="flex justify-between gap-3 ">
          <div className="flex p-2 rounded-lg shadow-sm w-3/12 border gap-2 relative">
            <div
              className="text-sm outline-none w-full"
              value={selectedValue}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              onChange={handleChange}
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-400 pl-2">Role</p>
                <RiArrowDropDownLine className="text-xl text-gray-500" />
              </div>
            </div>
            <ul
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              className={`menu absolute animate__animated animate__fadeIn  bg-white border shadow w-full top-12 z-20 left-0 rounded-lg ${
                showDropdown ? "block" : "hidden"
              }`}
            >
              <li>
                <a>Administrator</a>
              </li>
              <li>
                <a>Survey Creator</a>
              </li>
              <li>
                <a>Survey Perticipient</a>
              </li>
            </ul>
          </div>
          <div className="flex p-2 rounded-lg shadow-sm w-9/12 border gap-2 ">
            <button className="text-2xl ml-1">
              <CiSearch />
            </button>
            <input
              placeholder="Search by name or email"
              className="text-sm outline-none w-full"
            ></input>
          </div>
        </div>
        {/* total user */}
        <div className="mt-4 text-gray-400 text-sm">
          <h1>
            {userData.length === 0 ? (
              <>
                <div className="skeleton h-4 w-20 mt-5 opacity-50"></div>
              </>
            ) : (
              <>Total {userData.length} user</>
            )}
          </h1>
        </div>
        {userData.length == 0 ? (
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
            <ViewResponseParticipateList />
          </>
        )}
      </div>
    </section>
  );
}

export default Page;
