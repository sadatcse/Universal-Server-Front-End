'use client'
import { useContext, useEffect, useState } from 'react'
import { FaPen } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';

function Page() {
  // user from global auth
  const { user } = useContext(AuthContext);

  const [userInfo , setUserInfo] = useState({});
  const {id,name,uid,mobile,email,photoUrl,role} = userInfo;

  // getting user data 
  useEffect(() => {
    axios(`https://universal-survey-backend.vercel.app/users/${user?.email}`)
      .then((data) => setUserInfo(data.data))
      // .catch((error) => console.error(error));
  }, [user]);

  return (
    // edit user profile
    <section className="w-[90%]  mx-auto mt-3 ">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <CiUser className="text-3xl  -ml-1" />
            <h1 className="text-4xl font-bold">Profile</h1>
          </div>
          <p className="mt-2 ">Manage your personal profile</p>
        </div>
        <div className="relative">
          <img className="w-28" src="https://www.cryptopush.net/assets/frontend/theme_base/semahost/img/all/lw_img.png" alt="" />
          <div className="absolute right-0 bottom-0 z-10 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-full p-2">
            <FaPen className="text-white text-sm" />
          </div>
        </div>
      </div>

      {/* info */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* input */}
        <div>
          <p className="text-sm">Full name</p>
          <input type="text" placeholder="ex: John Smith" value={name} className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">User Id</p>
          <input type="text" disabled value={uid} placeholder=" si8Ioqx2J2TLgld5u9jwL1tXnE92" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Mobile</p>
          <input type="text" placeholder=" +88 01********8"  value={mobile !== undefined ? mobile : 'Not Provided'} className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Email</p>
          <input type="text" placeholder=" example@mail.com" value={email} className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Role</p>
          <input type="text" placeholder=" user" value={role} disabled className="border pl-4 p-2 disabled focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Password</p>
          <button className="border p-2 rounded-xl mt-1 w-full outline-none">Change Password</button>
        </div>
      </div>

      {/* save button */}
      <div className="flex justify-end mt-16">
        <button className=" px-5 hover:bg-blue-500 py-1 bg-blue-400 rounded-full text-white">Save</button>
      </div>
    </section>
  )
}

export default Page