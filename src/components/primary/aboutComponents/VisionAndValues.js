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
                <VisionCard path="/strategy.svg" title="Define the strategy" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/rocket.svg" title="Improve perfomance" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/customer.svg" title="Making cleaner service" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/module.svg" title="Testing and evaluation  " description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
            </div>
        </section>
    )
}

export default VisionAndValues