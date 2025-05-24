import BigHeader from "@/components/BigHeader";
import CAndWSection from "@/components/CAndWSection";
import ProjectSection from "@/components/ProjectSection";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (

    <div className="homepage-full flex flex-col items-center px-24 py-32">

      {/* <div className="brady-delineator" id="brady" /> */}
      <BigHeader text={"LET'S BUILD TOGETHER"}  />

      <WhoWeAre />

      <CAndWSection />

      <ProjectSection />

    </div>
  
  );
}
