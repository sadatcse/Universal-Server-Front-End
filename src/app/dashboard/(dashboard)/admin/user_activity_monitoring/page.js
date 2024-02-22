"use client"
import { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const UserActivityMonitoring = () => {

    const [activityLogs, setActivityLogs] = useState([
        { id: 1, user: 'John Doe', date: '2024-02-10', time: '09:30:00', action: 'Login' },
        { id: 2, user: 'Alice Smith', date: '2024-02-11', time: '10:15:00', action: 'Logout' },
        { id: 3, user: 'Bob Johnson', date: '2024-02-12', time: '11:45:00', action: 'Viewed Dashboard' },

    ]);


    useEffect(() => {
//add 
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        User Activity Monitoring
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        View logs of user activity on the platform.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {activityLogs.map(log => (
                                    <tr key={log.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <FaUser className="h-6 w-6 text-gray-400" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{log.user}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{log.date}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{log.time}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{log.action}</div>
                                        </td>
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

export default UserActivityMonitoring;