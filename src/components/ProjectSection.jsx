import React from 'react'
import BigHeader from './BigHeader'

const ProjectSection = () => {
  return (
    <div className='project-section-full w-full' id="project">
        
        {/* <div className="project-delineator" id="project" /> */}
        <BigHeader text={"PROJECT"} />

        <div className='project-section-body px-10 flex flex-col items-center'>

            <div className='project-copy-and-picture flex justify-between mb-4'>

                <div className='project-image w-[40%] flex items-center justify-center overflow-hidden border'>
                    <img className='max-w-full object-cover' src="/images/blank.jpg" />
                </div>

                <div className='project-description w-[50%]'>
                    <h1>OUR PROJECT</h1>
                    <p className=''>
                    In collaboration with the C&W Foundation, the Brady Scholars aim to transform the C&W Market and Ice Cream Parlor from a convenience store to a fully equipped, self-sustaining grocery store to serve a community in need. Currently, Evanston’s 5th Ward is a low-income region that has been overlooked by larger, mainstream produce distributors. As a result, Evanston's 5th ward has been designated a food desert, as 96% of the ward’s residents live over half a mile away from a major grocery store. In converting the C&W Market from a convenience store to a grocery store, we aim to provide 5th Ward residents with consistent access to quality produce, ultimately alleviating the harmful effects of food insecurity.
                    </p>
                </div>

            </div>

            {/* i guess i'll continue project desc here */}

            <p className='project-description-continued'>
                This process will require updating the store’s existing infrastructure to include ventilation and refrigeration suitable for housing fresh produce, redesigning the layout of the store, and expanding produce offerings. Such renovations prove necessary, due to the current costs in upkeep and repair of existing refrigeration systems. Upon the Brady 16s’ graduation, the Weavers will continue to run the renovated grocery store, bolstering community health and providing 5th Ward residents with long-term, equitable access to healthy produce.
            </p>

        </div>
        
    </div>
  )
}

export default ProjectSection