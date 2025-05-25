"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const isGetInvolved = pathname === "/get-involved";



    const [activeSection, setActiveSection] = useState(null);


    const sections = [
        
        {
            name : "Who Are We?",
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
        if (section === "get-involved") {
            router.push("/get-involved");
            return;
        }
    
        if (pathname !== "/") {
            // Navigate home first
            router.push("/");
    
            // Delay the scroll to let the navigation settle
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100); // slightly more than 0 to ensure hydration
        } else {
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }

    useEffect(() => {

        const isOnGetInvolved = pathname === "/get-involved"
        if (isOnGetInvolved) {
            setActiveSection("get-involved");
            return;
        }


        const onScroll = () => {
          // Use viewport midpoint to decide “current” section

          const midpoint = window.scrollY + window.innerHeight / 2;
          let current = sections[0].path;
    
          for (const section of sections) {
            if (section.path === "get-involved") {
                
                continue;
            }
            const el = document.getElementById(section.path);
            if (!el) continue;
            const top = el.offsetTop;
            if (top <= midpoint) {
              current = section.path;
            } else {
              break;
            }
          }
    
          if (current) setActiveSection(current);
        };
    
        window.addEventListener("scroll", onScroll, { passive: true });
        // run once to initialize
        onScroll();
    
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, [pathname]);


    //   useEffect(() => {
    //     if (pathname === '/' && window.location.hash) {
    //         const id = window.location.hash.slice(1);
    //         const el = document.getElementById(id);

    //         if (el) {
    //             setTimeout(() => {
    //                 el.scrollIntoView({behavior : "smooth" , block :  "start"});
    //             }, 0)
    //         }
    //     }
    //   }, [pathname]);



  return (
    <div className='w-full flex items-center justify-center fixed top-5 z-50'>


        <nav className="flex z-50 items-center bg-white px-4 md:px-10 py-3 border border-gray-100 rounded-full shadow-lg mx-auto mt-6">

            {/* <h1 className='text-sm mr-4 mb-4'>The Brady Scholars</h1> */}


            <div className="hidden md:flex gap-[42px]">
                {sections.map((section) => (
                <button
                    key={section.path}
                    onClick={() => handleClick(section.path)}
                    className={`relative text-sm font-medium ${
                    activeSection === section.path || (section.path === "get-involved" && isGetInvolved)
                        ? "text-blue-500"
                        : "text-grey-800 hover:text-blue-500"
                    }`}
                >
                    {section.name}
                    {(activeSection === section.path || (section.path === "get-involved" && isGetInvolved)) && (
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