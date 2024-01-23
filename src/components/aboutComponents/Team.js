import Image from 'next/image';


const Team = () => {
    return (
        <div className='space-y-6 mb-12'>
            <h1 className='text-4xl font-bold'>Meet the team</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de</p>
            <div className="grid grid-cols-4">
                <div className='flex flex-col items-center p-12'>
                    <Image alt="" src={'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph'} className='w-[100px] h-[100px] rounded-full object-cover object-center' width={100} height={100}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='flex flex-col items-center p-12'>
                    <Image alt="" src={'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph'} className='w-[100px] h-[100px] rounded-full object-cover object-center' width={100} height={100}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='flex flex-col items-center p-12'>
                    <Image alt="" src={'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph'} className='w-[100px] h-[100px] rounded-full object-cover object-center' width={100} height={100}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
                <div className='flex flex-col items-center p-12'>
                    <Image alt="" src={'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph'} className='w-[100px] h-[100px] rounded-full object-cover object-center' width={100} height={100}></Image>
                    <h1>Name : Rock </h1>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>
    );
};

export default Team;