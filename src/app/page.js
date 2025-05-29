"use client"
import Footer from "@/components/Footer";
import CAndWSection from "@/components/CAndWSection";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectSection from "@/components/ProjectSection";
import WhoWeAre from "@/components/WhoWeAre";
import HomePageGetInvolved from "@/components/HomePageGetInvolved";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import HomePageGetInvolvedMobile from "@/components/HomePageGetInvolvedMobile";
import CAndWSectionMobile from "@/components/CAndWSectionMobile";
import WhoWeAreMobile from "@/components/WhoWeAreMobile";
import ProjectSectionMobile from "@/components/ProjectSectionMobile";


export default function Home() {

  const router = useRouter();

  function handleClick() {
    router.push('/get-involved')
  }

  return (

    <div className="homepage-full flex flex-col items-center px-4 py-16 md:px-24 lg:py-32 relative">

      {/* <div className="brady-delineator" id="brady" /> */}
      {/* <BigHeader text={"LET'S BUILD TOGETHER"}  /> */}
 

      <HomePageGetInvolved />

      <HomePageGetInvolvedMobile />

      <div className="arrow-connector max-w-[30%] max-h-[30%] ml-16 rotate-12 hidden md:block">
        <img className="object-fill " src="/images/arrow.png" loading="eager" />
      </div>
      

      <CAndWSection />
      <CAndWSectionMobile />

      {/* <h1 className='m-0 p-0 font-bold text-[3rem] transform w-full px-10 text-left mb-24 '>IN COLLABORATION WITH...</h1> */}

      <WhoWeAre />
      <WhoWeAreMobile />

      <ProjectSection />
      <ProjectSectionMobile />

      <ProjectDetails />


      <div className="final-call-to-action-mobile w-full flex justify-center items-center md:hidden mb-24">
          <Button className='bg-white hover:bg-green-100 shadow-lg border  px-12 py-8 rounded-full' onClick={handleClick}>
              <p className='text-green-900 text-xl m-0 p-0 font-bold'>Get Involved →</p>
          </Button>
      </div>


      <Footer />


    </div>
  
  );
}
