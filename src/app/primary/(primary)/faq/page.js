
import FaqAnswer from "./sections/FaqAnswer";
import FaqHero from "./sections/FaqHero";
export const metadata = {
  title: 'Universal Survey - FAQ',
  description: 'Find clear and concise answers to frequently asked questions about Universal Survey, including how to participate in surveys, create your own, and understand our terms of service.',
}
const FaqPage = () => {
  const faqData = [
    {
      "id": 1,
      "question": "How can I create a new survey?",
      "answer": "To create a new survey, simply log in to your account and navigate to the 'Create Survey' page. From there, you can specify the details of your survey, including the title, questions, and any customization options."
    },
    {
      "id": 2,
      "question": "Can I customize the design of my survey?",
      "answer": "Yes, our survey application provides various customization options to tailor the design of your survey to your preferences. You can customize the colors, fonts, and layout to match your branding or personal style."
    },
    {
      "id": 3,
      "question": "Is there a limit to the number of questions I can add to a survey?",
      "answer": "No, there is no limit to the number of questions you can add to a survey. You can add as many questions as needed to gather the information you require from your respondents."
    },
    {
      "id": 4,
      "question": "How do I share my survey with respondents?",
      "answer": "Once you have created your survey, you can share it with respondents by generating a unique survey link. You can then distribute this link via email, social media, or any other communication channels to reach your target audience."
    },
    {
      "id": 5,
      "question": "Can respondents answer the survey anonymously?",
      "answer": "Yes, respondents have the option to answer the survey anonymously if you choose to enable anonymous responses. This can encourage honest feedback, especially for sensitive topics."
    },
    {
      "id": 6,
      "question": "How do I view the responses to my survey?",
      "answer": "You can view the responses to your survey in real-time by accessing the 'Survey Responses' page. Here, you will find detailed analytics and insights into the responses received, including charts and graphs for easy interpretation."
    },
    {
      "id": 7,
      "question": "Is my data secure and private?",
      "answer": "Yes, we take data security and privacy seriously. Our survey application employs robust security measures to protect your data and ensure confidentiality. We adhere to industry best practices and comply with relevant data protection regulations."
    },
    {
      "id": 8,
      "question": "Can I export the survey responses for further analysis?",
      "answer": "Yes, you can export the survey responses in various formats, such as CSV or Excel, for further analysis or integration with other tools. This allows you to gain deeper insights and derive actionable conclusions from the collected data."
    },
    {
      "id": 9,
      "question": "What support options are available if I encounter any issues?",
      "answer": "If you encounter any issues or have questions about using our survey application, our support team is here to help. You can reach out to us via email or through our support portal, and we'll be happy to assist you."
    },
    {
      "id": 10,
      "question": "Is there a mobile app available for accessing the survey application?",
      "answer": "Yes, we offer a mobile app for convenient access to the survey application on the go. The mobile app provides a seamless experience for creating and managing surveys, as well as viewing responses from your mobile device."
    }
  ]

  return (
    <>
      <FaqHero faqData={faqData} />
      <FaqAnswer faqData={faqData} />
    </>
  );
};

export default FaqPage;
