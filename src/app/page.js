import Banner from "@/components/homeComponents/Banner";
import SurveyBenefits from "@/components/homeComponents/SurveyBenefits";
import WhatPeopleSay from "@/components/homeComponents/WhatPeopleSay";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

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