import { FaCog } from 'react-icons/fa';
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <FaCog className="inline-block text-4xl text-blue-500 mr-2" />
                Preferences
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Customize your preferences to tailor your Universal Survey experience.
            </p>
        </div>
        <div className="mt-10">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="ml-2 text-gray-700">Receive email notifications</span>
                        </label>
                    </div>
                    <div className="mt-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="ml-2 text-gray-700">Receive SMS notifications</span>
                        </label>
                    </div>
                </div>
                <div className="p-6 bg-white border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Survey Preferences</h2>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="ml-2 text-gray-700">Enable survey reminders</span>
                        </label>
                    </div>
                    <div className="mt-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                            <span className="ml-2 text-gray-700">Automatically close surveys after a deadline</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}




