import moment from 'moment';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="p-6 dark:bg-gray-800 dark:text-gray-100  text-white bg-neutral-800">
            <div className="container grid  grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 ">
                <div className="flex flex-col space-y-4">
                <h2 className="font-bold text-2xl">Universal Survey</h2>
                    <p>Our goal is  to simplify the process of survey creation, distribution, and analysis, making feedback collection effortless for individuals.</p>

                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Public Pages</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <Link href="/">Home</Link>
                        <Link href="/primary/about">About us</Link>
                        <Link href="/primary/faq">FAQ </Link>
                        <Link href="/primary/contactus" >Contact Us </Link>

                    </div>
                </div>
                <div className="flex flex-col my-6">
                    <h2 className="font-semibold text-2xl text-center">Get in touch</h2>
                    <div className="flex justify-center gap-4 text-sm  mt-4 text-neutral-800">
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaGithub /></a>
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaLinkedin /></a>
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaFacebookF /></a>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className=" bg-neutral-950 px-10 py-2">© Copyright 2023-{moment().format('YYYY')}. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer