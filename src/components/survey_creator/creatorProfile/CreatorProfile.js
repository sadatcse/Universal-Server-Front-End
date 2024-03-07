"use client";
import UseAxioSecure from "@/Hook/UseAxioSecure";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";
import swal from "sweetalert";

function CreatorProfile() {
  // user from global auth
  const { user, userRole, currentUser, setCurrentUser, setUserRole } =
    useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const axiosSecure = UseAxioSecure();
  // functions
  const handleOnImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImagePreview(URL.createObjectURL(imageFile));
    setSelectedImage(imageFile);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const role = e.target.role.value;

    let userObject = {
      name,
      uid: user?.uid,
      mobile,
      email,
      role,
    };

    if (selectedImage) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=23255cbd1487870b7fe3fe227a71663b`,
          { image: selectedImage },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          userObject = {
            ...userObject,
            Photourl: res.data.data.display_url,
          };
          axiosSecure
            .patch(`/users/${currentUser?._id}`, userObject)
            .then((response) => {
              if (response.status === 200) {
                delete currentUser?.Photourl;
                setCurrentUser({
                  ...currentUser,
                  Photourl: res.data.data.display_url,
                });
                swal({
                  title: "Good job!",
                  text: "Your Profile has been updated!",
                  icon: "success",
                  button: "Ok",
                });
                setUserRole(role);
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    } else {
      axiosSecure
        .patch(`/users/${currentUser?._id}`, userObject)
        .then((response) => {
          if (response.status === 200) {
            swal({
              title: "Good job!",
              text: "Your Profile has been updated!",
              icon: "success",
              button: "Ok",
            });
            setUserRole(role);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    // edit user profile
    <section className="w-[96%]  mx-auto mt-3 ">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            {/* <CiUser className="text-3xl  -ml-1" /> */}
            <h1 className="text-xl md:text-4xl font-semibold">
              Survey Creator Profile
            </h1>
          </div>
          <p className="mt-1 text-sm">Manage your personal profile</p>
        </div>
        <div className="relative">
          {currentUser?.Photourl || imagePreview ? (
            <>
              <img
                className="w-28 h-28 rounded-full"
                src={imagePreview || currentUser?.Photourl}
                alt=""
              />
            </>
          ) : (
            <>
              <div className="skeleton w-28 h-28 rounded-full"></div>
            </>
          )}
          <div className="absolute right-0 bottom-0 z-10 bg-blue-500  rounded-full p-2  ">
            <FaPen className="text-white text-sm" />
          </div>
          {/* hidden file input */}
          <form onChange={handleOnImageChange} className="">
            <input
              type="file"
              name="newImage"
              className="absolute w-7 opacity-0  rounded-full right-0 bottom-0 z-20 cursor-pointer"
              id=""
            />
          </form>
        </div>
      </div>

      {/* info */}
      <form
        onSubmit={handleSave}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"
      >
        {/* input */}
        <div>
          <p className="text-sm">Full name</p>
          <input
            type="text"
            placeholder="ex: John Smith"
            value={currentUser?.name}
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none "
            name="name"
          />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Mobile</p>
          <input
            type="text"
            placeholder=" +88 01********8"
            value={
              currentUser?.mobile !== undefined
                ? currentUser?.mobile
                : "Not Provided"
            }
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none "
            name="mobile"
          />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Email</p>
          <input
            type="text"
            placeholder=" example@mail.com"
            value={currentUser?.email}
            className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full outline-none "
            name="email"
          />
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Role</p>
          <select
            className="select select-bordered w-full"
            name="role"
            defaultValue="Bangladesh"
          >
            <option
              value="Survey Participant"
              selected={userRole === "Survey Participant"}
            >
              Survey Participant
            </option>
            <option
              value="Survey Creator"
              selected={userRole === "Survey Creator"}
            >
              Survey Creator
            </option>
            <option
              value="Administrator"
              selected={userRole === "Administrator"}
            >
              Administrator
            </option>
          </select>
        </div>
        {/* input */}
        <div>
          <p className="text-sm">Password</p>
          <Link isSubRoute={false} href="/dashboard/change_password">
            <button className="border p-2 rounded-xl mt-1 w-full outline-none">
              Change Password
            </button>
          </Link>
        </div>
        {/* save button */}
        <div className="flex justify-center items-center mt-5">
          <button className="btn btn-neutral text-white" type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatorProfile;
