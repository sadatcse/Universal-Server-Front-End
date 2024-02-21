import { FaEnvelope, FaRegHandshake } from 'react-icons/fa';

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-5xl px-8 py-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Universal Survey Terms and Conditions</h1>
            <p className="text-gray-700 mb-6">Welcome to Universal Survey! These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms. Please read them carefully before proceeding.</p>
            <ol className="list-decimal list-inside mb-6">
                <li className="text-gray-700 mb-4">
                    <strong>Acceptance of Terms:</strong><br />
                    By accessing or using Universal Survey, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you may not use our website or services.
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>Use of Services:</strong><br />
                    Universal Survey provides a platform for creating, managing, and participating in surveys. You may use our services solely for lawful purposes and in accordance with these Terms.
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>User Accounts:</strong><br />
                    To access certain features of Universal Survey, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>User Content:</strong><br />
                    You retain ownership of any content you submit or upload to Universal Survey (&quot;User Content&quot;). By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your User Content for the purpose of providing our services.

                </li>
                <li className="text-gray-700 mb-4">
                    <strong>Prohibited Conduct:</strong><br />
                    You agree not to engage in any conduct that violates these Terms or infringes on the rights of others. Prohibited conduct includes, but is not limited to, the following:
<p>Using Universal Survey for any unlawful purpose.</p>
<p>Impersonating another person or entity.</p>
<p>Uploading or transmitting viruses or other harmful code.</p>
<p>Interfering with the operation of Universal Survey or disrupting the services provided.</p>
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>Intellectual Property Rights:</strong><br />
                    Universal Survey and its content, including but not limited to text, graphics, logos, and software, are protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, or distribute our content without prior written consent.
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>Third-Party Links:</strong><br />
                    Universal Survey may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content or practices of any third-party websites or services.
                </li>
                <li className="text-gray-700 mb-4">
                    <strong>Disclaimer of Warranties:</strong><br />
                    Universal Survey is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind, express or implied. We do not warrant that our website will be error-free or uninterrupted, or that any defects will be corrected.
                </li>
 
                <li className="text-gray-700 mb-4">
                    <strong>Limitation of Liability:</strong><br />
                    In no event shall Universal Survey or its affiliates, directors, or employees be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
                </li>  
                <li className="text-gray-700 mb-4">
                    <strong>Governing Law:</strong><br />
                    These Terms shall be governed by and construed in accordance with the laws of Bangladesh ICT ACT, without regard to its conflict of law provisions.


                </li>  
                <li className="text-gray-700 mb-4">
                    <strong>Changes to Terms:</strong><br />
                    Universal Survey reserves the right to modify or update these Terms at any time. We will notify you of any changes by posting the updated Terms on our website. Your continued use of Universal Survey after the posting of any changes constitutes acceptance of those changes.
                </li>            </ol>

            <p className="text-gray-700 mb-6">If you have any questions or concerns about these Terms, please contact us at <a href="#" className="text-blue-500 hover:underline"><FaEnvelope className="inline-block mb-1 mr-1" />contact@email.com</a>.</p>
            <p className="text-gray-700">By using Universal Survey, you agree to these Terms and acknowledge that you have read and understood our Privacy Policy.</p>
        </div>
    </div>
    );
};

export default Terms;