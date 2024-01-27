'use client'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";

// using fake data now
const userData = [
  {
    "id": 1,
    "name": "John Doe",
    "status": "Active",
    "role": "Admin",
    "email": "johndoe@yahoo.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "status": "Active",
    "role": "User",
    "email": "johesmith@yahoo.com"
  },
  {
    "id": 3,
    "name": "Sam Wilson",
    "status": "Inactive",
    "role": "Guest",
    "email": "samwilson@yahoo.com"
  },
  {
    "id": 4,
    "name": "Sara Jones",
    "status": "Active",
    "role": "Moderator",
    "email": "sarajones@yahoo.com"
  },
  {
    "id": 5,
    "name": "Alex Rodriguez",
    "status": "Active",
    "role": "User",
    "email": "alexroot@yahoo.com"
  },
  {
    "id": 6,
    "name": "Emily White",
    "status": "Active",
    "role": "Editor",
    "email": "emilywhtie@yahoo.com"
  }
]

function page() {
  return (
    <section className='md:w-[95%] mx-auto'>
      <h1 className='text-xl font-bold'>User List</h1>
      {/* main div */}
      <div className='mt-6 p-4 rounded-lg border border-gray-100 shadow-sm'>
        {/* search div */}
        <div className='flex p-2 rounded-lg shadow-sm border gap-2'>
          <button className='text-2xl ml-1'><CiSearch /></button>
          <input placeholder='Search by name or email' className='text-sm outline-none w-full'></input>
        </div>
        {/* total user */}
        <div className='mt-4 text-gray-400 text-sm'>
          <h1>Total {userData.length} user</h1>
        </div>
        {/* customised table */}
        <section className='mt-4'>
          <div className="overflow-x-auto rounded-l-lg">
            <table className="table ">
              {/* head */}
              <thead className=''>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map(user =>
                    <tr>
                      <td>{user.id}</td>
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
                      <td>
                        <div className='flex gap-3 items-center'>
                          <HiOutlineEye /><RiDeleteBinLine className='text-lg text-red-400' />
                        </div>
                      </td>
                    </tr>)
                }
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  )
}

export default page