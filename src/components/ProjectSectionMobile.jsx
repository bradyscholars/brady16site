"use client"
import React from 'react'

const ProjectSectionMobile = () => {
  return (
    <div
      className="project-section-full-mobile flex flex-col w-full items-center mb-24 px-4 sm:px-6 lg:px-10 py-8 md:hidden"
      id="project"
    >
      {/* header */}
      <h1 className="mt-0 mb-6 text-[2rem] sm:text-[2.5rem] font-bold text-center">
        OUR PROJECT
      </h1>

      {/* image */}
      <div className="project-image-mobile w-full max-w-sm mb-6 flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-md"
          src="/images/project_primary.jpeg"
        />
      </div>

      {/* paragraphs */}
      <div className="project-description-mobile w-full max-w-lg text-center space-y-4">
        <p>
          In collaboration with the C&W Foundation, the Brady Scholars aim to
          transform the C&W Market and Ice Cream Parlor from a convenience
          store to a fully equipped, self-sustaining grocery store to serve a
          community in need. Currently, Evanston’s 5th Ward is a low-income
          region that has been overlooked by larger, mainstream produce
          distributors. As a result, Evanston's 5th ward has been designated a
          food desert, as 96% of the ward’s residents live over half a mile
          away from a major grocery store. In converting the C&W Market from a
          convenience store to a grocery store, we aim to provide 5th Ward
          residents with consistent access to quality produce, ultimately
          alleviating the harmful effects of food insecurity.
        </p>
        <p>
          This process will require updating the store’s existing
          infrastructure to include ventilation and refrigeration suitable for
          housing fresh produce, redesigning the layout of the store, and
          expanding produce offerings. Such renovations prove necessary, due to
          the current costs in upkeep and repair of existing refrigeration
          systems. Upon the Brady 16s’ graduation, the Weavers will continue to
          run the renovated grocery store, bolstering community health and
          providing 5th Ward residents with long-term, equitable access to
          healthy produce.
        </p>
      </div>
    </div>
  )
}

export default ProjectSectionMobile
