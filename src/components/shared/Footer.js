import moment from 'moment';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import { RiMailSendFill } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

import { MdOutlineInfo } from "react-icons/md";



function Footer() {
    return (
        <footer className="p-6 pt-28 dark:bg-neutral-800 dark:border-t dark:text-gray-100  text-white bg-neutral-900">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-2xl">Universal Survey</h2>
                    <div className='flex gap-3'>
                        <div>
                            <MdOutlineInfo className='text-2xl' />
                        </div>
                        <p>Our goal is  to simplify the process of survey creation,  distribution, and analysis, making feedback collection effortless for individuals.</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuMail className='text-2xl' /> <p>Official : universalsurvey@support.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoCallOutline className='text-2xl' /> <p>Helpline : 01313524255 , 01968547543</p>
                    </div>

                </div>
                <div className="flex flex-col space-y-4 md:ml-16">
                    <h2 className="font-medium text-2xl">Useful Links</h2>
                    <div className="flex flex-col space-y-2 text-lg text-gray-300">
                        <Link href="/">Refund policy</Link>
                        <Link href="/primary/about">About us</Link>
                        <Link href="/primary/faq">FAQ </Link>
                        <Link href="/primary/contactus" >Contact Us </Link>
                        <Link href="/primary/terms" > Terms and Conditions</Link>

                    </div>
                </div>
                <div className="flex flex-col ">
                    <h2 className="font-medium  text-2xl">Social Media Link</h2>
                    <div className="flex justify-start gap-7 text-2xl mt-4">
                        <FiFacebook />
                        <FaInstagram />
                        <LuLinkedin />
                        <FiYoutube />
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center rounded max-w-min bg-white'>
                            <input placeholder='Enter your email' className='rounded rounded-r-none outline-none  text-gray-500 py-1 pl-3 text-sm'></input>
                            <button className='p-2 rounded font-bold text-lg border dark:bg-neutral-800 bg-[#00ABE4] rounded-l-none right-28'><RiMailSendFill /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-b border-neutral-700 w-[80%] mx-auto mt-11'></div>
            <div className='w-[80%] mx-auto my-4 flex justify-between'>
                <div className='text-gray-300 flex gap-2 items-center'>
                    <p>Copyright © 2024 Universal Survey</p>
                    <RxDotFilled className='text-gray-500' />
                    <p className='text-gray-400'>Made by @WebD</p>
                </div>
                <div className='text-gray-300 items-center flex gap-2'>
                    <div className='flex items-center gap-1'>
                        <p>Privacy Policy</p><RxDotFilled className='text-gray-500' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p>Press Kit</p><RxDotFilled className='text-gray-500' />
                    </div>

                    <p>Support</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer