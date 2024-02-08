import Banner from "@/components/primary/homeComponents/Banner";
import SurveyBenefits from "@/components/primary/homeComponents/SurveyBenefits";
import WhatPeopleSay from "@/components/primary/homeComponents/WhatPeopleSay";
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
