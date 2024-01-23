import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"
import moment from 'moment';

function Footer() {
    return (
        <footer className="p-6 dark:bg-gray-800 dark:text-gray-100  text-white bg-neutral-800 mt-12">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-2xl">Online Survey</h2>
                    <p className="text-gray-500">In publishing and graphic design, Lorem ipsum is a placeholder text co</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Utility-First</a>
                        <a rel="noopener noreferrer" href="#">Responsive Design</a>
                        
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#">Configuration</a>
                        <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                        <a rel="noopener noreferrer" href="#">Breakpoints</a>
                        
                        
                    </div>
                </div>
                <div className="flex flex-col my-6">
                    <h2 className="font-semibold text-2xl text-center">Get in touch</h2>
                    <div className="flex justify-center gap-4 text-sm dark:text-gray-400 mt-4 text-neutral-800">
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaGithub /></a>
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaLinkedin /></a>
                        <a className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center text-3xl" href="#"><FaFacebookF /></a>
                        
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-400 bg-neutral-950 px-10 py-2">© Copyright 2023-{moment().format('YYYY')}. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer