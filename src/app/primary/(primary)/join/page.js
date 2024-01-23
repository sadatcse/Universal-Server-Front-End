"use client"
import { useState } from "react";

const Join = () => {
    const [visibility, setVisibility] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className="flex flex-col justify-center items-center gap-6 md:gap-10 mt-24">
            
            <div className="md:border rounded md:shadow md:pt-8 pb-8 px-5 md:w-96">
                <h1 className="text-3xl mb-2 font-medium text-center md:text-left">Join us</h1>
                <p className="text-sm mb-5 text-center md:text-left">Stay updated on your professional world</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 mb-3">
                        <input type="email" name="email" className="w-full outline-none focus:border-blue-400 text-base border p-3 rounded" placeholder="Email or Phone" />
                        <div className="relative">
                            <input name="password" className="w-full focus:border-blue-400  text-base outline-none border p-3 rounded" type={visibility ? 'text' : 'password'} placeholder="Password" />
                            <p onClick={() => setVisibility(!visibility)} className="absolute cursor-pointer font-semibold hover:text-blue-300 text-blue-400 right-5  bottom-3">{visibility ? 'hide' : 'show'}</p>
                        </div>
                    </div>
                    <p className="font-semibold text-blue-400">Forgot password?</p>
                    <p className="text-xs mt-4">By clicking Continue, you agree to our <span className="font-semibold text-blue-400">User  Agreement</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">Sign up</button>
                </form>
                <div className="flex items-center py-1 justify-between mb-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <button className="w-full font-medium border py-3 rounded-full flex hover:bg-slate-50 justify-center items-center gap-3"><p>Continue with Google</p></button>
            </div>
            <div>
                <p>Already have an account ? <span className="text-blue-400 cursor-pointer font-semibold">Login now</span> </p>
            </div>
        </div>
    );
};

export default Join