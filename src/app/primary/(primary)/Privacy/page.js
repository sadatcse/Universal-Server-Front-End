import { FaLock } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-3xl p-8 bg-white shadow-md rounded-lg">
                <div className="flex items-center justify-center mb-8">
                    <FaLock className="text-4xl mr-4 text-green-500" />
                    <h1 className="text-3xl font-semibold text-gray-800">Privacy Policy</h1>
                </div>
                <p className="text-gray-700 mb-4">
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                </p>
                <p className="text-gray-700 mb-4">
                    1. **Information We Collect:** We collect personal information such as your name, email address, and contact details when you create an account or interact with our website. We use this information to provide our services and communicate with you.
                </p>
                <p className="text-gray-700 mb-4">
                    2. **How We Use Your Information:** We may use your personal information to personalize your experience, improve our website, and communicate with you about our products and services.
                </p>
                <p className="text-gray-700 mb-4">
                    3. **Sharing Your Information:** We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to fulfill our contractual obligations.
                </p>
                <p className="text-gray-700 mb-4">
                    4. **Cookies:** We use cookies to enhance your experience on our website. You can choose to accept or decline cookies through your browser settings.
                </p>
                <p className="text-gray-700 mb-4">
                    5. **Security:** We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <p className="text-gray-700">
                    6. **Contact Us:** If you have any questions or concerns about our Privacy Policy, please contact us at [contact email]. By using our website and services, you agree to the terms outlined in this Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;