import Cart from '@/components/Payment/Cart';
import React from 'react';

const SingleCard = ({name , price , styled}) =>{
    return (
        <div className={`shadow-lg rounded-xl border hover:shadow-xl  p-4 px-7 ${styled&&'bg-blue-400 text-white border-none'} border-gray-100`}>
            <p className='text-center my-2 text-lg'>{name}</p>
            <p className='text-center font-bold text-4xl mt-3'>${price}</p>
            <div className={`space-y-3 text-sm  mt-9 ${styled?"text-white":'text-gray-500'}`}>
                <li>500 requests</li>
                <li>Unlimited Projects</li>
                <li>Extended free trial <span className={`border ml-2 ${styled?"text-gray-100":"text-gray-400"} text-sm px-2 rounded-md`}>For early users</span></li>
            </div>
            <div className='flex justify-center mt-16 mb-4'>
                <button className={`btn w-2/3  ${styled?'bg-white hover:bg-slate-50 hover:text-blue-500 text-blue-400 shadow':'bg-blue-400 text-white hover:bg-blue-500 shadow shadow-blue-300'} border-none`}><Cart></Cart></button>
            </div>
        </div>
    )
}

const Payment = () => {
    return (
        <section className='md:px-6 px-4'>
            {/* header */}
            <div className='text-center mt-6'>
                <h1 className='text-4xl font-semibold'>Choose your plan</h1>
                <p className='text-sm text-gray-500 mt-3 '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus jflk fak</p>
            </div>
            {/* card */}
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-9 mt-16'>
                <SingleCard name="Basic" price={10} />
                <SingleCard name="Standard" price={55} styled={true} />
                <SingleCard name="Enterprise" price={99}/>
            </div>
        </section>
    );
};

export default Payment;