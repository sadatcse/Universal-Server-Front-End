"use client"
import { useState, useEffect } from 'react';
import { FaChartBar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ResponseAnalyticsPage = () => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        // fetch
        const fetchResponseData = async () => {
   
            const Data = [
                { id: 1, surveyName: 'Customer Satisfaction', responses: 50, completionRate: '80%', averageRating: 4.2 },
                { id: 2, surveyName: 'Product Feedback', responses: 45, completionRate: '75%', averageRating: 4.5 },
                { id: 3, surveyName: 'Employee Engagement', responses: 55, completionRate: '90%', averageRating: 4.0 },
                { id: 4, surveyName: 'Website Usability', responses: 60, completionRate: '95%', averageRating: 4.8 },
                { id: 5, surveyName: 'Market Research', responses: 40, completionRate: '70%', averageRating: 4.3 },
                { id: 6, surveyName: 'Event Feedback', responses: 35, completionRate: '65%', averageRating: 4.6 },
                { id: 7, surveyName: 'Training Effectiveness', responses: 48, completionRate: '80%', averageRating: 4.1 },
                { id: 8, surveyName: 'Health & Safety', responses: 42, completionRate: '70%', averageRating: 4.4 },
                { id: 9, surveyName: 'Customer Support', responses: 58, completionRate: '85%', averageRating: 4.7 },
                { id: 10, surveyName: 'Marketing Campaign', responses: 55, completionRate: '75%', averageRating: 4.9 },
            
            ];
            setResponseData(Data);
        };

        fetchResponseData();
    }, []);

    const handleGenerateReport = () => {
        // Generate report logic here (e.g., export data to CSV or PDF)
        toast.success('Response analytics report generated successfully.');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Response Analytics
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        View analytics for survey responses.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="divide-y divide-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <h2 className="text-lg font-semibold text-gray-900">Survey Name</h2>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <h2 className="text-lg font-semibold text-gray-900">Responses</h2>
                                        <h2 className="text-lg font-semibold text-gray-900">Completion Rate</h2>
                                        <h2 className="text-lg font-semibold text-gray-900">Average Rating</h2>
                                    </div>
                                </div>
                            </div>
                            {responseData.map((data) => (
                                <div key={data.id} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-grow">
                                            <p className="text-lg text-gray-900">{data.surveyName}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-lg text-gray-900">{data.responses}</p>
                                            <p className="text-lg text-gray-900">{data.completionRate}</p>
                                            <p className="text-lg text-gray-900">{data.averageRating}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-gray-50 flex justify-end">
                            <button
                                onClick={handleGenerateReport}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FaChartBar className="mr-2" />
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponseAnalyticsPage;