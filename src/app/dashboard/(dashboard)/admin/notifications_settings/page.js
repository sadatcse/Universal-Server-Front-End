"use client"
import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const NotificationsSettingsPage = () => {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [soundNotifications, setSoundNotifications] = useState(false);
    const [notificationFrequency, setNotificationFrequency] = useState('daily');

    const handleSaveSettings = () => {
       //Backend here
        toast.success('Notification settings saved successfully.');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Notifications Settings
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Customize your notification settings below.
                    </p>
                </div>
                <div className="mt-10 max-w-lg mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <label htmlFor="email-notifications" className="text-lg font-medium text-gray-700">Email Notifications:</label>
                        <input
                            id="email-notifications"
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                            className="ml-2 h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="push-notifications" className="text-lg font-medium text-gray-700">Push Notifications:</label>
                        <input
                            id="push-notifications"
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={() => setPushNotifications(!pushNotifications)}
                            className="ml-2 h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="sound-notifications" className="text-lg font-medium text-gray-700">Sound Notifications:</label>
                        <input
                            id="sound-notifications"
                            type="checkbox"
                            checked={soundNotifications}
                            onChange={() => setSoundNotifications(!soundNotifications)}
                            className="ml-2 h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="notification-frequency" className="text-lg font-medium text-gray-700">Notification Frequency:</label>
                        <select
                            id="notification-frequency"
                            value={notificationFrequency}
                            onChange={(e) => setNotificationFrequency(e.target.value)}
                            className="ml-2 block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={handleSaveSettings}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FaSave className="mr-2" />
                            Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationsSettingsPage;
