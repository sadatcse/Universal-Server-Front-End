'use client'
import { AuthContext } from '@/providers/AuthProvider';
import axios from 'axios';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";

function Page() {
  // user from global auth
  const { user } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState('');
  const [imagePreview , setImagePreview ] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const { id, name, uid, mobile, email, Photourl, role } = userInfo;

  // getting user data 
  useEffect(() => {
    axios(`https://universal-survey-backend.vercel.app/users/${user?.email}`)
      .then((data) => setUserInfo(data.data))
    // .catch((error) => console.error(error));
  }, [user]);
  


  // functions
  const handleOnImageChange = e => {
    const imageFile = e.target.files[0];
    setImagePreview(URL.createObjectURL(imageFile));
    setSelectedImage(imageFile);
  }

  // const handleSave = () => {
  //   if (selectedImage) {
  //     // Getting image link through Image BB
  //     const apiKey = '23255cbd1487870b7fe3fe227a71663b';
  //     const imageFile = e.target.files[0];
  //     const formData = new FormData();
  //     formData.append('image', imageFile);
  //     formData.append('key', apiKey);
  //     fetch('https://api.imgbb.com/1/upload', {
  //       method: 'POST',
  //       body: formData
  //     }).then(response => response.json())
  //       .then(data => {
  //         console.log(data.data.url);
  //       })
  //   }
  // }

  return (
    // edit user profile
    <section className="w-[96%]  mx-auto mt-3 ">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            {/* <CiUser className="text-3xl  -ml-1" /> */}
            <h1 className="text-4xl font-semibold">Perticipant Profile</h1>
          </div>
          <p className="mt-2 ">Manage your personal profile</p>
        </div>
        <div className="relative">
          {Photourl?<><img className="w-28 h-28 rounded-full" src={ imagePreview || Photourl} alt="" /></>:<><div className="skeleton w-28 h-28 rounded-full"></div></>}
          <div className="absolute right-0 bottom-0 z-10 bg-blue-400  rounded-full p-2">
            <FaPen className="text-white text-sm" />
          </div>
          {/* hidden file input */}
          <form onChange={handleOnImageChange} className=''>
            <input type="file" name="newImage" className='absolute w-7 opacity-0  rounded-full right-0 bottom-0 z-20' id="" />
          </form>
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
          <input type="text" placeholder=" +88 01********8" value={mobile !== undefined ? mobile : 'Not Provided'} className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Email</p>
          <input type="text" placeholder=" example@mail.com" value={email} className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Role</p>
          <input type="text" placeholder="Survey Participient" value={role} disabled className="border pl-4 p-2 disabled focus:border-blue-400 rounded-xl mt-1 w-full outline-none " />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Password</p>
          <Link isSubRoute={false} href="/dashboard/change_password" ><button className="border p-2 rounded-xl mt-1 w-full outline-none">Change Password</button></Link>
          
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