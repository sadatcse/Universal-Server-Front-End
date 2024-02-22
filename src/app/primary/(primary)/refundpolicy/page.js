import { FaMoneyBillWave } from 'react-icons/fa';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-lg p-8 bg-white shadow-md rounded-lg">
                <div className="flex items-center justify-center mb-8">
                    <FaMoneyBillWave className="text-4xl mr-4 text-blue-500" />
                    <h1 className="text-3xl font-semibold text-gray-800">Refund Policy</h1>
                </div>
                <p className="text-gray-700 mb-4">
                    Our refund policy is designed to ensure your satisfaction with our products and services. Here&apos;s what you need to know:
                </p>
                <p className="text-gray-700 mb-4">
                    1. **Refunds:** We offer refunds on a case-by-case basis. If you are dissatisfied with your purchase or experience, please contact us within 3 days of your purchase for assistance.
                </p>
                <p className="text-gray-700 mb-4">
                    2. **Eligibility:** To be eligible for a refund, your request must meet our criteria for refund eligibility. This may include providing proof of purchase and explaining the reason for your dissatisfaction.
                </p>
                <p className="text-gray-700 mb-4">
                    3. **Processing:** Once your refund request is received and approved, we will process your refund within 2 days. Refunds will be issued to the original payment method used for the purchase.
                </p>
                <p className="text-gray-700 mb-4">
                    4. **Exceptions:** Please note that certain products or services may not be eligible for refunds, such as digital downloads or personalized items. We will inform you if your purchase falls into this category.
                </p>
                <p className="text-gray-700 mb-4">
                    5. **Contact Us:** If you have any questions or concerns about our refund policy, please contact us at [contact email]. Our customer support team is here to assist you and ensure your satisfaction.
                </p>
                <p className="text-gray-700">
                    6. **Policy Updates:** We reserve the right to update or change our refund policy at any time. Any changes will be effective immediately upon posting on our website.
                </p>
            </div>
        </div>
    );
};

export default RefundPolicy;
