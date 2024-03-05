import VisionCard from "./VisionCard"



function VisionAndValues() {
    return (
        <section className="my-8">
            <div className="container mx-auto flex flex-col pb-6 mb-4 md:p-10 md:px-12 dark:text-white">
                <h1 className="text-4xl font-semibold leadi text-center">Our Vision And Values</h1>
                <p className="max-w-3xl mx-auto mt-6 text-center">The goal of the Universal Survey and Engagement System is to provide a comprehensive and user-
                    friendly online survey platform that caters to the needs of different user roles – Admin, Company, and
                    User.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
                <VisionCard path="/strategy.svg" title="Define the strategy" description="Establishing clear goals, target audience, and execution plan to guide the project effectively." />
                <VisionCard path="/rocket.svg" title="Improve perfomance" description="Enhancing technical aspects like speed and reliability to ensure smooth operation and user satisfaction." />
                <VisionCard path="/customer.svg" title="Making cleaner service" description="Refining user experience by simplifying interfaces and workflows for better usability and engagement." />
                <VisionCard path="/module.svg" title="Testing and evaluation  " description="Ensuring quality and reliability through thorough testing across functionality, usability, and performance aspects." />
            </div>
        </section>
    )
}

export default VisionAndValues