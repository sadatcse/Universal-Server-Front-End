import SingleCard from "@/components/Payment/SingleCard";

const Payment = () => {
  return (
    <section className="md:px-6 px-4">
      {/* header */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-semibold">Choose your plan</h1>
        <p className="text-sm text-gray-500 mt-3 ">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus
          jflk fak
        </p>
      </div>
      {/* card */}
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-9 mt-16">
        <SingleCard name="Basic" price={10} />
        <SingleCard name="Standard" price={55} styled={true} />
        <SingleCard name="Enterprise" price={99} />
      </div>
    </section>
  );
};

export default Payment;
