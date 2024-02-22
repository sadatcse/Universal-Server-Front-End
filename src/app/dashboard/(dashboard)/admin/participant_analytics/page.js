"use client"
import { useState, useEffect } from 'react';
import { FaChartBar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ParticipantAnalyticsPage = () => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
          //replace here any 
            const Data = [
                { id: 1, name: 'Participant 1', responses: 25, completionRate: '75%', satisfactionScore: 4.5 },
                { id: 2, name: 'Participant 2', responses: 30, completionRate: '90%', satisfactionScore: 4.8 },
                { id: 3, name: 'Participant 3', responses: 20, completionRate: '60%', satisfactionScore: 4.0 },
                { id: 4, name: 'Participant 4', responses: 35, completionRate: '80%', satisfactionScore: 4.2 },
                { id: 5, name: 'Participant 5', responses: 28, completionRate: '70%', satisfactionScore: 4.6 },
                { id: 6, name: 'Participant 6', responses: 22, completionRate: '55%', satisfactionScore: 3.9 },
                { id: 7, name: 'Participant 7', responses: 32, completionRate: '95%', satisfactionScore: 4.9 },
                { id: 8, name: 'Participant 8', responses: 18, completionRate: '45%', satisfactionScore: 3.7 },
                { id: 9, name: 'Participant 9', responses: 27, completionRate: '65%', satisfactionScore: 4.3 },
                { id: 10, name: 'Participant 10', responses: 31, completionRate: '85%', satisfactionScore: 4.7 },
                // Add more fake data as needed
            ];
            setParticipants(Data);
        };

        fetchData();
    }, []);

    const handleGenerateReport = () => {
        // Generate report logic here (e.g., export data to CSV or PDF)
        toast.success('Report generated successfully.');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Participant Analytics
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        View analytics for participant engagement and satisfaction.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Participant Data</h2>
                        <button
                            onClick={handleGenerateReport}
                            className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FaChartBar className="mr-2" />
                            Generate Report
                        </button>
                    </div>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responses</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Rate</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction Score</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {participants.map((participant) => (
                                    <tr key={participant.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{participant.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{participant.responses}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{participant.completionRate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{participant.satisfactionScore}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipantAnalyticsPage;