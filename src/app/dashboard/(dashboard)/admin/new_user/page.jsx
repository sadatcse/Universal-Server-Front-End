'use client'
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";


function NewUsers() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('https://universal-survey-backend.vercel.app/users')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [])
  return (
    <section className='md:w-[95%] mx-auto'>
      <h1 className='text-xl font-bold'>User List</h1>
      <div className="text-xs mt-2 text-gray-500 breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Dasboard</a></li>
          <li><a>All user inf...</a></li>
          <li><a>New user</a></li>
        </ul>
      </div>
      {/* main div */}
      <div className='mt-4 p-4 rounded-lg border border-gray-100 shadow-sm'>
        {/* search div */}
        <div className='flex p-2 rounded-lg shadow-sm border gap-2'>
          <button className='text-2xl ml-1'><CiSearch /></button>
          <input placeholder='Search by name or email' className='text-sm outline-none w-full'></input>
        </div>
        {/* total user */}
        <div className='mt-4 text-gray-400 text-sm'>
          <h1>Total {userData.length} user</h1>
        </div>
        {userData.length == 0 ?
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
          : <>
            {/* customised table */}
            <section className='mt-4  overflow-auto'>
              <div className="overflow-x-auto rounded-l-lg">
                <table className="table ">
                  {/* head */}
                  <thead className=''>
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
                    {
                      userData.map(user =>
                        <tr key={user._id}>
                          <td><img src={user.Photourl} className='w-10 rounded-lg' alt="" /></td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.status === 'Active' ?
                            <>
                              <span className=' text-green-600 px-2 text-xs py-1 rounded-full bg-green-200'>Active</span>
                            </>
                            :
                            <>
                              <span className=' text-red-600 px-2 text-xs py-1 rounded-full bg-red-200'>Inactive</span>
                            </>}</td>
                          <td>{user.role}</td>
                          <td>{user.mobile == null ? 'None' : user.mobile}</td>
                          <td>
                            <div className='flex gap-3 items-center'>
                              <HiOutlineEye /><RiDeleteBinLine className='text-lg text-red-400 ' />
                            </div>
                          </td>
                        </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </section>
          </>
        }
      </div>
    </section>
  )
}

export default NewUsers
