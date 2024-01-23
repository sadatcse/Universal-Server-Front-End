import Container from "../shared/Container";


const WhatPeopleSay = () => {
    return (
        <div>
            <Container>
                <h1 className=' text-center text-xl md:text-3xl font-semibold'>What People Say</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 p-2'>
                    <div className="max-w-screen-lg mx-auto my-14 md:my-20 relative rounded-lg">
                        <img src="https://i.ibb.co/35xcz2g/2514366.png" alt="" className="h-14 md:h-20 absolute -top-6 md:-top-10 left-[40%] md:left-[37%]" />
                        <div className="h-80 bg-gray-400 rounded-xl p-2 md:p-5 flex items-center justify-center">
                            <p className="text-gray-800 text-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto my-14 md:my-20 relative rounded-lg">
                        <img src="https://i.ibb.co/35xcz2g/2514366.png" alt="" className="h-14 md:h-20 absolute -top-6 md:-top-10 left-[40%] md:left-[37%]" />
                        <div className="h-80 bg-gray-400 rounded-xl p-2 md:p-5 flex items-center justify-center">
                            <p className="text-gray-800 text-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto my-14 md:my-20 relative rounded-lg">
                        <img src="https://i.ibb.co/35xcz2g/2514366.png" alt="" className="h-14 md:h-20 absolute -top-6 md:-top-10 left-[40%] md:left-[37%]" />
                        <div className="h-80 bg-gray-400 rounded-xl p-2 md:p-5 flex items-center justify-center">
                            <p className="text-gray-800 text-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default WhatPeopleSay;