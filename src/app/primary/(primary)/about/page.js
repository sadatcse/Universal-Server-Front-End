import AboutHero from "@/components/primary/aboutComponents/AboutHero";
import Team from "@/components/primary/aboutComponents/Team";
import VisionAndValues from "@/components/primary/aboutComponents/VisionAndValues";

export const metadata = {
    title: 'Universal Survey - About Us',
    description: 'Learn about the passionate team behind Universal Survey, our dedication to empowering individuals and organizations through data, and our commitment to ethical practices and user privacy.',
  }
const AboutPage = () => {
    
    return (
        <>
            <AboutHero />
            <VisionAndValues />
            <Team />
        </>
    );
};

export default AboutPage;