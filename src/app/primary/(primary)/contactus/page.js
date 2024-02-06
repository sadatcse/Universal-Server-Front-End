import Image from "next/image";

const ContactUS = () => {
    return (
        <section className="hero container mx-auto my-16 relative overflow-hidden px-0 lg:px-24">
                <div className="p-8 flex-shrink-0 w-full  bg-blue-200 rounded-lg relative overflow-hidden text-neutral-800 z-[1]">
                    <Image width={400} height={400} src="https://i.pinimg.com/564x/4d/3a/1a/4d3a1a49fb878b60a07f4d34c06c9b1b.jpg" alt="" className='w-[300px] md:w-[500px] absolute bottom-0 -right-32 mix-blend-multiply opacity-25 rotateY z-[-1]' />
                    <h2 className='text-4xl font-bold mb-6'>Reach Us</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-neutral-800">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered dark:text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-neutral-800">Phone</span>
                            </label>
                            <input type="number" placeholder="Phone" className="input input-bordered dark:text-white" required />
                        </div>
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text text-neutral-800">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered dark:text-white" required />
                        </div>
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text text-neutral-800">Message</span>
                            </label>
                            <textarea name="" className='w-full min-h-[150px] input input-bordered dark:text-white' placeholder="Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Send</button>
                        </div>
                    </form>
                </div>
        </section>
    )
}

export default ContactUS;