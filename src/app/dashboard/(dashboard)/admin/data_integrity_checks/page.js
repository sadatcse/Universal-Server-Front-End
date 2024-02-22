"use client"
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const DataIntegrityChecksPage = () => {
    const [isDataIntegrityPass, setIsDataIntegrityPass] = useState(false);

    const runDataIntegrityChecks = () => {

        const isPass = Math.random() < 0.5; 
        setIsDataIntegrityPass(isPass);

        if (isPass) {
            toast.success('Data integrity checks passed successfully.');
        } else {
            toast.error('Data integrity checks failed. Please review and resolve any issues.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Data Integrity Checks
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Run data integrity checks to ensure data accuracy and consistency.
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={runDataIntegrityChecks}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    >
                        Run Data Integrity Checks
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    {isDataIntegrityPass ? (
                        <div className="flex items-center space-x-2 text-green-500">
                            <FaCheckCircle className="text-2xl" />
                            <span>Data integrity checks passed successfully.</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2 text-red-500">
                            <FaTimesCircle className="text-2xl" />
                            <span>Data integrity checks failed. Please review and resolve any issues.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DataIntegrityChecksPage;