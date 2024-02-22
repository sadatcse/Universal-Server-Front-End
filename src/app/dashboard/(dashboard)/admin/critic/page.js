import { FaExclamationTriangle } from 'react-icons/fa';

const CriticalAlertsPage = () => {
 
    const criticalAlerts = [
      { id: 1, date: '2024-02-05', message: 'Server outage detected, investigate immediately' },
        { id: 2, date: '2024-02-10', message: 'System vulnerability discovered, urgent patch required' },
        { id: 3, date: '2024-02-15', message: 'Database connection errors reported, troubleshoot ASAP' },
        { id: 4, date: '2024-02-20', message: 'Disk space running low, take action to prevent data loss' },
        { id: 5, date: '2024-02-25', message: 'Unusual network activity detected, investigate security breach' },
        { id: 6, date: '2024-02-28', message: 'Authentication server down, users unable to log in' },
        { id: 7, date: '2024-02-29', message: 'Database backup failed, urgent investigation required' },
        { id: 8, date: '2024-02-29', message: 'Payment gateway integration error, transactions not processing' },
        { id: 9, date: '2024-03-03', message: 'Critical security patch released, apply immediately' },
        { id: 10, date: '2024-03-05', message: 'Server resource exhaustion, performance degradation observed' },
        { id: 11, date: '2024-03-08', message: 'Unauthorized access detected, investigate potential breach' },
        { id: 12, date: '2024-03-10', message: 'Configuration file corruption, system integrity compromised' },
        { id: 13, date: '2024-03-12', message: 'Disk failure imminent, backup critical data immediately' },
        { id: 14, date: '2024-03-15', message: 'Data center power outage reported, activate backup generators' },
        { id: 15, date: '2024-03-18', message: 'Firewall misconfiguration detected, review security policies' },
        { id: 16, date: '2024-03-20', message: 'Database table corruption, data integrity at risk' },
        { id: 17, date: '2024-03-22', message: 'Network switch failure, investigate connectivity issues' },
        { id: 18, date: '2024-03-25', message: 'Email server blacklisted, troubleshoot email delivery issues' },
        { id: 19, date: '2024-03-28', message: 'Data breach notification received, initiate incident response plan' },
        { id: 20, date: '2024-03-31', message: 'Critical application bug discovered, escalate to development team' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        <FaExclamationTriangle className="inline-block text-4xl text-red-500 mr-2" />
                        Critical Alerts
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        View critical alerts and notifications that require immediate attention.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Critical Alerts</h2>
                            <div className="mt-4">
                                {criticalAlerts.map(alert => (
                                    <div key={alert.id} className="flex items-center justify-between border-t border-gray-200 py-2">
                                        <div>
                                            <p className="text-sm text-gray-600">{alert.date}</p>
                                            <p className="text-base font-medium text-gray-900">{alert.message}</p>
                                        </div>
                                        <div>
                                            <FaExclamationTriangle className="text-red-500" />
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

export default CriticalAlertsPage;