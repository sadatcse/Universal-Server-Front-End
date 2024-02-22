import { FaInfoCircle, FaFileDownload, FaNewspaper } from 'react-icons/fa';

const PressKitPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Press Kit
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Welcome to our Press Kit! Find all the resources you need to cover our company and products.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center">
                        <div className="mx-4 my-6 bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                            <FaInfoCircle className="text-5xl text-blue-500 mx-auto" />
                            <h2 className="text-lg font-semibold text-gray-900">Company Overview</h2>
                            <p className="mt-2 text-base text-gray-500">Learn more about our company&apos;s mission, values, and history.</p>
                            <a href="#" className="block mt-4 text-base font-semibold text-blue-600 hover:underline"><FaFileDownload className="inline-block mr-2" />Download</a>
                        </div>
                        <div className="mx-4 my-6 bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                            <FaFileDownload className="text-5xl text-blue-500 mx-auto" />
                            <h2 className="text-lg font-semibold text-gray-900">Logo</h2>
                            <p className="mt-2 text-base text-gray-500">Download our company logo in various formats and sizes.</p>
                            <a href="#" className="block mt-4 text-base font-semibold text-blue-600 hover:underline"><FaFileDownload className="inline-block mr-2" />Download</a>
                        </div>
                        <div className="mx-4 my-6 bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                            <FaNewspaper className="text-5xl text-blue-500 mx-auto" />
                            <h2 className="text-lg font-semibold text-gray-900">Press Releases</h2>
                            <p className="mt-2 text-base text-gray-500">Access our latest press releases and announcements.</p>
                            <a href="#" className="block mt-4 text-base font-semibold text-blue-600 hover:underline"><FaFileDownload className="inline-block mr-2" />Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressKitPage;
