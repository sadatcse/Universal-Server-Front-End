"use client"
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import logo from "../../Asset/logo2.png";


const Navbar = () => {
  const { userRole, setUserRole, setThemMode, themMode } = useContext(AuthContext);
  const navlinks = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/primary/about">About us</Link></li>
    <li><Link href="/primary/faq">FAQ </Link></li>
    <li><Link href="/primary/contactus" >Contact Us </Link></li>
    <li>
      <details className="dropdown text-inherit h-[35px] ">
        <summary className="m-1 btn bg-transparent shadow-none hover:bg-transparent border-none dark:text-white">Dashboard</summary>
        <ul className="p-2 menu dropdown-content z-[1] rounded-box w-52 dark:bg-blue-200 text-neutral-800">
          <li onClick={() => setUserRole("Survey Participant")} ><Link href="/dashboard/user/available_surveys">Survey Participant</Link></li>
          <li onClick={() => setUserRole("Administrator")}><Link href="/dashboard/admin/system_statistics">Administrator</Link></li>
          <li onClick={() => setUserRole("Survey Creator")}> <Link href="/dashboard/company/creator_profile">Survey Creator</Link></li>

        </ul>
      </details>
    </li>

  </>

  useEffect(() => {
    const header = document.getElementById("header");
    const nav_menu = document.getElementById("nav-menu");
    const logo_name = document.getElementById("logo_name");
    const menu_icon = document.getElementById("menu_icon");
    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY;
      if (scrolling > 300) {
        // navbar style
        header.classList.add("fixed", "top-0", "bg-blue-200", "dark:text-neutral-800");
        header.classList.remove("relative", "bg-transparent", "dark:lg:text-white");
        // navbar menu style
        nav_menu.classList.add("dark:text-neutral-800");
        nav_menu.classList.remove("dark:text-white");
        logo_name.classList.remove("dark:text-white");
        logo_name.classList.add("dark:text-neutral-800");
        menu_icon.classList.remove("dark:text-white");
        menu_icon.classList.add("dark:text-neutral-800");
      } else {
        header.classList.add("relative", "bg-transparent", "dark:text-white");
        header.classList.remove("fixed", "top-0", "bg-blue-200", "dark:text-neutral-800");
        nav_menu.classList.add("dark:text-white");
        logo_name.classList.add("dark:text-white");
        logo_name.classList.remove("dark:text-neutral-800");
        menu_icon.classList.add("dark:text-white");
        menu_icon.classList.remove("dark:text-neutral-800");
      }
    })


  }, [])

  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap items-center z-50 w-full top-0 left-0 text-sm bg-transparent transition-all duration-500 relative" id="header" >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden dark:text-white" id="menu_icon">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center dark:bg-blue-200 dark:text-neutral-800 ">
              {navlinks}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl hover:bg-transparent dark:bg-blue-200"><Image className="w-16 mix-blend-multiply dark:mix-blend-normal" width={400} height={400} src={logo} alt="logo" /> <span className="font-exo  hidden sm:block dark:text-neutral-800 font-permanent" >Universal Survey</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center dark:bg-blue-200  dark:lg:bg-transparent dark:text-white " id='nav-menu'>
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate dark:text-white mr-16"  >

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={(e)=> setThemMode(!themMode)} defaultChecked={themMode} />

            {/* sun icon */}
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
          <Link href="/primary/join" className="btn btn-neutral">Join Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;