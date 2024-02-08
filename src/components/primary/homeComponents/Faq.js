import Image from "next/image";
import Container from "../shared/Container";



const Faq = () => {
    return (
        <div>
            <Container>
                <div className="max-w-screen-lg mx-auto my-5 md:my-8 lg:my-16 space-y-10">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center">Frequently Asked Questions</h1>
                    <div className="flex flex-col-reverse md:flex-row items-center ">
                        <div className="space-y-5">
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-lg md:text-xl font-medium">
                                    How do I create a new survey?
                                </div>
                                <div className="collapse-content">
                                    <p>Explore the system&apos;s dashboard and look for options like Create a New Survey or similar. Usually, there&apos;s a button or section specifically for survey creation.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">
                                    Can I customize the appearance of my survey?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, most systems allow you to customize the look and feel of your survey. You can often change colors, fonts, and add your logo for branding.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">
                                    What types of questions can I include in my survey?
                                </div>
                                <div className="collapse-content">
                                    <p>Typically, you can include various question types such as multiple-choice, open-ended, rating scales, and more. Check the system&apos;s features to see the available options.</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Image height={500} width={500} src="https://i.ibb.co/cCD1bnP/grey-removebg-preview.png" alt="" className="hidden md:flex " />
                            <Image height={500} width={500}  src="https://i.ibb.co/dD4G85m/gb.png" alt="" className="md:hidden" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faq;