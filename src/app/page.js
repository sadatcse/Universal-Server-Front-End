import Banner from "@/components/primary/homeComponents/Banner";
import SurveyBenefits from "@/components/primary/homeComponents/SurveyBenefits";
import WhatPeopleSay from "@/components/primary/homeComponents/WhatPeopleSay";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
export const metadata = {
  title: 'Universal Survey - Home',
  description: 'Discover a vast collection of surveys on countless topics or create your own and gather valuable insights. Universal Survey is your one-stop platform for exploring, participating in, and creating impactful surveys.',
}
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SurveyBenefits />
      <WhatPeopleSay />
      <Footer />
    </>
  );
};

export default HomePage;
