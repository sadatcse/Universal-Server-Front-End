"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../Asset/logo2.png";


const Navbar = () => {

  const navlinks = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/primary/about">About us</Link></li>
    <li><Link href="/primary/contactus">Contact Us </Link></li>
    <li><Link href="/primary/faq">FAQ </Link></li>
    <li><Link href="/primary/login">Login </Link></li>
    <li><Link href="/primary/registration">Register </Link></li>

  </>

  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY;
      if (scrolling > 300) {

        header.classList.add("fixed", "top-0", "bg-blue-100","py-0");
        header.classList.remove("relative","bg-transparent");
      } else {
        header.classList.add("relative","bg-transparent", "py-3");
        header.classList.remove("fixed", "top-0", "bg-blue-100");

      }
    })
  }, [])

  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full top-0 left-0 text-sm bg-transparent transition-all duration-500 relative" id="header" >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl"><Image className="w-16 mix-blend-multiply" width={400} height={400} src={logo} alt="logo" /> <span className="font-exo">Universal Survey</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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