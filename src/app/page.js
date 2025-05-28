import Footer from "@/components/Footer";
import CAndWSection from "@/components/CAndWSection";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectSection from "@/components/ProjectSection";
import WhoWeAre from "@/components/WhoWeAre";
import HomePageGetInvolved from "@/components/HomePageGetInvolved";


export default function Home() {
  return (

    <div className="homepage-full flex flex-col items-center px-24 py-32 relative">

      {/* <div className="brady-delineator" id="brady" /> */}
      {/* <BigHeader text={"LET'S BUILD TOGETHER"}  /> */}

      <div className="absolute w-[4%] bg-green-900 h-full opacity-50 right-8 top-0"></div>
      <div className="absolute w-[1%] bg-green-900 h-full opacity-50 right-2 top-0"></div>


      <WhoWeAre />

      <CAndWSection />

      <ProjectSection />

      <ProjectDetails />

      <HomePageGetInvolved />

      <Footer />


    </div>
  
  );
}
