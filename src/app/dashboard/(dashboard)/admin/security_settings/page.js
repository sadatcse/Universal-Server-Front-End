"use client"
import { useState } from 'react';
import { FaLock, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const SecuritySettingsPage = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [mobileNotifications, setMobileNotifications] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handleSaveSettings = () => {
       //fake for demonstration
        toast.success('Security settings saved successfully.');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Security Settings
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Manage your account security settings here.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="divide-y divide-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <h2 className="text-lg font-semibold text-gray-900">Email Notifications</h2>
                                        <p className="mt-1 text-sm text-gray-500">Receive email notifications for account activities.</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={emailNotifications}
                                            onChange={() => setEmailNotifications(!emailNotifications)}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <h2 className="text-lg font-semibold text-gray-900">Mobile Notifications</h2>
                                        <p className="mt-1 text-sm text-gray-500">Receive mobile notifications for account activities.</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={mobileNotifications}
                                            onChange={() => setMobileNotifications(!mobileNotifications)}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <h2 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h2>
                                        <p className="mt-1 text-sm text-gray-500">Enhance your account security with two-factor authentication.</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={twoFactorAuth}
                                            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex justify-end">
                            <button
                                onClick={handleSaveSettings}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettingsPage;
