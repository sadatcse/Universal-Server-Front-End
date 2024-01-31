"use client"
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import logo from "../../Asset/logo2.png";


const Navbar = () => {
  const {userRole, setUserRole} = useContext(AuthContext);
  console.log(userRole)
  const navlinks = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/primary/about">About us</Link></li>
    <li><Link href="/primary/faq">FAQ </Link></li>
    <li><Link href="/primary/contactus" >Contact Us </Link></li>
    <li>
      <details className="dropdown text-inherit h-[35px]">
        <summary className="m-1 btn bg-transparent shadow-none hover:bg-transparent border-none">Dashboard</summary>
        <ul className="p-2 menu dropdown-content z-[1] rounded-box w-52 dark:bg-blue-200 text-neutral-800">
          <li onClick={()=> setUserRole("user")}><Link href="/dashboard/user/user_statistics">User</Link></li>
          <li onClick={()=> setUserRole("admin")}><Link href="/dashboard/admin/survey_statistics">Admin</Link></li>
          <li onClick={()=> setUserRole("company")}> <Link href="/dashboard/company/company_statistics">Company</Link></li>
          
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
        header.classList.add("fixed", "top-0", "bg-blue-200","dark:text-neutral-800");
        header.classList.remove("relative", "bg-transparent", "dark:lg:text-white");
        // navbar menu style
        nav_menu.classList.add("dark:text-neutral-800");
        nav_menu.classList.remove("dark:text-white");
        logo_name.classList.remove("dark:text-white");
        logo_name.classList.add("dark:text-neutral-800");
        menu_icon.classList.remove("dark:text-white");
        menu_icon.classList.add("dark:text-neutral-800");
      } else {
        header.classList.add("relative", "bg-transparent","dark:text-white");
        header.classList.remove("fixed", "top-0", "bg-blue-200","dark:text-neutral-800");
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
          <Link href="/" className="btn btn-ghost text-xl hover:bg-transparent dark:bg-blue-200"><Image className="w-16 mix-blend-multiply dark:mix-blend-normal" width={400} height={400} src={logo} alt="logo" /> <span className="font-exo  hidden sm:block dark:text-neutral-800" >Universal Survey</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center dark:bg-blue-200  dark:lg:bg-transparent dark:text-white " id='nav-menu'>
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/primary/join" className="btn btn-neutral">Join Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;