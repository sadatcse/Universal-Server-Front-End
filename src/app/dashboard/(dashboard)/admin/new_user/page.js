'use client'
import React from 'react'
import { CiSearch } from "react-icons/ci";

// using fake data now

const userData = [
  {
    "id": 1,
    "name": "John Doe",
    "status": "Active",
    "role": "Admin"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "status": "Active",
    "role": "User"
  },
  {
    "id": 3,
    "name": "Sam Wilson",
    "status": "Inactive",
    "role": "Guest"
  },
  {
    "id": 4,
    "name": "Sara Jones",
    "status": "Active",
    "role": "Moderator"
  },
  {
    "id": 5,
    "name": "Alex Rodriguez",
    "status": "Active",
    "role": "User"
  },
  {
    "id": 6,
    "name": "Emily White",
    "status": "Active",
    "role": "Editor"
  },
  {
    "id": 7,
    "name": "Michael Brown",
    "status": "Inactive",
    "role": "User"
  },
  {
    "id": 8,
    "name": "Olivia Taylor",
    "status": "Active",
    "role": "Admin"
  },
  {
    "id": 9,
    "name": "David Miller",
    "status": "Active",
    "role": "Moderator"
  },
  {
    "id": 10,
    "name": "Chloe Jackson",
    "status": "Inactive",
    "role": "Guest"
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
      </div>
    </section>
  )
}

export default page