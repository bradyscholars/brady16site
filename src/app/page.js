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
 

      <HomePageGetInvolved />

      <div className="arrow-connector max-w-[30%] max-h-[30%] ml-16 rotate-12">
        <img className="object-fill " src="/images/arrow.png" loading="eager" />
      </div>

      <CAndWSection />

      <WhoWeAre />

      <ProjectSection />

      <ProjectDetails />


      <Footer />


    </div>
  
  );
}
