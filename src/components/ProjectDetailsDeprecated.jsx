import React from 'react'

const ProjectDetails = () => {

  return (
    <div id="project-details" className="bg-white mb-24 px-4" >
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


// "use client"


// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import to avoid SSR errors
// const ForceGraph2D = dynamic(
//   () => import('react-force-graph-2d'),
//   { ssr: false }
// );

// const FloatingGraph = ({ nodes, links }) => {
//   const containerRef = useRef();
//   const [dims, setDims] = useState({ width: 400, height: 300 });

//   // Resize observer to match parent size
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const observer = new ResizeObserver(entries => {
//       for (let entry of entries) {
//         setDims({
//           width: entry.contentRect.width,
//           height: entry.contentRect.height
//         });
//       }
//     });
//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Custom cloud-shaped nodes
//   const drawCloudNode = useCallback((node, ctx) => {
//     const text = node.name;
//     ctx.font = '12px sans-serif';
//     const padding = 8;
//     const metrics = ctx.measureText(text);
//     const textWidth = metrics.width;
//     const textHeight = 12;
//     const boxWidth = textWidth + padding * 2;
//     const boxHeight = textHeight + padding * 2;
//     const x = node.x;
//     const y = node.y;

//     // Draw cloud-like shape
//     const r = boxHeight * 0.6;
//     ctx.fillStyle = '#e0f7fa';
//     ctx.beginPath();
//     ctx.arc(x - boxWidth / 4, y, r, 0, 2 * Math.PI);
//     ctx.arc(x + boxWidth / 4, y, r * 0.9, 0, 2 * Math.PI);
//     ctx.arc(x, y - boxHeight / 4, r * 0.8, 0, 2 * Math.PI);
//     ctx.closePath();
//     ctx.fill();
//     ctx.strokeStyle = '#00796b';
//     ctx.stroke();

//     // Draw text
//     ctx.fillStyle = '#004d40';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.fillText(text, x, y);
//   }, []);

//   if (typeof window === 'undefined') {
//     // Render placeholder on server
//     return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
//   }

//   return (
//     <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
//       <ForceGraph2D
//         width={dims.width}
//         height={dims.height}
//         graphData={{ nodes, links }}
//         nodeCanvasObject={drawCloudNode}
//         nodePointerAreaPaint={(node, color, ctx) => {
//           const metrics = ctx.measureText(node.name);
//           const w = metrics.width + 16;
//           const h = 12 + 16;
//           ctx.fillStyle = color;
//           ctx.fillRect(node.x - w / 2, node.y - h / 2, w, h);
//         }}
//         linkWidth={1}
//         linkColor={() => '#aaa'}
//         enableNodeDrag
//         cooldownTicks={100}
//       />
//     </div>
//   );
// };

// // Default export
// export default FloatingGraph;
