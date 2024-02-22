"use client"
import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const GeneralSettingsPage = () => {
    const [settings, setSettings] = useState({
        enableNotifications: false,
        enableDarkMode: false,
        language: 'en',
        timeZone: 'UTC',
    });

    const handleSaveSettings = () => {
        //Backend Here
        toast.success('Settings saved successfully.');
    };

    const handleToggleNotification = () => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            enableNotifications: !prevSettings.enableNotifications,
        }));
    };

    const handleToggleDarkMode = () => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            enableDarkMode: !prevSettings.enableDarkMode,
        }));
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setSettings((prevSettings) => ({
            ...prevSettings,
            language: selectedLanguage,
        }));
    };

    const handleTimeZoneChange = (event) => {
        const selectedTimeZone = event.target.value;
        setSettings((prevSettings) => ({
            ...prevSettings,
            timeZone: selectedTimeZone,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        General Settings
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Customize your general settings below.
                    </p>
                </div>
                <div className="mt-10 max-w-lg mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <label htmlFor="enable-notifications" className="text-lg font-medium text-gray-700">Enable Notifications:</label>
                        <input
                            id="enable-notifications"
                            type="checkbox"
                            checked={settings.enableNotifications}
                            onChange={handleToggleNotification}
                            className="ml-2 h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="enable-dark-mode" className="text-lg font-medium text-gray-700">Enable Dark Mode:</label>
                        <input
                            id="enable-dark-mode"
                            type="checkbox"
                            checked={settings.enableDarkMode}
                            onChange={handleToggleDarkMode}
                            className="ml-2 h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="language" className="text-lg font-medium text-gray-700">Language:</label>
                        <select
                            id="language"
                            value={settings.language}
                            onChange={handleLanguageChange}
                            className="ml-2 block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="time-zone" className="text-lg font-medium text-gray-700">Time Zone:</label>
                        <select
                            id="time-zone"
                            value={settings.timeZone}
                            onChange={handleTimeZoneChange}
                            className="ml-2 block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="UTC">UTC</option>
                            <option value="EST">EST</option>
                            <option value="PST">PST</option>
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

export default GeneralSettingsPage;
