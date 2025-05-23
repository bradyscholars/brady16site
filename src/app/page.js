import BigHeader from "@/components/BigHeader";
import CAndWSection from "@/components/CAndWSection";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (

    <div className="homepage-full flex flex-col items-center px-24 py-32">

      <BigHeader text={"LET'S BUILD TOGETHER"} />

      <WhoWeAre />

      <CAndWSection />

    </div>
  
  );
}
