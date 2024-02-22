import { FaHistory, FaFileAlt } from 'react-icons/fa';


const ActivityHistoryPage = () => {

    const activityHistory = [
      { id: 1, date: '2024-02-01', action: 'Survey Created', details: 'Survey "Customer Satisfaction" created by John Doe' },
      { id: 2, date: '2024-02-03', action: 'Survey Completed', details: 'Survey "Customer Satisfaction" completed by 50 participants' },
      { id: 3, date: '2024-02-05', action: 'Survey Exported', details: 'Survey "Customer Satisfaction" data exported as CSV file' },
      { id: 4, date: '2024-02-08', action: 'Survey Deleted', details: 'Survey "Product Feedback" deleted by Admin' },
      { id: 5, date: '2024-02-10', action: 'Survey Updated', details: 'Survey "Employee Engagement" updated with new questions' },
      { id: 6, date: '2024-02-12', action: 'Data Imported', details: 'Survey responses imported from external source' },
      { id: 7, date: '2024-02-15', action: 'Theme Updated', details: 'Dashboard theme updated to dark mode' },
      { id: 8, date: '2024-02-18', action: 'Layout Updated', details: 'Dashboard layout restructured for better user experience' },
      { id: 9, date: '2024-02-20', action: 'New User Joined', details: 'User "Emily Smith" joined as an administrator' },
      { id: 10, date: '2024-02-22', action: 'Password Reset', details: 'Password reset requested for user "JohnDoe"' },
    ];



    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <FaHistory className="inline-block text-4xl text-blue-500 mr-2" />
                  Activity History & Logs
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  View a log of recent activities and actions taken within the system.
              </p>
          </div>
          <div className="mt-10">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 bg-white border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                      <div className="mt-4">
                          {activityHistory.map(activity => (
                              <div key={activity.id} className="flex items-center justify-between border-t border-gray-200 py-2">
                                  <div>
                                      <p className="text-sm text-gray-600">{activity.date}</p>
                                      <p className="text-base font-medium text-gray-900">{activity.action}</p>
                                      <p className="text-sm text-gray-600">{activity.details}</p>
                                  </div>
                                  <div>
                                      <FaFileAlt className="text-gray-400" />
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default ActivityHistoryPage;
