"use client";
import useAxiosPublic from "@/Hook/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import logo from "../../../../Asset/d.png";

function Join() {
  const axiosPublic = useAxiosPublic();
  const {
    createUser,
    signInWithGoogle,
    loading,
    setLoading,
    signInWithGithub,
  } = useContext(AuthContext);
  const captchaInput = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleCaptcha = () => {
    if (captchaInput.current.value.length === 6) {
      if (validateCaptcha(captchaInput.current.value)) {
        console.log("captcha is", false);
        setIsDisabled(false);
      } else {
        console.log("captcha is", true);
        setIsDisabled(true);
      }
    } else {
      console.log("captcha is", true);
      setIsDisabled(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      const userinfo = {
        name: result.user?.displayName,
        uid: result.user?.uid,
        mobile: result.user?.phoneNumber,
        email: result.user?.email,
        Photourl: result.user?.photoURL,
        role: "Survey Participant",
      };

      console.log(userinfo);

      const response = await axiosPublic.post("/users", userinfo);

      if (response.status === 200) {
        toast.success("Login successful!");
        router.push("/", { scroll: false });
      } else {
        toast.error("Failed to Login. Please try again.");
      }
    } catch (error) {
      toast.error("Social login failed. Please try again later.");
      console.error(error);
    }
  };

  // const handleGihubSignIn  = async () => {
  //     setLoading(true);
  //     try {
  //         const githubResult = await signInWithGithub();

  //         const userinfo = {
  //             name: githubResult.data.user?.displayName,
  //             email: githubResult.data.user?.email,
  //             role: 'Survey Participant',
  //         };

  //         const response = await axiosPublic.post('/users', userinfo);

  //         if (response.status === 200) {
  //             toast.success("User signed in successfully!", {
  //                 duration: 4000,
  //                 position: 'top-right',
  //             });
  //             router.push('/', { scroll: false });
  //         } else {
  //             toast.error("Failed to create user. Please try again.");
  //         }

  //         setLoading(false);
  //     } catch (err) {
  //         setLoading(false);
  //         toast.error('Error during sign-in. Please try again.');

  //         console.error(err);
  //     }
  // };

  const handleCreateInUser = async (data) => {
    setLoading(true);
    try {
      const result = await createUser(data.email, data.password);

      const userinfo = {
        name: result.user?.displayName,
        uid: result.user?.uid,
        mobile: result.user?.phoneNumber,
        email: result.user?.email,
        Photourl: result.user?.photoURL,
        role: "Survey Participant",
      };

      const response = await axiosPublic.post("/users", userinfo);

      if (response.status === 200) {
        toast.success("User created successfully!", {
          duration: 2000,
          position: "top-right",
        });
        router.push("/", { scroll: false });
      } else {
        toast.error("Failed to Login. Please try again.");
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Error creating user. Please try again.");
      console.log(err);
    }
  };
  return (
    <div className="pt-20 -mb-2 relative bg-blue-200 z-[1] dark:bg-transparent">
      <div
        className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')",
        }}
      ></div>
      <div className="py-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl items-center bg-white ">
          <Image
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1637276661836-9ca7bf61eb0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people image"
            className="bg-neutral hidden md:block"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              <Image
                className="w-32 mix-blend-multiply mx-auto"
                width={400}
                height={400}
                src={logo}
                alt="logo"
              />
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Registration Now !
            </p>
            <a
              href="#"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign up with Google
              </h1>
            </a>
            {/* <a href="#" onClick={handleGihubSignIn} className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3" >
                                <FaGithub className="text-4xl" />
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Github</h1>
                        </a> */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or Registration with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit(handleCreateInUser)}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="mt-4 relative">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  })}
                />
                <button
                  className="absolute bottom-3 right-2"
                  type="button"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <AiFillEye className="text-xl" />
                  ) : (
                    <AiFillEyeInvisible className="text-xl" />
                  )}
                </button>

                {errors.password?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                    Minimum eight characters, at least one letter and one
                    number.
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <LoadCanvasTemplate />
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  ref={captchaInput}
                  onChange={handleCaptcha}
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className={` text-white font-bold py-2 px-4 w-full rounded ${
                    isDisabled ? "btn-disabled bg-gray-300" : "bg-gray-700"
                  }`}
                >
                  Registration
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                href="/primary/login"
                className="text-xs text-gray-500 uppercase"
              >
                or sign in
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
