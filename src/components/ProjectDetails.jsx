import React from 'react'

const ProjectDetails = () => {

  return (
    <div id="project-details" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Requirements List */}
            <div>
                <h2 className="text-3xl font-bold mb-6">Project Requirements</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                    <li className='list-image-none list-none'>Examine existing supplies and appliances to see what can be repurposed or relocated, including the refrigerator in 1700 Dodge and freezers throughout the store</li>
                    <li className='list-image-none list-none'>Acquire necessary Evanston construction permits</li>
                    <li className='list-image-none list-none'>Demolish the wall separating 1700 Dodge and 1901 Church St properties</li>
                    <li className='list-image-none list-none'>Install an appropriate HVAC system for the 1700 Dodge property (possibly a mini-split AC)</li>
                    <li className='list-image-none list-none'>Renovate plumbing system for 1700 Dodge to be compatible with new refrigeration systems</li>
                    <li className='list-image-none list-none'>Install open air coolers in 1700 Dodge and 1901 Church St for produce (<a className='underline' target={"_blank"} href="https://store.prohvacr.com/products/purecold-inspration-96-white-open-air-merchandiser-cooler?variant=43818947248358&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA2jcNB2ttif2SS5SaM8Mc8cL_nrsO5CHYzHnFOhtIwazPkenj7Vk5hoCeNUQAvD_BwE">example</a>)</li>
                    <li className='list-image-none list-none'>Install new closed-door refrigerators for deli meats and freezers for frozen items in 1901 Church St (<a className='underline' target={"_blank"} href="https://www.webstaurantstore.com/avantco-gdc-49f-hc-53-1-8-white-swing-glass-door-merchandiser-freezer-with-led-lighting/178GDC49FHCW.html">stand-up freezer</a>, <a className='underline' target={"_blank"} href="https://www.webstaurantstore.com/avantco-gdc-69-hc-78-1-4-white-swing-glass-door-merchandiser-refrigerator-with-led-lighting/178GDC69HCW.html">reach-in display refridgerator</a>)</li>
                    <li className='list-image-none list-none'>Install shelving for non-refrigerated fruits, bread, and other bakery items (<a className='underline' target={"_blank"} href="https://www.amazon.com/JACKCUBE-DESIGN-Vegetable-Organizer-Chalkboard/dp/B0BT6LRTC9?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3NFF7BTSDCLJR&gQT=1">example</a>)</li>
                    <li className='list-image-none list-none'>Gondola shelving for nonperishables, including end caps and race-track gondolas</li>
                    <li className='list-image-none list-none'>Revamp cashier/check-out counter with under-counter and behind-counter storage</li>
                    <li className='list-image-none list-none'>Find reliable distributors for fresh produce, bakery goods, and deli meats</li>
                    <li className='list-image-none list-none'>Install suitable shelving, freezers, and refrigerators in the basement for storage</li>
                    <li className='list-image-none list-none'>Update existing inventory system for expanded supply</li>
                    <li className='list-image-none list-none'>Update POS system for expanded supply</li>
                </ul>
                </div>

                {/* Business Structure Explanation */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Business Structure</h2>
                    <p className="text-gray-700 mb-4">
                        We plan to create a new non-profit entity to provide affordable and accessible fresh produce to the Evanston community. This entity will operate alongside the for-profit C&W Market, with separate transactions.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Revenue from the non-profit grocery section (fresh produce) will support community nutrition efforts, while the for-profit side will handle inventory and labor cost recovery.
                    </p>
                    <p className="text-gray-700">
                        Labor opportunities will emphasize workforce development, and the collaborative model will ensure nutritious food is available at low cost.
                    </p>
                </div>
            </div>
        </div>

  )
}

export default ProjectDetails