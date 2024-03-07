"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import { RiArrowDropDownLine, RiDeleteBinLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import useAxiosPublic from "@/Hook/useAxiosPublic";
import UseAxioSecure from "@/Hook/UseAxioSecure";
import axios from "axios";
import swal from "sweetalert";

function NewUsers() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("item2");
  const [userData, setUserData] = useState([]);
  const [countDeleteItem, setCountDeleteItem] = useState(0);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxioSecure();
  // fetching the user data from db
  useEffect(() => {
    axiosPublic("/users")
      .then((data) => setUserData(data.data))
      .catch((err) => console.log(err));
  }, [axiosPublic, countDeleteItem]);

  // dropdown
  const handleChange = (e) => {
    setShowDropdown(!showDropdown);
    setSelectedValue(e.target.value);
  };

  const onDeleteUser = (user) => {
    axiosSecure
      .delete(`http://localhost:5000/users/${user._id}`)
      .then((res) => {
        if (res.data.acknowledged || res.data.deletedCount > 0) {
          swal({
            title: "Good job!",
            text: `${user.name ? user.name : "A user"} deleted successfully!`,
            icon: "success",
            button: "Ok",
          });
          setCountDeleteItem(countDeleteItem + 1);
        }
      })
      .catch((err) => console.log(err));
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
            <a>Dashboard</a>
          </li>
          <li>
            <a>Perticipant</a>
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
                <a>Survey Perticipant</a>
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
            <section className="mt-4  overflow-auto">
              <div className="overflow-x-auto rounded-l-lg">
                <table className="table ">
                  {/* head */}
                  <thead className="">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Role</th>
                      <th>Mobile</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <img
                            src={user.Photourl}
                            className="w-10 rounded-lg"
                            alt=""
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.status === "Active" ? (
                            <>
                              <span className=" text-green-600 px-2 text-xs py-1 rounded-full bg-green-200">
                                Active
                              </span>
                            </>
                          ) : (
                            <>
                              <span className=" text-red-600 px-2 text-xs py-1 rounded-full bg-red-200">
                                Inactive
                              </span>
                            </>
                          )}
                        </td>
                        <td>{user.role}</td>
                        <td>{user.mobile == null ? "None" : user.mobile}</td>
                        <td>
                          <div className="flex gap-3 items-center">
                            <HiOutlineEye />
                            <RiDeleteBinLine
                              onClick={() => onDeleteUser(user)}
                              className="text-lg text-red-400 "
                            />
                          </div>
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

export default NewUsers;
