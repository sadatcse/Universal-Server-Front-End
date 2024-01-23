import VisionCard from "@/components/aboutComponents/VisionCard"


function VisionAndValues() {
    return (
        <section className="my-8">
            <div className="container mx-auto flex flex-col pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                <VisionCard path="/strategy.svg" title="Define the strategy" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/rocket.svg" title="Improve perfomance" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/customer.svg" title="Making cleaner service" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path="/module.svg" title="Testing and evaluation  " description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
            </div>
        </section>
    )
}

export default VisionAndValues