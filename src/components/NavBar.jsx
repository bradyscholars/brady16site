"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const router = useRouter();

    const [activeSection, setActiveSection] = useState("brady");


    const sections = [
        
        {
            name : "Brady Scholars",
            path : "brady"
        },
        {
            name : "C&W",
            path : "candw"
        },
        {
            name : "Our Project",
            path : "project"
        },
        {
            name : "Get Involved",
            path : "get-involved"
        },

    ]

    function handleClick(section) {

        if (section.path === "get-involved") {
            // do something different
            return;
        }

        const sec = document.getElementById(section);
        sec.scrollIntoView({behavior: "smooth" , });
        // router.push(`#${section}`);

    }

    useEffect(() => {
        const onScroll = () => {
          // Use viewport midpoint to decide “current” section
          const midpoint = window.scrollY + window.innerHeight / 2;
          let current = sections[0].path;
    
          for (const section of sections) {
            if (section.path === "get-involved") continue;
            const el = document.getElementById(section.path);
            if (!el) continue;
            const top = el.offsetTop;
            if (top <= midpoint) {
              current = section.path;
            } else {
              break;
            }
          }
    
          setActiveSection(current);
        };
    
        window.addEventListener("scroll", onScroll, { passive: true });
        // run once to initialize
        onScroll();
    
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, []);

  return (
    <div className='w-full flex items-center justify-center fixed top-8 z-50'>

        <nav className="flex = z-50 items-center bg-white px-4 md:px-10 py-3  rounded-full shadow-lg mx-auto mt-6">

            <div className="hidden md:flex gap-[42px]">
                {sections.map((section) => (
                <button
                    key={section.path}
                    onClick={() => handleClick(section.path)}
                    className={`relative text-sm font-medium ${
                    activeSection === section.path
                        ? "text-blue-500"
                        : "text-grey-800 hover:text-blue-500"
                    }`}
                >
                    {section.name}
                    {activeSection === section.path && (
                    <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-blue-400"></div>
                    )}
                </button>
                ))}
            </div>

        </nav>

    </div>
  )
}

export default NavBar