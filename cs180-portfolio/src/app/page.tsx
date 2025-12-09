'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('project0');
  const [promptListExpanded, setPromptListExpanded] = useState(false);

  const tabs = [
    { id: 'project0', label: 'Project 0', title: 'Becoming Friends with Your Camera' },
    { id: 'project1', label: 'Project 1', title: 'Images of the Russian Empire' },
    { id: 'project2', label: 'Project 2', title: 'Fun with Filters and Frequencies' },
    { id: 'project3a', label: 'Project 3A', title: 'Image Warping and Mosaicing' },
    { id: 'project3b', label: 'Project 3B', title: 'Feature Matching for Autostitching' },
    { id: 'project4', label: 'Project 4', title: 'Neural Radiance Field' },
    { id: 'project5a', label: 'Project 5A', title: 'The Power of Diffusion Models' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center p-8" style={{fontFamily: 'Arial, sans-serif'}}>
      <div className="text-center space-y-8 max-w-6xl w-full">
        <h1 className="text-6xl font-black text-black mb-4 tracking-wider drop-shadow-lg">
          CS 180
        </h1>
        <h2 className="text-3xl font-bold text-black mb-6">
          Intro to Computational Photography and Computer Vision
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-gray-300 mb-8">
          <p className="text-lg text-black font-medium leading-relaxed">
             Welcome to my portfolio!
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border-2 border-gray-200 mb-8">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gray-600 text-white shadow-lg transform scale-105'
                    : 'text-black hover:bg-gray-100 hover:scale-102'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-gray-300 min-h-[600px]">

          {activeTab === 'project0' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">
                  Project 0: Becoming Friends with Your Camera
                </h3>
                <p className="text-black">Exploring camera techniques and perspective</p>
              </div>
              
              <div className="border-l-4 border-gray-400 pl-6 bg-gray-50/50 rounded-r-lg py-6">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Part 1: Selfie: The Wrong Way vs. The Right Way
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img 
                      src="/cs180-portfolio/project-0/closeup.png" 
                      alt="Close-up selfie showing distortion" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                    />
                    <p className="text-sm font-semibold text-black">The Wrong Way: Close-up</p>
                    <p className="text-xs text-black">Distorted perspective from being too close</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/cs180-portfolio/project-0/zoomedin.png" 
                      alt="Zoomed-in photo from distance showing better proportions" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                    />
                    <p className="text-sm font-semibold text-black">The Right Way: Step Back & Zoom</p>
                    <p className="text-xs text-black italic">Less distorted and better portrait</p>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-400 pl-6 bg-gray-50/50 rounded-r-lg py-6">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Part 2: Architectural Perspective Compression
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img 
                      src="/cs180-portfolio/project-0/zoomtree.png" 
                      alt="Zoomed-in view of street scene showing compression" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                    />
                    <p className="text-sm font-semibold text-black">Zoomed In: Compressed Perspective</p>
                    <p className="text-xs text-black italic">Flattened depth from zoom</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/cs180-portfolio/project-0/fartree.png" 
                      alt="Close-up wide angle view showing natural depth" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                    />
                    <p className="text-sm font-semibold text-black">Wide Angle: Natural Depth</p>
                    <p className="text-xs text-black italic">Preserved perspective and depth perception</p>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-400 pl-6 bg-gray-50/50 rounded-r-lg py-6">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Part 3: The Dolly Zoom
                </h4>
                <p className="text-black font-medium mb-6 leading-relaxed">
                  The lipbalm family 
                </p>
                <div className="flex justify-center">
                  <div className="text-center max-w-md">
                    <img 
                      src="/cs180-portfolio/project-0/Image from Imgflip.gif" 
                      alt="Dolly zoom effect animation showing perspective distortion" 
                      className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-300 mb-3"
                    />
                    <p className="text-sm font-semibold text-black">Dolly Zoom Effect</p>
                    <p className="text-xs text-black italic">Camera moves back while zooming in, creating the &quot;Vertigo&quot; effect</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'project1' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">
                  Project 1: Images of the Russian Empire
                </h3>
                <p className="text-black italic">Colorizing the Prokudin-Gorskii Photo Collection</p>
              </div>

              {/* Overview Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Overview
                </h4>
                <p className="text-black leading-relaxed mb-4">
                  Sergei Prokudin-Gorskii was a pioneering photographer who, beginning in 1907, traveled across the Russian Empire 
                  capturing thousands of color photographs using an innovative three-filter technique. He photographed everything 
                  from landscapes to portraits, including the only known color image of Leo Tolstoy.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  Prokudin-Gorskii&apos;s method involved taking three separate exposures of each scene through red, green, and blue filters 
                  onto glass plates. These RGB negatives survived and were eventually digitized by the Library of Congress, 
                  preserving a unique glimpse into the final years of Imperial Russia.
                </p>
                <p className="text-black leading-relaxed">
                  This project focuses on reconstructing these historical images by extracting the three color channels and aligning 
                  them to create colorized photographs. The challenge lies in precisely aligning the channels to produce high-quality colorized images.
                </p>
              </div>

              {/* Approach Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Approach
                </h4>
                <p className="text-black leading-relaxed mb-4">
                  For both approaches, I started by creating a list of images to iterate through and a place to store all my final displacements from each of those images. Then, I started a preprocessing in the naive and optimized approaches. I separated the image into the 3 color channels after representing it as a float.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  For the smaller images, I chose to stick with the naive approach of alignment. To do this, I created a [-15, 15] window of possible (x,y) displacements and used a double nested for loop to do so. Then, for each possible displacement, I found the overlap window between the two images after applying the displacement to the first image, and I find the largest possible overlap that doesn&apos;t go out of bounds using two windows, one for the reference image and one for the moving image that I am going to apply the displacement to. I then calculated a Normalized Cross-Correlation metric for these two windows. I started off using an SSD metric (Euclidean Distance), however this was yielding poor alignment after visually examining the output. After switching to NCC, I found the resulting .jpg files had better alignment. I then kept the alignment that yielded the best NCC score. To apply this best shift, I used np.roll.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400 mb-4">
                  <p className="text-black text-sm font-medium mb-2">Normalized Cross-Correlation Formula:</p>
                  <div className="text-center">
                    <p className="text-black font-mono text-lg">NCC(A,B) = (1/N) × Σᵢ [(Aᵢ - μₐ)/σₐ] × [(Bᵢ - μᵦ)/σᵦ]</p>
                  </div>
                  <p className="text-black text-xs mt-2 text-gray-600">
                    Where A and B are image windows, μ represents mean, σ represents standard deviation, and N is the number of pixels.
                  </p>
                </div>
                <p className="text-black leading-relaxed mb-4">
                  The alignments were a little off still, despite shifting to the NCC metric. This is why I tried cropping, so that the borders were not influencing the scores of the displacements. I cropped by 10% on the height and the width, and I experimented with different crop percentages, and found that visually, 10% had the best alignment, while still reducing the amount of pixels that had to be cropped out.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  However, this naive method was not efficient or quick for the much larger .tif images. So, I chose to use an image pyramid structure. The align_optimized function recursively aligning downscaled versions of the images (coarser to finer). This approach drastically reduces computation time by performing the initial, large-scale search on smaller images where each pixel represents a larger area of the original.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  The function&apos;s recursion stops when it reaches a max_depth of zero, at which point the align_naive function is called to perform the final, fine-grained alignment. If the max_depth is greater than zero, the images are first downscaled by a factor of two using sk.transform.rescale. The function then calls itself recursively on these smaller images to find a coarse shift. Once this is found, it is scaled back up by a factor of two and applied to the original, full-resolution image using np.roll, which brings the two full-resolution images into rough alignment. A final call to align_naive is then performed on these roughly aligned images to find a small, fine-tuning shift.
                </p>
                <p className="text-black leading-relaxed mb-4">
                  I added this portion because after the coarse adjustment, I was noticing small differences that I hypothesized could be fixed quickly, and thus with the naive approach. I also added a crop to this version of the algorithm to address the same issues as the naive version. The total displacement is the sum of the upscaled coarse shift and the fine-tuning shift. This hierarchical approach significantly reduces the search space for alignment because instead of exhaustively checking hundreds of thousands of pixels.
                </p>
                <p className="text-black leading-relaxed">
                  I struggled with emir.tif despite this new approach, and this is the only one I believe is not fully aligned. I hypothesize that this is because the subject&apos;s face and clothing are not represented in all three color channels with equal intensity and clarity, so in spite of using the NCC metric, alignment wasn&apos;t optimal.
                </p>
              </div>

              {/* Gallery Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-6 flex items-center">
                  Gallery - Original Prokudin-Gorskii Collection
                </h4>
                <p className="text-sm text-black mb-6">Hover over images to see alignment displacements</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cathedral */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_cathedral.jpg" 
                    alt="Colorized Cathedral" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Cathedral</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (5, 2)</p>
                      <p className="text-xs">Red: (12, 3)</p>
                    </div>
                  </div>
                </div>

                {/* Church */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_church.jpg" 
                    alt="Colorized Church" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Church</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (25, 4)</p>
                      <p className="text-xs">Red: (58, -4)</p>
                    </div>
                  </div>
                </div>

                {/* Emir */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_emir.jpg" 
                    alt="Colorized Emir" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Emir</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (49, 24)</p>
                      <p className="text-xs">Red: (104, 57)</p>
                    </div>
                  </div>
                </div>

                {/* Harvesters */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_harvesters.jpg" 
                    alt="Colorized Harvesters" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Harvesters</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (60, 17)</p>
                      <p className="text-xs">Red: (124, 14)</p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_icon.jpg" 
                    alt="Colorized Icon" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Icon</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (41, 17)</p>
                      <p className="text-xs">Red: (89, 23)</p>
                    </div>
                  </div>
                </div>

                {/* Italil */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_italil.jpg" 
                    alt="Colorized Italil" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Italil</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (38, 21)</p>
                      <p className="text-xs">Red: (76, 35)</p>
                    </div>
                  </div>
                </div>

                {/* Lastochikino */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_lastochikino.jpg" 
                    alt="Colorized Lastochikino" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Lastochikino</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (-3, -2)</p>
                      <p className="text-xs">Red: (75, -9)</p>
                    </div>
                  </div>
                </div>

                {/* Lugano */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_lugano.jpg" 
                    alt="Colorized Lugano" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Lugano</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (41, -16)</p>
                      <p className="text-xs">Red: (93, -29)</p>
                    </div>
                  </div>
                </div>

                {/* Melons */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_melons.jpg" 
                    alt="Colorized Melons" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Melons</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (82, 11)</p>
                      <p className="text-xs">Red: (178, 13)</p>
                    </div>
                  </div>
                </div>

                {/* Monastery */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_monastery.jpg" 
                    alt="Colorized Monastery" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Monastery</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (-3, 2)</p>
                      <p className="text-xs">Red: (3, 2)</p>
                    </div>
                  </div>
                </div>

                {/* Self Portrait */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_self_portrait.jpg" 
                    alt="Colorized Self Portrait" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Self Portrait</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (79, 29)</p>
                      <p className="text-xs">Red: (176, 37)</p>
                    </div>
                  </div>
                </div>

                {/* Siren */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_siren.jpg" 
                    alt="Colorized Siren" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Siren</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (49, -6)</p>
                      <p className="text-xs">Red: (96, -25)</p>
                    </div>
                  </div>
                </div>

                {/* Three Generations */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_three_generations.jpg" 
                    alt="Colorized Three Generations" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Three Generations</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (53, 14)</p>
                      <p className="text-xs">Red: (112, 11)</p>
                    </div>
                  </div>
                </div>

                {/* Tobolsk */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                  <img 
                    src="/cs180-portfolio/project-1/colorized_tobolsk.jpg" 
                    alt="Colorized Tobolsk" 
                    className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-bold text-black mb-2">Tobolsk</h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                      <p className="text-xs">Green: (3, 3)</p>
                      <p className="text-xs">Red: (6, 3)</p>
                    </div>
                  </div>
                </div>

              </div>

              <br></br>

              {/* Additional Examples Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-6 flex items-center">
                  Additional Examples of My Choosing
                </h4>
                <p className="text-sm text-black mb-6">Additional images I processed</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mosque */}
                  <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src="/cs180-portfolio/project-1/colorized_mosque.jpg" 
                      alt="Colorized Mosque" 
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold text-black mb-2">Mosque</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                        <p className="text-xs">Green: (1, 1)</p>
                        <p className="text-xs">Red: (4, 1)</p>
                      </div>
                    </div>
                  </div>

                  {/* Rose Garden */}
                  <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src="/cs180-portfolio/project-1/colorized_rose_garden.jpg" 
                      alt="Colorized Rose Garden" 
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold text-black mb-2">Rose Garden</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                        <p className="text-xs">Green: (0, 1)</p>
                        <p className="text-xs">Red: (3, 1)</p>
                      </div>
                    </div>
                  </div>

                  {/* Arch */}
                  <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src="/cs180-portfolio/project-1/colorized_arch.jpg" 
                      alt="Colorized Arch" 
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold text-black mb-2">Arch</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                        <p className="text-xs">Green: (3, -1)</p>
                        <p className="text-xs">Red: (6, -2)</p>
                      </div>
                    </div>
                  </div>

                  {/* Rug */}
                  <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src="/cs180-portfolio/project-1/colorized_rug.jpg" 
                      alt="Colorized Rug" 
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold text-black mb-2">Rug</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                        <p className="text-xs">Green: (4, 2)</p>
                        <p className="text-xs">Red: (8, 3)</p>
                      </div>
                    </div>
                  </div>

                  {/* Botanical Garden */}
                  <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src="/cs180-portfolio/project-1/colorized_botanical_garden.jpg" 
                      alt="Colorized Botanical Garden" 
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold text-black mb-2">Botanical Garden</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-sm font-semibold mb-2">Alignment Displacements</p>
                        <p className="text-xs">Green: (4, 2)</p>
                        <p className="text-xs">Red: (8, 2)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br></br>

              {/* Future Steps Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Future Steps
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h5 className="font-semibold text-black mb-2">Advanced Edge Detection</h5>
                    <p className="text-black text-sm">I started implementing Sobel edge detection to improve alignment for challenging images like emir.tif, but I would like to fully refine my implementation and apply it!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-6 text-center">Displacement Summary Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-black font-semibold">
                        <th className="px-4 py-3 text-left border-b border-gray-200">Image</th>
                        <th className="px-4 py-3 text-center border-b border-gray-200">Green Channel</th>
                        <th className="px-4 py-3 text-center border-b border-gray-200">Red Channel</th>
                      </tr>
                    </thead>
                    <tbody className="text-black">
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Cathedral</td>
                        <td className="px-4 py-2 text-center">(5, 2)</td>
                        <td className="px-4 py-2 text-center">(12, 3)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Church</td>
                        <td className="px-4 py-2 text-center">(25, 4)</td>
                        <td className="px-4 py-2 text-center">(58, -4)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Emir</td>
                        <td className="px-4 py-2 text-center">(49, 24)</td>
                        <td className="px-4 py-2 text-center">(104, 57)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Harvesters</td>
                        <td className="px-4 py-2 text-center">(60, 17)</td>
                        <td className="px-4 py-2 text-center">(124, 14)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Icon</td>
                        <td className="px-4 py-2 text-center">(41, 17)</td>
                        <td className="px-4 py-2 text-center">(89, 23)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Italil</td>
                        <td className="px-4 py-2 text-center">(38, 21)</td>
                        <td className="px-4 py-2 text-center">(76, 35)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Lastochikino</td>
                        <td className="px-4 py-2 text-center">(-3, -2)</td>
                        <td className="px-4 py-2 text-center">(75, -9)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Lugano</td>
                        <td className="px-4 py-2 text-center">(41, -16)</td>
                        <td className="px-4 py-2 text-center">(93, -29)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Melons</td>
                        <td className="px-4 py-2 text-center">(82, 11)</td>
                        <td className="px-4 py-2 text-center">(178, 13)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Monastery</td>
                        <td className="px-4 py-2 text-center">(-3, 2)</td>
                        <td className="px-4 py-2 text-center">(3, 2)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Self Portrait</td>
                        <td className="px-4 py-2 text-center">(79, 29)</td>
                        <td className="px-4 py-2 text-center">(176, 37)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Siren</td>
                        <td className="px-4 py-2 text-center">(49, -6)</td>
                        <td className="px-4 py-2 text-center">(96, -25)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Three Generations</td>
                        <td className="px-4 py-2 text-center">(53, 14)</td>
                        <td className="px-4 py-2 text-center">(112, 11)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Tobolsk</td>
                        <td className="px-4 py-2 text-center">(3, 3)</td>
                        <td className="px-4 py-2 text-center">(6, 3)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Mosque</td>
                        <td className="px-4 py-2 text-center">(1, 1)</td>
                        <td className="px-4 py-2 text-center">(4, 1)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Rose Garden</td>
                        <td className="px-4 py-2 text-center">(0, 1)</td>
                        <td className="px-4 py-2 text-center">(3, 1)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Arch</td>
                        <td className="px-4 py-2 text-center">(3, -1)</td>
                        <td className="px-4 py-2 text-center">(6, -2)</td>
                      </tr>
                      <tr className="border-b border-purple-100 hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Rug</td>
                        <td className="px-4 py-2 text-center">(4, 2)</td>
                        <td className="px-4 py-2 text-center">(8, 3)</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="px-4 py-2 font-medium">Botanical Garden</td>
                        <td className="px-4 py-2 text-center">(4, 2)</td>
                        <td className="px-4 py-2 text-center">(8, 2)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
          )}

          {activeTab === 'project2' && (
              <div className="space-y-8 text-left">
                <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">
                  Project 2: Fun with Filters and Frequencies!
                </h3>
                <p className="text-black italic">Exploring 2D convolutions, edge detection, and frequency domain techniques</p>
              </div>

              {/* Part 1: Fun with Filters */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-2xl font-bold text-black mb-6 flex items-center">
                  Part 1: Fun with Filters
                </h4>
                
                {/* Part 1.1: Convolutions from Scratch */}
                <div className="border-l-4 border-blue-400 pl-6 bg-gray-50/50 rounded-r-lg py-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 1.1: Convolutions from Scratch!
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    Implemented convolution with four for loops, then two for loops. Added padding with zero fill values and compared with scipy.signal.convolve2d.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-sm text-black font-medium mb-2">Four Loop Implementation:</p>
                    <pre className="text-xs text-gray-700 bg-white p-2 rounded overflow-x-auto">
{`def convolve2d(im1, im2, padding=0):
    im2_height, im2_width = im2.shape
    im1_height, im1_width = im1.shape

    # pad
    padded_im1 = np.pad(im1, padding, mode='constant', constant_values=0)
    
    # get output dimensions based on padding type
    if isinstance(padding, tuple):
        pad_y = padding[0][0] + padding[0][1]
        pad_x = padding[1][0] + padding[1][1]
    else:
        pad_y = 2 * padding
        pad_x = 2 * padding
    
    # out_array
    output_height = im1_height - im2_height + 1 + pad_y
    output_width = im1_width - im2_width + 1 + pad_x
    
    # 0 fill from spec
    output = np.zeros((output_height, output_width))

    for i in range(output_height):
        for j in range(output_width):
            temp_sum = 0
            for k in range(im2_height):
                for l in range(im2_width):
                    temp_sum += padded_im1[i+k][j+l] * im2[k][l]
            output[i][j] = temp_sum
            
    return output`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-sm text-black font-medium mb-2">Two Loop Implementation:</p>
                    <pre className="text-xs text-gray-700 bg-white p-2 rounded overflow-x-auto">
{`def convolve2d_fast(im1, im2, padding=0):
    im2_height, im2_width = im2.shape
    im1_height, im1_width = im1.shape
    
    # pad
    padded_im1 = np.pad(im1, padding, mode='constant', constant_values=0)

    # get output dimensions based on padding type
    if isinstance(padding, tuple):
        pad_y = padding[0][0] + padding[0][1]
        pad_x = padding[1][0] + padding[1][1]
    else:
        pad_y = 2 * padding
        pad_x = 2 * padding

    # out_array
    output_height = im1_height - im2_height + 1 + pad_y
    output_width = im1_width - im2_width + 1 + pad_x
    
    # 0 fill from spec
    output = np.zeros((output_height, output_width))

    for i in range(output_height):
        for j in range(output_width):
            output[i][j] = np.sum(padded_im1[i:i+im2_height, j:j+im2_width] * im2)
    
    return output`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-sm text-black font-medium mb-2">Runtime Analysis & Comparison:</p>
                    <div className="text-xs text-black space-y-3">
                      <p><strong>Four Loop Implementation:</strong> This approach has a time complexity of O(H×W×K×L) where H,W represent image dimensions and K,L represent kernel dimensions. The explicit nested loops make the algorithm clear and easy to understand, but they are computationally expensive. Each output pixel requires K×L multiplications and additions, and there is no vectorization since it uses pure Python loops.</p>
                      
                      <p><strong>Two Loop Implementation:</strong> This method achieves a significant improvement with O(H×W) time complexity. It uses numpy.sum() for vectorized operations on kernel-sized patches, leveraging the optimized C code in numpy for element-wise operations. This approach is much faster than four loops while still maintaining algorithmic clarity.</p>
                      
                      <p><strong>scipy.signal.convolve2d:</strong> This is a highly optimized C implementation with additional optimizations beyond basic convolution. It uses FFT-based convolution for large kernels when it’s more efficient, is memory-efficient, and handles edge cases automatically. This is the fastest option, typically achieving 10-100x speedup over naive implementations.</p>
                      
                      <p><strong>Boundary Handling:</strong> Zero padding preserves output dimensions (same mode) and prevents information loss at image boundaries. All three methods produce identical results when proper padding is applied, demonstrating the correctness of the implementations and the importance of boundary handling in convolution operations.</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Original Image</h6>
                    <div className="text-center">
                      <img 
                        src="/cs180-portfolio/project-2/convolveOut/before.jpg" 
                        alt="Original selfie" 
                        className="w-full max-w-md h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                      />
                      <p className="text-sm font-semibold text-black">Selfie (Grayscale)</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">9×9 Box Filter Results</h6>
                    <p className="text-sm text-black mb-3">All three implementations produce identical results, demonstrating correctness:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_box_scratch.jpg" 
                          alt="Box filter - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Slowest but clearest</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_box_fast.jpg" 
                          alt="Box filter - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Faster with numpy</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_box_lib.jpg" 
                          alt="Box filter - scipy" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">scipy.signal.convolve2d</p>
                        <p className="text-xs text-black">Fastest implementation</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Dx Finite Difference (Horizontal Edges)</h6>
                    <p className="text-sm text-black mb-3">Detects vertical edges by computing horizontal gradients. The difference is especially prominent in the bridge lines in the background:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dx_scratch.jpg" 
                          alt="Dx - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Kernel: [[1, 0, -1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dx_fast.jpg" 
                          alt="Dx - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Identical results</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dx_lib.jpg" 
                          alt="Dx - scipy" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">scipy.signal.convolve2d</p>
                        <p className="text-xs text-black">Same output, faster</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Dy Finite Difference (Vertical Edges)</h6>
                    <p className="text-sm text-black mb-3">Detects horizontal edges by computing vertical gradients. The difference is especially prominent in the bridge lines in the background:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dy_scratch.jpg" 
                          alt="Dy - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Kernel: [[1], [0], [-1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dy_fast.jpg" 
                          alt="Dy - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Identical results</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/convolveOut/im_dy_lib.jpg" 
                          alt="Dy - scipy" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">scipy.signal.convolve2d</p>
                        <p className="text-xs text-black">Same output, faster</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">25×25 Box Filter Results</h6>
                    <p className="text-sm text-black mb-3">
                      The blur effect from the 9×9 box filter wasn't very noticeable to me, so I experimented with a larger kernel size. 
                      Using a 25×25 box filter creates a much more dramatic blurring effect, making it easier to see the difference 
                      between the original image and the convolved result.
                    </p>
                    <div className="text-center">
                      <img 
                        src="/cs180-portfolio/project-2/convolveOut/im_box_25_scratch.jpg" 
                        alt="25x25 box filter result" 
                        className="w-full max-w-md h-auto rounded-lg shadow-md border-2 border-gray-200 mb-2"
                      />
                      <p className="text-sm font-semibold text-black">25×25 Box Filter</p>
                      <p className="text-xs text-black">More dramatic blurring effect</p>
                    </div>
                  </div>
                </div>

                {/* Part 1.2: Finite Difference Operator */}
                <div className="border-l-4 border-green-400 pl-6 bg-gray-50/50 rounded-r-lg py-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 1.2: Finite Difference Operator
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    Computed partial derivatives in x and y directions using finite difference operators Dx and Dy on the cameraman image. 
                    The gradient magnitude combines both derivatives, and binarization with appropriate thresholding creates a clean edge image.
                  </p>
                  
                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Original Image and Partial Derivatives</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman.png" 
                          alt="Original cameraman image" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Cameraman</p>
                        <p className="text-xs text-black">Original grayscale picture</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_dx.jpg" 
                          alt="Cameraman Dx derivative" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Dx Derivative</p>
                        <p className="text-xs text-black">Horizontal edges</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_dy.jpg" 
                          alt="Cameraman Dy derivative" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Dy Derivative</p>
                        <p className="text-xs text-black">Vertical edges</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_gradient_magnitude.jpg" 
                          alt="Gradient magnitude" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Gradient Magnitude</p>
                        <p className="text-xs text-black">√(Dx² + Dy²)</p>
                      </div>
                    </div>
                  </div>

                    <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Binarized Edge Images with Different Thresholds</h6>
                    <p className="text-sm text-black mb-3">
                      Finding the right threshold required several attempts to balance noise suppression with edge preservation. 
                      Too low a threshold captures noise, while too high a threshold misses important edges.
                    </p>
                    
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                      <p className="text-sm text-black font-medium mb-2">Threshold Selection and Justification:</p>
                      <p className="text-xs text-black">
                        I tested four different thresholds based on gradient magnitude percentiles: Threshold 1 at 70th percentile (0.0456), 
                        Threshold 2 at 80th percentile (0.0654), Threshold 3 at 85th percentile (0.0789), and Threshold 4 at 90th percentile (0.0987). 
                        After analyzing the results, I selected Threshold 3 (85th percentile, 0.0789) as the optimal choice. This threshold provides 
                        a good balance between noise suppression and edge preservation - it removes most of the background noise while maintaining 
                        clear structural edges like the camera body, tripod, and building outlines. Threshold 1 was too noisy, Threshold 2 still 
                        had some noise artifacts, and Threshold 4 was too restrictive, missing important edge details. The 85th percentile approach 
                        ensures that only the strongest 15% of gradient magnitudes are preserved as edges, effectively filtering out noise while 
                        retaining meaningful image structure.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_edges_thresh_1.jpg" 
                          alt="Threshold 1" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 1</p>
                        <p className="text-xs text-black">70th percentile (0.0456) - Too low, noisy</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_edges_thresh_2.jpg" 
                          alt="Threshold 2" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 2</p>
                        <p className="text-xs text-black">80th percentile (0.0654) - Getting better</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_edges_thresh_3.jpg" 
                          alt="Threshold 3" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 3</p>
                        <p className="text-xs text-black">85th percentile (0.0789) - Good balance</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/binaryOut/cameraman_edges_thresh_4.jpg" 
                          alt="Threshold 4" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 4</p>
                        <p className="text-xs text-black">90th percentile (0.0987) - Too high, missing edges</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.3: Derivative of Gaussian (DoG) Filter */}
                <div className="border-l-4 border-purple-400 pl-6 bg-gray-50/50 rounded-r-lg py-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 1.3: Derivative of Gaussian (DoG) Filter
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    The results from the finite difference operators were quite noisy. To address this, we use a Gaussian filter G for smoothing. 
                    First, we create a 2D Gaussian filter using cv2.getGaussianKernel() to create a 1D Gaussian, then take the outer product with 
                    its transpose to get a 2D Gaussian kernel. We then apply both Gaussian smoothing followed by finite differences, and create 
                    DoG filters by convolving the Gaussian directly with Dx and Dy operators.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-sm text-black font-medium mb-2">Code Implementation:</p>
                    <pre className="text-xs text-gray-700 bg-white p-2 rounded overflow-x-auto">
{`def create_2d_gaussian(size, sigma):
    gaussian_1d = cv2.getGaussianKernel(size, sigma)
    gaussian_2d = np.outer(gaussian_1d, gaussian_1d.T)
    return gaussian_2d

# Create Gaussian filter (15x15, sigma=2.0)
gaussian_filter = create_2d_gaussian(15, 2.0)

# Method 1: Gaussian smoothing then finite differences
im_smoothed = conv2d(im, gaussian_filter, mode='same')
dx_smoothed = finite_diff_x(im_smoothed)
dy_smoothed = finite_diff_y(im_smoothed)

# Method 2: Create DoG filters directly
dog_x_filter = conv2d(gaussian_filter, [[1, 0, -1]], mode='full')
dog_y_filter = conv2d(gaussian_filter, [[1], [0], [-1]], mode='full')
dx_dog = conv2d(im, dog_x_filter, mode='same')
dy_dog = conv2d(im, dog_y_filter, mode='same')`}
                    </pre>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Gaussian Filter and Blurred Image</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/gaussian_filter.jpg" 
                          alt="2D Gaussian filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">2D Gaussian Filter</p>
                        <p className="text-xs text-black">15×15 kernel, σ = 2.0</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/cameraman_blurred.jpg" 
                          alt="Blurred cameraman image" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Cameraman Blurred with Gaussian</p>
                      <p className="text-xs text-black">Original image ⊗ Gaussian filter</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Gaussian Smoothing + Finite Differences</h6>
                    <p className="text-sm text-black mb-3">
                      First approach: Apply Gaussian smoothing to reduce noise, then compute finite differences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/cameraman_dx_smoothed.jpg" 
                          alt="Dx after Gaussian smoothing" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dx After Gaussian Smoothing</p>
                        <p className="text-xs text-black">Much less noisy than raw finite differences</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/cameraman_dy_smoothed.jpg" 
                          alt="Dy after Gaussian smoothing" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dy After Gaussian Smoothing</p>
                        <p className="text-xs text-black">Cleaner edge detection</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Derivative of Gaussian (DoG) Filters</h6>
                    <p className="text-sm text-black mb-3">
                      Second approach: Create DoG filters by convolving Gaussian with finite difference operators, then apply directly to image.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/dog_x_filter.jpg" 
                          alt="DoG X filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">DoG X Filter</p>
                        <p className="text-xs text-black">Gaussian ⊗ [[1, 0, -1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/dog_y_filter.jpg" 
                          alt="DoG Y filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">DoG Y Filter</p>
                        <p className="text-xs text-black">Gaussian ⊗ [[1], [0], [-1]]</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/cameraman_dx_dog.jpg" 
                          alt="Dx using DoG filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dx Using DoG Filter</p>
                        <p className="text-xs text-black">Single convolution approach</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/gaussianOut/cameraman_dy_dog.jpg" 
                          alt="Dy using DoG filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dy Using DoG Filter</p>
                        <p className="text-xs text-black">Single convolution approach</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-black font-medium mb-2">Verification and Comparison:</p>
                    <p className="text-xs text-black">
                      To verify that both methods produce identical results, I computed the absolute difference between the smoothed finite difference 
                      results and the DoG filter results. The maximum difference was less than 1e-6 for both Dx and Dy, confirming that both approaches 
                      are mathematically equivalent. The key difference is computational efficiency - the DoG approach requires only one convolution 
                      per derivative instead of two (Gaussian smoothing + finite difference). This demonstrates the associative property of convolution: 
                      (I ⊗ G) ⊗ D = I ⊗ (G ⊗ D), where I is the image, G is the Gaussian, and D is the derivative operator.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 2: Fun with Frequencies */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-2xl font-bold text-black mb-6 flex items-center">
                  Part 2: Fun with Frequencies!
                </h4>

                {/* Part 2.1: Image Sharpening */}
                <div className="border-l-4 border-orange-400 pl-6 bg-gray-50/50 rounded-r-lg py-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 2.1: Image &quot;Sharpening&quot;
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    Implemented the unsharp masking technique to enhance image sharpness. This method works by extracting high-frequency details 
                    from an image and amplifying them to create a sharper appearance.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="text-sm text-black font-medium mb-2">How Unsharp Masking Works:</p>
                    <p className="text-xs text-black mb-3">
                      The unsharp masking technique is based on frequency decomposition. A Gaussian filter acts as a low-pass filter, 
                      retaining only the low frequencies (smooth regions) of an image. By subtracting this blurred version from the 
                      original image, we extract the high frequencies (edges and fine details). Adding these amplified high frequencies 
                      back to the original image enhances sharpness and contrast.
                    </p>
                    
                    <div className="bg-white p-3 rounded border-l-4 border-orange-400 mb-3">
                      <p className="text-xs text-black font-medium mb-1">Mathematical Formula:</p>
                      <p className="text-xs text-black font-mono">Sharpened = Original + α × (Original - Gaussian_Blur)</p>
                      <p className="text-xs text-black font-mono">Sharpened = Original + α × High_Frequencies</p>
                      <p className="text-xs text-black mt-1">Where α controls the sharpening strength</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <p className="text-xs text-black font-medium mb-1">Unsharp Mask Filter (Single Convolution):</p>
                      <p className="text-xs text-black font-mono">Unsharp_Filter = Identity + α × (Identity - Gaussian)</p>
                      <p className="text-xs text-black mt-1">This combines the entire operation into a single convolution for efficiency</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Taj Mahal Sharpening Results</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/Taj (1).jpg" 
                          alt="Original Taj Mahal" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Taj Mahal</p>
                        <p className="text-xs text-black">Input image</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/taj_blurred.jpg" 
                          alt="Blurred Taj Mahal" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Gaussian Blur</p>
                        <p className="text-xs text-black">Low frequencies only</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/taj_high_frequencies.jpg" 
                          alt="High frequencies" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">High Frequencies</p>
                        <p className="text-xs text-black">Original - Blurred</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/taj_sharpened_1.5.jpg" 
                          alt="Sharpened Taj Mahal" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Sharpened Result</p>
                        <p className="text-xs text-black">Strength α = 1.5</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h6 className="text-md font-semibold text-black mb-3">Varying Sharpening Strength (Taj Mahal)</h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/project-2/sharpenOut/taj_sharpened_0.5.jpg" 
                            alt="Taj sharpened 0.5" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 0.5</p>
                          <p className="text-xs text-gray-600">Subtle enhancement</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/project-2/sharpenOut/taj_sharpened_1.0.jpg" 
                            alt="Taj sharpened 1.0" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 1.0</p>
                          <p className="text-xs text-gray-600">Moderate sharpening</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/project-2/sharpenOut/taj_sharpened_1.5.jpg" 
                            alt="Taj sharpened 1.5" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 1.5</p>
                          <p className="text-xs text-gray-600">Strong sharpening</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/project-2/sharpenOut/taj_sharpened_2.0.jpg" 
                            alt="Taj sharpened 2.0" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 2.0</p>
                          <p className="text-xs text-gray-600">Very strong (artifacts)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Golden Gate Bridge - Additional Example</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate.jpg" 
                          alt="Original Golden Gate" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Golden Gate</p>
                        <p className="text-xs text-black">Input image</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_blurred.jpg" 
                          alt="Blurred Golden Gate" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Gaussian Blur</p>
                        <p className="text-xs text-black">Low frequencies</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_high_frequencies.jpg" 
                          alt="Golden Gate high frequencies" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">High Frequencies</p>
                        <p className="text-xs text-black">Bridge cables and details</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_sharpened_1.5.jpg" 
                          alt="Sharpened Golden Gate" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Sharpened Result</p>
                        <p className="text-xs text-black">Enhanced bridge details</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-black mb-4">Evaluation: Blur and Re-sharpen Test</h6>
                    <p className="text-sm text-black mb-3">
                      To evaluate the sharpening technique, I took a sharp image, artificially blurred it, then attempted to 
                      re-sharpen it using different strength values.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_eval_original.jpg" 
                          alt="Original sharp image" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Sharp</p>
                        <p className="text-xs text-black">Ground truth</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_eval_blurred.jpg" 
                          alt="Artificially blurred" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Artificially Blurred</p>
                        <p className="text-xs text-black">Stronger Gaussian blur</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/project-2/sharpenOut/golden-gate_eval_resharpened_1.5.jpg" 
                          alt="Re-sharpened" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Re-sharpened</p>
                        <p className="text-xs text-black">Attempted recovery</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-black font-medium mb-2">Observations and Analysis:</p>
                      <p className="text-xs text-black">
                        The re-sharpening process can partially recover some detail, but cannot fully restore the original sharpness. 
                        This is because Gaussian blurring is an irreversible information loss - once high-frequency details are averaged 
                        out, they cannot be perfectly reconstructed. The unsharp masking technique enhances existing edges and details 
                        rather than creating new information. Optimal results are achieved when α ≈ 1.0-1.5; higher values introduce 
                        artifacts and noise amplification, while lower values provide insufficient enhancement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Part 2.2: Hybrid Images */}
                <div className="border-l-4 border-red-400 pl-6 bg-gray-50/50 rounded-r-lg py-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 2.2: Hybrid Images
                  </h5>
                  <p className="text-black leading-relaxed mb-6">
                    Hybrid images blend the low-frequency content of one image with the high-frequency content of another. Up close, high frequencies dominate; at a distance, low frequencies prevail.
                  </p>

                  {/* Derek + Nutmeg (full process) */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 shadow mb-6">
                    <h6 className="text-lg font-semibold text-black mb-3">Derek + Nutmeg (Full Process)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_high_input.jpg" alt="Derek (high input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-frequency input</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_low_input.jpg" alt="Nutmeg (low input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-frequency input</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_high_aligned.jpg" alt="Derek aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High image (aligned & cropped)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_low_aligned.jpg" alt="Nutmeg aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low image (aligned & cropped)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_high_only.jpg" alt="High-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_low_only.jpg" alt="Low-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_hybrid.jpg" alt="Hybrid image" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Final hybrid</p>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-2/hybrid_python/derek_nutmeg_fourier_process.jpg" alt="Derek+Nutmeg Fourier process" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200" />
                    </div>
                  </div>

                  {/* Pigeon + Akki (full process with Fourier) */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 shadow mb-6">
                    <h6 className="text-lg font-semibold text-black mb-3">Pigeon + Akki (Full Process)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_high_input.jpg" alt="Pigeon (high input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-frequency input</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_low_input.jpg" alt="Akki (low input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-frequency input</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_high_aligned.jpg" alt="Pigeon aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High image (aligned & cropped)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_low_aligned.jpg" alt="Akki aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low image (aligned & cropped)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_high_only.jpg" alt="High-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_low_only.jpg" alt="Low-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_hybrid.jpg" alt="Hybrid image" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Final hybrid</p>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-2/hybrid_python/pigeon_akki_fourier_process.jpg" alt="Pigeon+Akki Fourier process" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200" />
                    </div>
                  </div>

                  {/* Beach + City (final only) */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 shadow">
                    <h6 className="text-lg font-semibold text-black mb-3">Beach + City (Final Hybrid)</h6>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-2/hybrid_python/beach_city_result.jpg" alt="Beach+City hybrid" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                      <p className="text-xs text-black">Inputs filtered (low + high) and summed to create the hybrid.</p>
                    </div>
                  </div>
                </div>

                {/* Part 2.3: Gaussian and Laplacian Stacks */}
                <div className="border-l-4 border-indigo-400 pl-6 bg-gray-50/50 rounded-r-lg py-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 2.3: Gaussian and Laplacian Stacks
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    Implemented Gaussian and Laplacian stacks (without downsampling) and applied them to recreate the Oraple visualization from Szelski Figure 3.42.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-black font-medium mb-3">Apple + Orange (Oraple) Stacks</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_gaussian_A.jpg" alt="Oraple A Gaussian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_gaussian_B.jpg" alt="Oraple B Gaussian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_laplacian_A.jpg" alt="Oraple A Laplacian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_laplacian_B.jpg" alt="Oraple B Laplacian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 2.4: Multiresolution Blending */}
                <div className="border-l-4 border-teal-400 pl-6 bg-gray-50/50 rounded-r-lg py-6">
                  <h5 className="text-xl font-bold text-black mb-4">
                    Part 2.4: Multiresolution Blending (The Oraple!)
                  </h5>
                  <p className="text-black leading-relaxed mb-4">
                    Used Gaussian and Laplacian stacks to blend images seamlessly with vertical/horizontal seams and irregular masks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_blend_vertical.jpg" alt="Oraple vertical seam" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Vertical seam</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_blend_horizontal.jpg" alt="Oraple horizontal seam" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Horizontal seam</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/oraple_blend_circular.jpg" alt="Oraple circular mask" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Irregular/circular mask</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-black font-medium mb-3">Additional Creative Blends</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/flowers_space_blend_circular.jpg" alt="Flowers+Space circular" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                        <p className="text-xs text-black mt-1">Flowers + Space (circular)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-2/gaussianLaplacianBlendOut/mountain_borealis_blend_horizontal.jpg" alt="Mountain+Borealis horizontal" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                        <p className="text-xs text-black mt-1">Mountain + Borealis (horizontal)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  Conclusion
                </h4>
                <p className="text-black leading-relaxed">
                  The most important thing I learned from this project is how fundamental mathematical operations like convolution 
                  form the backbone of modern computer vision. Starting from scratch with four nested loops to implement convolution 
                  gave me a deep appreciation for the computational complexity behind seemingly simple image operations. 
                  Understanding how spatial domain filtering translates to frequency domain manipulation through Fourier transforms 
                  revealed the elegant duality between these representations. This project taught me that behind every sophisticated 
                  image processing technique lies careful mathematical reasoning and computational optimization.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'project3a' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Project 3A: Image Warping and Mosaicing</h3>
                <p className="text-black italic">Homographies, inverse warping, rectification, and mosaics</p>
              </div>

              {/* Overview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Overview</h4>
                <p className="text-black leading-relaxed">
                  The goal of this assignment is to register, warp, resample, and composite images into mosaics.
                  I did this via computing homographies between images and using them to perform inverse warping and blending.
                </p>
              </div>

              {/* A.1 Shoot the Pictures */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">A.1: Shoot and Digitize Pictures</h4>
                <p className="text-black leading-relaxed mb-3">
                  I did this by capturing 2 photographs with a fixed center of projection and rotating the camera.
                </p>
                
                {/* Image Set 1: Strawberry Creek Bridge & Campanile */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Image Set 1: Strawberry Creek Bridge &amp; Campanile</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/left.jpg" alt="Left view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Left</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/center.jpg" alt="Center view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Center</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/right.jpg" alt="Right view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Right</p>
                    </div>
                  </div>
                </div>

                {/* Image Set 2: Sunset on my rooftop */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Image Set 2: Sunset on my rooftop</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/left2.jpg" alt="Left view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Left</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/center2.jpg" alt="Center view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Center</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/right2.jpg" alt="Right view" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Right</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* A.2 Recover Homographies */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">A.2: Recover Homographies</h4>
                <p className="text-black leading-relaxed mb-4">
                  To compute homographies between image pairs, I implemented a least-squares solver that recovers the 3×3 transformation matrix from point correspondences. I manually selected corresponding points using the <a href="https://cal-cs180.github.io/fa23/hw/proj3/tool.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">correspondence tool</a> for each image pair.
                </p>

                {/* Point Correspondences Visualization */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Point Correspondences</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/a2left.jpg" alt="Image 1" className="w-full h-96 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Image 1 (Source)</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/a2right.jpg" alt="Image 2" className="w-full h-96 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Image 2 (Target)</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/a2_correspondences.jpg" alt="Correspondences Image 1" className="w-full h-96 object-contain rounded-lg border-2 border-blue-400 mb-2" />
                      <p className="text-xs text-black">Corresponding points marked</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/a2_correspondence_lines.jpg" alt="Correspondences Image 2" className="w-full h-96 object-contain rounded-lg border-2 border-blue-400 mb-2" />
                      <p className="text-xs text-black">Correspondences with connecting lines</p>
                    </div>
                  </div>
                </div>

                {/* Implementation Explanation */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 mb-6">
                  <h5 className="text-lg font-semibold text-black mb-4">Implementation: computeH(im1_pts, im2_pts)</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Mathematical Formulation</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      A homography matrix <strong>H</strong> relates corresponding points between two images through the projective transformation:
                    </p>
                    <div className="bg-white p-3 rounded border border-blue-200 mb-3 font-mono text-sm">
                      H · [x, y, 1]ᵀ = λ[u, v, 1]ᵀ
                    </div>
                    <p className="text-black text-sm leading-relaxed">
                      Where (x, y) are coordinates in the first image and (u, v) are corresponding coordinates in the second image.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Least Squares Solution</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      Given n corresponding point pairs, we construct a system of linear equations <strong>Ah = b</strong>, where A is a 2n × 8 matrix, h is the 8-element vector of homography parameters, and b contains the target coordinates.
                    </p>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      For each point pair (xᵢ, yᵢ) ↔ (uᵢ, vᵢ), we add two equations by setting h₃₃ = 1:
                    </p>
                    <div className="bg-white p-3 rounded border border-blue-200 mb-3 space-y-2">
                      <div className="font-mono text-xs text-black">
                        Row 1: [-x, -y, -1,  0,  0,  0, u·x, u·y] · h = -u
                      </div>
                      <div className="font-mono text-xs text-black">
                        Row 2: [ 0,  0,  0, -x, -y, -1, v·x, v·y] · h = -v
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Key Implementation Details</h6>
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <pre className="text-xs overflow-x-auto text-black">
{`# Build least-squares system with h33 = 1 fixed
for (x, y), (u, v) in zip(pts1, pts2):
    A.append([-x, -y, -1,  0,  0,  0,  u*x, u*y])
    b.append(-u)
    A.append([ 0,  0,  0, -x, -y, -1,  v*x, v*y])
    b.append(-v)

# Solve least-squares and reconstruct H
x, _, _, _ = np.linalg.lstsq(A, b, rcond=None)
h11, h12, h13, h21, h22, h23, h31, h32 = x
H = np.array([[h11, h12, h13],
              [h21, h22, h23],
              [h31, h32, 1.0]])`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h6 className="text-md font-semibold text-black mb-2">Matrix Reconstruction</h6>
                    <p className="text-black text-sm leading-relaxed">
                      The solution vector h = [h₀, h₁, h₂, h₃, h₄, h₅, h₆, h₇]ᵀ is used to reconstruct the 3×3 homography matrix:
                    </p>
                    <div className="bg-white p-3 rounded border border-blue-200 mt-2 font-mono text-sm text-black">
                      H = [[h₀, h₁, h₂], [h₃, h₄, h₅], [h₆, h₇, 1]]
                    </div>
                  </div>
                </div>

                {/* System of Equations */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Complete System of Equations</h5>
                  <p className="text-black text-sm leading-relaxed mb-4">
                    With multiple correspondences, we have an overdetermined system. Below is the complete system in normalized coordinate space:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono max-h-96 overflow-y-auto">
                    <pre>{`COMPLETE SYSTEM OF EQUATIONS: Ah = b

Homography transformation: p' = Hp where p' = (u,v,1)^T and p = (x,y,1)^T

For each correspondence point pair, we get 2 equations:
  Equation 1: -x*h11 - y*h12 - h13 + 0*h21 + 0*h22 + 0*h23 + u*x*h31 + u*y*h32 = -u
  Equation 2: 0*h11 + 0*h12 + 0*h13 - x*h21 - y*h22 - h23 + v*x*h31 + v*y*h32 = -v

where h33 = 1 (fixed)

EQUATIONS (in normalized coordinate space):
Format: [h11_coef, h12_coef, h13_coef, h21_coef, h22_coef, h23_coef, h31_coef, h32_coef] = b

Eq  1 (Corr  0, u-equation): [  0.4949,  -1.7703,  -1.0000,   0.0000,   0.0000,   0.0000,   0.2316,  -0.8283] =   0.4679
Eq  2 (Corr  0, v-equation): [  0.0000,   0.0000,   0.0000,   0.4949,  -1.7703,  -1.0000,  -0.8253,   2.9521] =  -1.6676
Eq  3 (Corr  1, u-equation): [ -1.5749,  -1.7645,  -1.0000,   0.0000,   0.0000,   0.0000,   2.2605,   2.5326] =  -1.4353
Eq  4 (Corr  1, v-equation): [  0.0000,   0.0000,   0.0000,  -1.5749,  -1.7645,  -1.0000,   2.6036,   2.9170] =  -1.6531
Eq  5 (Corr  2, u-equation): [ -1.5144,  -1.5656,  -1.0000,   0.0000,   0.0000,   0.0000,   2.0815,   2.1519] =  -1.3745
Eq  6 (Corr  2, v-equation): [  0.0000,   0.0000,   0.0000,  -1.5144,  -1.5656,  -1.0000,   2.1525,   2.2253] =  -1.4214
Eq  7 (Corr  3, u-equation): [ -0.2892,  -1.5022,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0716,   0.3720] =  -0.2476
Eq  8 (Corr  3, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2892,  -1.5022,  -1.0000,   0.4345,   2.2570] =  -1.5025
Eq  9 (Corr  4, u-equation): [  0.3277,  -1.4618,  -1.0000,   0.0000,   0.0000,   0.0000,   0.1287,  -0.5739] =   0.3926
Eq 10 (Corr  4, v-equation): [  0.0000,   0.0000,   0.0000,   0.3277,  -1.4618,  -1.0000,  -0.5076,   2.2641] =  -1.5489
Eq 11 (Corr  5, u-equation): [ -1.3558,  -1.0755,  -1.0000,   0.0000,   0.0000,   0.0000,   1.7104,   1.3568] =  -1.2615
Eq 12 (Corr  5, v-equation): [  0.0000,   0.0000,   0.0000,  -1.3558,  -1.0755,  -1.0000,   1.3184,   1.0458] =  -0.9724
Eq 13 (Corr  6, u-equation): [ -0.3872,  -1.0640,  -1.0000,   0.0000,   0.0000,   0.0000,   0.1452,   0.3991] =  -0.3751
Eq 14 (Corr  6, v-equation): [  0.0000,   0.0000,   0.0000,  -0.3872,  -1.0640,  -1.0000,   0.4057,   1.1147] =  -1.0477
Eq 15 (Corr  7, u-equation): [  0.1865,  -0.7728,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0343,  -0.1422] =   0.1840
Eq 16 (Corr  7, v-equation): [  0.0000,   0.0000,   0.0000,   0.1865,  -0.7728,  -1.0000,  -0.1516,   0.6284] =  -0.8131
Eq 17 (Corr  8, u-equation): [  0.8351,  -0.8132,  -1.0000,   0.0000,   0.0000,   0.0000,   0.7536,  -0.7338] =   0.9024
Eq 18 (Corr  8, v-equation): [  0.0000,   0.0000,   0.0000,   0.8351,  -0.8132,  -1.0000,  -0.7637,   0.7436] =  -0.9145
Eq 19 (Corr  9, u-equation): [  0.3219,   0.8502,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0844,   0.2229] =   0.2622
Eq 20 (Corr  9, v-equation): [  0.0000,   0.0000,   0.0000,   0.3219,   0.8502,  -1.0000,   0.2782,   0.7347] =   0.8642
Eq 21 (Corr 10, u-equation): [  0.9648,   0.8127,  -1.0000,   0.0000,   0.0000,   0.0000,   0.9489,   0.7993] =   0.9835
Eq 22 (Corr 10, v-equation): [  0.0000,   0.0000,   0.0000,   0.9648,   0.8127,  -1.0000,   0.7946,   0.6694] =   0.8236
Eq 23 (Corr 11, u-equation): [ -0.3440,   0.1900,  -1.0000,   0.0000,   0.0000,   0.0000,   0.1470,  -0.0812] =  -0.4272
Eq 24 (Corr 11, v-equation): [  0.0000,   0.0000,   0.0000,  -0.3440,   0.1900,  -1.0000,  -0.0721,   0.0398] =   0.2095
Eq 25 (Corr 12, u-equation): [ -0.2950,   0.5706,  -1.0000,   0.0000,   0.0000,   0.0000,   0.1158,  -0.2239] =  -0.3925
Eq 26 (Corr 12, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2950,   0.5706,  -1.0000,  -0.1677,   0.3245] =   0.5687
Eq 27 (Corr 13, u-equation): [ -1.5173,   0.4005,  -1.0000,   0.0000,   0.0000,   0.0000,   2.2656,  -0.5980] =  -1.4932
Eq 28 (Corr 13, v-equation): [  0.0000,   0.0000,   0.0000,  -1.5173,   0.4005,  -1.0000,  -0.7002,   0.1848] =   0.4615
Eq 29 (Corr 14, u-equation): [ -1.2146,   3.0843,  -1.0000,   0.0000,   0.0000,   0.0000,   1.5744,  -3.9981] =  -1.2963
Eq 30 (Corr 14, v-equation): [  0.0000,   0.0000,   0.0000,  -1.2146,   3.0843,  -1.0000,  -3.5864,   9.1074] =   2.9528
Eq 31 (Corr 15, u-equation): [ -0.2027,   2.4617,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0707,  -0.8591] =  -0.3490
Eq 32 (Corr 15, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2027,   2.4617,  -1.0000,  -0.4987,   6.0565] =   2.4603
Eq 33 (Corr 16, u-equation): [ -0.2460,   1.8678,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0958,  -0.7276] =  -0.3896
Eq 34 (Corr 16, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2460,   1.8678,  -1.0000,  -0.4605,   3.4970] =   1.8723
Eq 35 (Corr 17, u-equation): [ -0.2488,   1.6631,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0991,  -0.6623] =  -0.3983
Eq 36 (Corr 17, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2488,   1.6631,  -1.0000,  -0.4154,   2.7766] =   1.6695
Eq 37 (Corr 18, u-equation): [  1.1839,  -0.0723,  -1.0000,   0.0000,   0.0000,   0.0000,   1.4971,  -0.0914] =   1.2645
Eq 38 (Corr 18, v-equation): [  0.0000,   0.0000,   0.0000,   1.1839,  -0.0723,  -1.0000,  -0.1601,   0.0098] =  -0.1352
Eq 39 (Corr 19, u-equation): [  0.9129,  -0.4211,  -1.0000,   0.0000,   0.0000,   0.0000,   0.8635,  -0.3983] =   0.9459
Eq 40 (Corr 19, v-equation): [  0.0000,   0.0000,   0.0000,   0.9129,  -0.4211,  -1.0000,  -0.4593,   0.2119] =  -0.5031
Eq 41 (Corr 20, u-equation): [  1.2070,   0.2679,  -1.0000,   0.0000,   0.0000,   0.0000,   1.5332,   0.3403] =   1.2703
Eq 42 (Corr 20, v-equation): [  0.0000,   0.0000,   0.0000,   1.2070,   0.2679,  -1.0000,   0.2913,   0.0647] =   0.2414
Eq 43 (Corr 21, u-equation): [  0.8610,   0.0863,  -1.0000,   0.0000,   0.0000,   0.0000,   0.7521,   0.0753] =   0.8734
Eq 44 (Corr 21, v-equation): [  0.0000,   0.0000,   0.0000,   0.8610,   0.0863,  -1.0000,   0.0407,   0.0041] =   0.0473
Eq 45 (Corr 22, u-equation): [  0.7601,  -0.1300,  -1.0000,   0.0000,   0.0000,   0.0000,   0.5803,  -0.0992] =   0.7634
Eq 46 (Corr 22, v-equation): [  0.0000,   0.0000,   0.0000,   0.7601,  -0.1300,  -1.0000,  -0.1182,   0.0202] =  -0.1555
Eq 47 (Corr 23, u-equation): [  1.3511,   0.5706,  -1.0000,   0.0000,   0.0000,   0.0000,   1.8807,   0.7942] =   1.3920
Eq 48 (Corr 23, v-equation): [  0.0000,   0.0000,   0.0000,   1.3511,   0.5706,  -1.0000,   0.7488,   0.3162] =   0.5542
Eq 49 (Corr 24, u-equation): [ -0.2171,  -0.4125,  -1.0000,   0.0000,   0.0000,   0.0000,   0.0569,   0.1081] =  -0.2621
Eq 50 (Corr 24, v-equation): [  0.0000,   0.0000,   0.0000,  -0.2171,  -0.4125,  -1.0000,   0.0847,   0.1609] =  -0.3901

Matrix A shape: (50, 8) | Vector b shape: (50,)
`}</pre>
                  </div>
                </div>

                {/* Recovered Homography */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Recovered Homography Matrix (Source → Target)</h5>
                  <p className="text-black text-sm leading-relaxed mb-3">
                    The least-squares solution yields the following homography matrix H, which maps points from the source image to the target image:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <pre>{`H maps points from Source to Target: p_target = H * p_source

[[ 1.25965271e+00 -4.47193026e-02 -5.15388894e+02]
 [ 2.04026908e-01  1.17932617e+00 -1.54973764e+02]
 [ 1.65831711e-04  9.97615699e-06  1.00000000e+00]]`}</pre>
                  </div>
                </div>

                {/* Center-Right Pair */}
                <div className="border-t-2 border-gray-300 pt-6 mt-6">
                  <h5 className="text-lg font-semibold text-black mb-4">Second Image Pair: Center view of Campanile from Strawberry Creek → Right view</h5>
                  
                  {/* Correspondence Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/center_right_correspondences.jpg" alt="Correspondence Points - Center to Right (4 points)" className="w-full h-96 object-contain rounded-lg border-2 border-blue-400 mb-2" />
                      <p className="text-xs text-black">Correspondence Points - Center to Right (4 points)</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3a/center_right_correspondence_lines.jpg" alt="Correspondence Lines - Center to Right (4 points)" className="w-full h-96 object-contain rounded-lg border-2 border-blue-400 mb-2" />
                      <p className="text-xs text-black">Correspondence Lines - Center to Right (4 points)</p>
                    </div>
                  </div>
                  
                  {/* System of Equations for Center-Right */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Complete System of Equations</h6>
                    <p className="text-black text-sm leading-relaxed mb-4">
                      For the center-right image pair, the complete system in normalized coordinate space:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono max-h-96 overflow-y-auto">
                      <pre>{`COMPLETE SYSTEM OF EQUATIONS: Ah = b (Center-Right Pair)

Homography transformation: p' = Hp where p' = (u,v,1)^T and p = (x,y,1)^T

For each correspondence point pair, we get 2 equations:
  Equation 1: -x*h11 - y*h12 - h13 + 0*h21 + 0*h22 + 0*h23 + u*x*h31 + u*y*h32 = -u
  Equation 2: 0*h11 + 0*h12 + 0*h13 - x*h21 - y*h22 - h23 + v*x*h31 + v*y*h32 = -v

where h33 = 1 (fixed)

EQUATIONS (in normalized coordinate space):
Format: [h11_coef, h12_coef, h13_coef, h21_coef, h22_coef, h23_coef, h31_coef, h32_coef] = b

Eq  1 (Corr  0, u-equation): [  0.6289,   2.2835,  -1.0000,   0.0000,   0.0000,   0.0000,   0.3124,   1.1343] =   0.4967
Eq  2 (Corr  0, v-equation): [  0.0000,   0.0000,   0.0000,   0.6289,   2.2835,  -1.0000,   1.4635,   5.3142] =   2.3272
Eq  3 (Corr  1, u-equation): [ -0.5570,  -1.1764,  -1.0000,   0.0000,   0.0000,   0.0000,   0.2767,   0.5844] =  -0.4967
Eq  4 (Corr  1, v-equation): [  0.0000,   0.0000,   0.0000,  -0.5570,  -1.1764,  -1.0000,   0.6170,   1.3032] =  -1.1078
Eq  5 (Corr  2, u-equation): [  0.6099,  -1.1520,  -1.0000,   0.0000,   0.0000,   0.0000,   0.4077,  -0.7701] =   0.6685
Eq  6 (Corr  2, v-equation): [  0.0000,   0.0000,   0.0000,   0.6099,  -1.1520,  -1.0000,  -0.7465,   1.4100] =  -1.2240
Eq  7 (Corr  3, u-equation): [ -0.6818,   0.0448,  -1.0000,   0.0000,   0.0000,   0.0000,   0.4558,  -0.0299] =  -0.6685
Eq  8 (Corr  3, v-equation): [  0.0000,   0.0000,   0.0000,  -0.6818,   0.0448,  -1.0000,  -0.0032,   0.0002] =   0.0046

Matrix A shape: (8, 8) | Vector b shape: (8,)
`}</pre>
                    </div>
                  </div>

                  {/* Recovered Homography for Center-Right */}
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Recovered Homography Matrix (Center → Right)</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      The homography matrix H mapping points from the center image to the right image:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`H maps points from Center to Right: p_right = H * p_center

[[ 1.58561381e+00 -7.25189509e-02 -7.41536337e+02]
 [ 4.63038690e-01  1.37287860e+00 -4.86638181e+02]
 [ 3.85086877e-04  6.81732362e-06  1.00000000e+00]]`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* A.3 Warp the Images */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">A.3: Warp the Images</h4>
                <p className="text-black leading-relaxed mb-4">
                  With homography parameters recovered, I implemented inverse warping to avoid holes in the output image.
                  I implemented two interpolation methods from scratch: Nearest Neighbor and Bilinear interpolation.
                  I chose to rectify my two most beloved possessions in this world: my laptop and my UGBA102B Managerial Accounting folder.
                </p>

                {/* Implementation Methodology */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-300 mb-6">
                  <h5 className="text-lg font-semibold text-black mb-4">Implementation Methodology</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Inverse Warping Process</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      For each output pixel, I compute its corresponding location in the source image using the inverse homography H⁻¹.
                      This ensures no holes in the output, as every output pixel is explicitly computed.
                    </p>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      The bounding box is determined by projecting the four corners of the source image through the homography,
                      then creating an output grid covering this transformed region.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Interpolation Methods</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-green-200">
                        <h6 className="text-sm font-semibold text-black mb-2">Nearest Neighbor</h6>
                        <p className="text-black text-xs leading-relaxed mb-2">
                          Round the source coordinates to the nearest integer pixel location.
                          Fast but can produce blocky artifacts.
                        </p>
                        <div className="bg-gray-900 text-green-400 p-2 rounded text-xs font-mono">
                          <pre>{`Ui = np.rint(U).astype(int)
Vi = np.rint(V).astype(int)
ch[valid] = imf[Vi[valid], Ui[valid], c]`}</pre>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded border border-green-200">
                        <h6 className="text-sm font-semibold text-black mb-2">Bilinear Interpolation</h6>
                        <p className="text-black text-xs leading-relaxed mb-2">
                          Weighted average of the four nearest pixels based on fractional distances.
                          Smoother results but computationally more expensive.
                        </p>
                        <div className="bg-gray-900 text-green-400 p-2 rounded text-xs font-mono">
                          <pre>{`# Weighted combination of 4 corners
ch[valid] = (
    (1-du)*(1-dv)*I00 + du*(1-dv)*I10 +
    (1-du)*dv*I01 + du*dv*I11
)`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Quality vs Speed Trade-offs</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      <strong>Nearest Neighbor:</strong> ~2x faster, but produces stair-step artifacts and jagged edges.
                      <br />
                      <strong>Bilinear:</strong> Smoother gradients and better quality, but requires more computation per pixel.
                      For rectification tasks, bilinear interpolation is preferred as it maintains the visual quality of the transformed objects.
                    </p>
                  </div>

                  <div>
                    <h6 className="text-md font-semibold text-black mb-2">Performance Analysis</h6>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs">
                      <pre>{`Rectifying laptop image...
================================================================================
Nearest Neighbor:
  - Time: 54.556 seconds
  - Output shape: (6981, 10312, 3)

Bilinear Interpolation:
  - Time: 113.574 seconds
  - Output shape: (6981, 10312, 3)

Speed comparison: Bilinear is 2.08x slower

Rectifying folder image...
================================================================================
Nearest Neighbor:
  - Time: 0.165 seconds
  - Output shape: (1383, 923, 3)

Bilinear Interpolation:
  - Time: 0.292 seconds
  - Output shape: (1383, 923, 3)

Speed comparison: Bilinear is 1.77x slower`}</pre>
                    </div>
                    <p className="text-black text-sm leading-relaxed mt-3">
                      The laptop image required significantly more computation due to its large output dimensions (6981×10312 pixels).
                      Initially, my kernel crashed due to memory constraints with the full-resolution image, so I downscaled the source
                      and defined a smaller target rectangle for the homography mapping. The folder image was much more manageable
                      at 1383×923 pixels, processing in under a second for both methods.
                    </p>
                  </div>
                </div>

                {/* Rectification Results */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-4">Rectification Results</h5>
                  
                  {/* Laptop Rectification */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Laptop Rectification</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/laptop_original_marked.jpg" alt="Laptop Original with Marked Points" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original with marked corner points</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/laptop_rectified_comparison.jpg" alt="Laptop Rectification Comparison" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Rectified (Nearest Neighbor vs Bilinear)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/laptop_rectified_zoomed.jpg" alt="Laptop Rectified Cropped" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Final cropped rectified laptop</p>
                      </div>
                    </div>
                  </div>

                  {/* Folder Rectification */}
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">UGBA102B Folder Rectification</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/folder_original_marked.jpg" alt="Folder Original with Marked Points" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original with marked corner points</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/folder_rectified_comparison.jpg" alt="Folder Rectification Comparison" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Rectified (Nearest Neighbor vs Bilinear)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-3a/folder_rectified_zoomed.jpg" alt="Folder Rectified Cropped" className="w-full h-80 object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Final cropped rectified folder</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h6 className="text-md font-semibold text-black mb-2">Rectification Process</h6>
                    <p className="text-black text-sm leading-relaxed mb-3">
                      For each object, I manually selected the four corners of the rectangular surface (laptop screen, folder cover)
                      and defined the target coordinates as a perfect rectangle. The homography transformation then warps the
                      perspective-distorted image to show the object front-on, making it appear as if photographed perpendicularly.
                      The bilinear interpolation clearly produces smoother, more natural-looking results compared to nearest neighbor.
                    </p>
                    <p className="text-black text-sm leading-relaxed">
                      <strong>Cropping:</strong> The rectified images contain significant empty space around the target objects
                      due to the homography transformation. I cropped the results to focus on the rectified objects themselves,
                      removing the unnecessary background areas and creating cleaner, more focused final images that highlight
                      the successful rectification of the rectangular surfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* A.4 Mosaic Blending */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">A.4: Blend Images into a Mosaic</h4>
                
                <div className="text-black mb-6">
                  <p className="text-sm leading-relaxed mb-4">
                    The final step in creating panoramic mosaics involves warping registered images into a common coordinate space and blending them seamlessly. Instead of having one image overwrite another (which creates harsh edge artifacts), I implemented three different blending techniques to create smooth transitions between overlapping regions.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold text-black mb-2">Implementation Approach</h5>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>Canvas Construction:</strong> First, I compute the bounding box by projecting each image's corners through its homography to determine the final mosaic dimensions. This involves transforming the four corners of each image using its homography matrix H, then finding the minimum and maximum x and y coordinates across all transformed corners to establish the canvas size. All images are then warped into this common coordinate space using inverse warping with bilinear interpolation.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>Image Warping:</strong> For each pixel in the output canvas, I compute its corresponding location in the source image by applying the inverse homography. This ensures no holes in the output. I implemented both nearest neighbor (for speed) and bilinear interpolation (for quality), ultimately using bilinear for all final mosaics.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>Blending Methods:</strong> I implemented three techniques to handle overlapping regions: (1) Simple weighted averaging with binary alpha masks (alpha = 1 inside image, 0 outside), (2) Distance-based feathering where alpha falls off linearly from 1 at the center to 0 at edges using distance transform, and (3) Laplacian pyramid blending that decomposes images into multiple frequency bands and blends each level separately before reconstruction.
                    </p>
                    <p className="text-sm leading-relaxed">
                      <strong>Reference Strategy:</strong> I use the center image as reference (identity homography) and warp left/right images into its coordinate space using the computed homographies from A.2. This preserves the center image's original quality while transforming surrounding images to align with it.
                    </p>
                  </div>
                </div>

                {/* Mosaic 1: Sunset Panorama */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold text-black mb-4">Mosaic 1: Sunset Panorama (3-Image)</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Source Images</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_sunset_sources.jpg" 
                        alt="Sunset panorama source images"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Blending Method Comparison</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_sunset_all_methods_comparison.jpg" 
                        alt="Sunset panorama blending comparison"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-blue-200 mb-4">
                      <h6 className="font-semibold text-black mb-2">Method Analysis & Experimentation:</h6>
                      <ul className="text-sm text-black space-y-2">
                        <li><strong>Simple Weighted Averaging:</strong> Binary alpha masks (0 or 1) create visible edge artifacts, especially prominent seams in the sky region where the images overlap.</li>
                        <li><strong>Distance-Based Feathering:</strong> Smooth alpha falloff from center to edges significantly reduced edge artifacts. However, I wasn't fully satisfied with the seam on the left side of the panorama.</li>
                        <li><strong>Laplacian Pyramid Blending Experiments:</strong> Hoping to further improve the left seam, I implemented multi-resolution blending with Laplacian pyramids. I experimented extensively with various sigma and level combinations (trying 2-7 levels with sigma values from 2.0 to 12.0), but unfortunately couldn't find any parameter combination that improved the seam—all variations either maintained or worsened the edge artifacts. The multi-resolution approach seemed to amplify misalignments from my correspondence points rather than smooth them out.</li>
                        <li><strong>Correspondence Refinement:</strong> I realized I had initially clustered my left → center correspondence points too closely together in the sunset panorama, causing slight misalignment. I redid the correspondence JSON file with better-distributed points, which improved alignment but didn't fully eliminate the challenging left seam.</li>
                        <li><strong>Conclusion:</strong> Despite the challenges with the left seam, distance-based feathering remained my most successful method, significantly reducing edge artifacts compared to simple averaging. The feathering approach proved more robust to small registration errors than the theoretically superior Laplacian method.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mosaic 2: Statue Panorama */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold text-black mb-4">Mosaic 2: Statue Panorama (3-Image)</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Source Images</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_statue_sources.jpg" 
                        alt="Statue panorama source images"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Blending Comparison</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_statue_comparison.jpg" 
                        alt="Statue panorama blending comparison"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-blue-200 mb-4">
                      <h6 className="font-semibold text-black mb-2">Performance Metrics:</h6>
                      <ul className="text-sm text-black space-y-1">
                        <li><strong>Simple Averaging:</strong> 1.66s processing time</li>
                        <li><strong>Distance Feathering:</strong> 1.36s processing time (0.82x overhead)</li>
                        <li><strong>Quality:</strong> Feathering eliminates harsh seams in the grass and statue regions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mosaic 3: A2 Willard Park */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold text-black mb-4">Mosaic 3: Willard Park Panorama (2-Image)</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Source Images</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_a2_sources.jpg" 
                        alt="A2 panorama source images"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-sm text-black leading-relaxed mb-4">
                      Using the same image pair from A.2 correspondence work, demonstrating the complete pipeline from homography recovery to final mosaic creation.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Blending Comparison</h6>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/cs180-portfolio/project-3a/mosaic_a2_comparison.jpg" 
                        alt="A2 panorama blending comparison"
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-blue-200 mb-4">
                      <h6 className="font-semibold text-black mb-2">Performance Metrics:</h6>
                      <ul className="text-sm text-black space-y-1">
                        <li><strong>Simple Averaging:</strong> 15.73s processing time</li>
                        <li><strong>Distance Feathering:</strong> 9.29s processing time (0.59x overhead)</li>
                        <li><strong>Quality:</strong> Feathering successfully reduces edge artifacts between the car parts in the parking lot and the telephone pole, creating smooth transitions in this park scene</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-black mb-4">Technical Implementation Details</h5>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h6 className="font-semibold text-black mb-2">Canvas Bounds Computation</h6>
                    <div className="bg-white p-3 rounded border border-blue-200 font-mono text-sm text-black">
                      <div># Project each image's corners through its homography</div>
                      <div>corners = np.array([[0, 0, w-1, w-1], [0, h-1, 0, h-1], [1, 1, 1, 1]])</div>
                      <div>proj = H @ corners</div>
                      <div>proj /= np.maximum(proj[2:3, :], 1e-12)</div>
                      <div># Compute global bounding box</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h6 className="font-semibold text-black mb-2">Distance-Based Feathering</h6>
                    <div className="bg-white p-3 rounded border border-blue-200 font-mono text-sm text-black">
                      <div># Alpha = 1 at center, falls off linearly to 0 at edges</div>
                      <div>center = (h//2, w//2)</div>
                      <div>distances = distance_transform_edt(alpha_mask)</div>
                      <div>max_dist = distances.max()</div>
                      <div>alpha_feathered = distances / max_dist</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h6 className="font-semibold text-black mb-2">Laplacian Pyramid Blending</h6>
                    <div className="bg-white p-3 rounded border border-blue-200 font-mono text-sm text-black">
                      <div># Build Gaussian stack for each image</div>
                      <div>gauss_stack = [gaussian_filter(im, sigma * 2**i) for i in range(levels)]</div>
                      <div># Build Laplacian stack (differences between levels)</div>
                      <div>laplacian_stack = [gauss_stack[i] - gauss_stack[i+1] for i in range(levels-1)]</div>
                      <div># Blend at each level, then reconstruct</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h5 className="font-semibold text-black mb-2">Key Insights</h5>
                  <ul className="text-sm text-black space-y-1">
                    <li>• <strong>Simple averaging</strong> is fastest but creates visible seams in homogeneous regions (sky, grass)</li>
                    <li>• <strong>Distance feathering</strong> provides the best balance of quality and robustness to registration errors - this was my most successful method</li>
                    <li>• <strong>Laplacian blending</strong> is theoretically superior but requires extremely precise correspondences; with my manual point selection, it actually amplified misalignments and created ghosting artifacts</li>
                    <li>• The choice of blending method depends critically on the accuracy of the homography - simpler methods are more forgiving of small registration errors</li>
                    <li>• Future work could improve results by using more correspondence points or automatic feature detection for better alignment</li>
                  </ul>
                </div>
              </div>

              
            </div>
          )}

          {activeTab === 'project3b' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Project 3B: Feature Matching for Autostitching</h3>
                <p className="text-black italic">Automatic image alignment using feature detection and RANSAC</p>
              </div>

              {/* Overview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Overview</h4>
                <p className="text-black leading-relaxed mb-3">
                  The goal of this project is to create a system for automatically stitching images into a mosaic. 
                  This involves detecting corner features, extracting feature descriptors, matching features between images, 
                  and using RANSAC to compute robust homographies for automatic image alignment.
                </p>
                <p className="text-black leading-relaxed">
                  Following the paper <em>"Multi-Image Matching using Multi-Scale Oriented Patches"</em> by Brown et al., 
                  I implemented Harris corner detection with Adaptive Non-Maximal Suppression (ANMS), extracted normalized 
                  feature descriptors, matched features using Lowe's ratio test, and used 4-point RANSAC to compute robust 
                  homographies for automatic panorama stitching.
                </p>
              </div>

              {/* B.1: Harris Corner Detection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">B.1: Harris Corner Detection & Adaptive Non-Maximal Suppression</h4>
                <p className="text-black leading-relaxed mb-4">
                  I implemented the Harris Interest Point Detector to find corner features in images. The initial detection 
                  typically finds thousands of corners (over 11,000 in my test images), many of which are clustered together. 
                  To get a well-distributed set of feature points, I implemented Adaptive Non-Maximal Suppression (ANMS), 
                  which selects the 500 strongest corners that are spatially well-distributed across the image.
                </p>

                {/* Harris corners - raw detection */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Harris Corners (Raw Detection)</h5>
                  <p className="text-sm text-black mb-3 italic">
                    Initial corner detection found 11,301 corners in center image and 11,352 corners in left image. 
                    Note how corners tend to cluster in high-texture regions.
                  </p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-3b/harris_corners.jpg" alt="Harris corners on both images" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Harris corners detected on left and center images (red + markers)</p>
                  </div>
                </div>

                {/* ANMS corners */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Adaptive Non-Maximal Suppression (ANMS)</h5>
                  <p className="text-sm text-black mb-3 italic">
                    ANMS reduces the corner count to 500 well-distributed points per image. For each corner, ANMS computes 
                    the minimum distance to a significantly stronger corner (using c_robust = 0.9), then keeps the corners 
                    with the largest suppression radii.
                  </p>
                  <div className="text-center mb-4">
                    <img src="/cs180-portfolio/project-3b/anms_corners.jpg" alt="ANMS corners on both images" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Selected 500 corners after ANMS for both images (blue + markers)</p>
                  </div>
                </div>

                {/* Comparison visualizations */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Comparison: Harris vs ANMS</h5>
                  <p className="text-sm text-black mb-3 italic">
                    These side-by-side comparisons show how ANMS dramatically reduces corner density while maintaining 
                    spatial distribution across the entire image.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3b/comparison_center_harris_anms.jpg" alt="Harris vs ANMS - Center" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Center image: All Harris corners vs ANMS selection</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3b/comparison_left_harris_anms.jpg" alt="Harris vs ANMS - Left" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Left image: All Harris corners vs ANMS selection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* B.2: Feature Descriptor Extraction */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">B.2: Feature Descriptor Extraction</h4>
                <p className="text-black leading-relaxed mb-4">
                  For each corner point, I extracted an axis-aligned 8×8 feature descriptor by sampling from a larger 
                  40×40 window around the corner. This larger window provides anti-aliasing and makes the descriptors 
                  more robust. Each 8×8 descriptor is then bias/gain-normalized (subtract mean, divide by standard 
                  deviation) to be invariant to illumination changes. After extracting descriptors near image borders 
                  (which don't have full 40×40 windows), I kept 500 valid descriptors per image.
                </p>

                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Descriptor Centers Overlay</h5>
                  <p className="text-sm text-black mb-3 italic">
                    Visualization showing the 500 descriptor centers (magenta circles) overlaid on the original images.
                  </p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-3b/descriptor_centers_overlay.jpg" alt="Descriptor centers overlaid" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Descriptor centers overlaid on left and center images (magenta circles)</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Sample Feature Descriptors</h5>
                  <p className="text-sm text-black mb-3 italic">
                    Below are 16 sample normalized 8×8 feature descriptors extracted from each image. 
                    Each patch is sampled from a 40×40 window, downsampled to 8×8 with anti-aliasing, 
                    and then bias/gain-normalized. These small patches capture the local appearance around each corner 
                    and enable matching between images. Each descriptor is a 64-dimensional feature vector (8×8 = 64 values).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3b/descriptor_patches_center.jpg" alt="Sample descriptor patches - Center image" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">16 sample 8×8 normalized descriptors from center image</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-3b/descriptor_patches_left.jpg" alt="Sample descriptor patches - Left image" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">16 sample 8×8 normalized descriptors from left image</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* B.3: Feature Matching */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">B.3: Feature Matching with Lowe's Ratio Test</h4>
                <p className="text-black leading-relaxed mb-4">
                  To match features between image pairs, I used Lowe's ratio test. For each feature in the first image, 
                  I found the two nearest neighbors in the second image (by Euclidean distance in descriptor space). 
                  A match is accepted only if the ratio of the nearest to second-nearest distance is below a threshold 
                  (I used 0.7 as suggested in the paper). This ratio test effectively rejects ambiguous matches where 
                  multiple features look similar, keeping only distinctive matches.
                </p>

                {/* Feature matching visualization */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Feature Matches: Left-Center Image Pair</h5>
                  <p className="text-sm text-black mb-3 italic">
                    With a ratio threshold of 0.7, I found 53 accepted matches between the left and center images. 
                    Yellow lines connect matched features, with red dots marking the feature locations.
                  </p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-3b/matches_left_center_ratio_0.70.jpg" alt="Feature matches with Lowe ratio test" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">53 matched features between left and center images (ratio &lt; 0.7)</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-black">
                    <strong>Key Insight:</strong> The ratio test is very effective at filtering bad matches. 
                    By comparing to the second-nearest neighbor, we ensure that accepted matches are distinctive 
                    and not ambiguous. The median ratio of accepted matches was 0.501, well below the 0.7 threshold.
                  </p>
                </div>
              </div>

              {/* B.4: RANSAC and Automatic Stitching */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">B.4: RANSAC for Robust Homography Estimation</h4>
                <p className="text-black leading-relaxed mb-4">
                  Even after Lowe's ratio test, some feature matches can still be incorrect outliers. To compute a 
                  robust homography, I implemented 4-point RANSAC from scratch. The algorithm repeatedly samples 4 
                  random correspondence pairs, computes a homography from those 4 points, tests how many other points 
                  are consistent with that homography (inliers), and keeps the homography with the most inliers. 
                  Finally, I refit the homography using all inlier correspondences.
                </p>

                {/* RANSAC visualization */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">RANSAC Inlier Detection</h5>
                  <p className="text-sm text-black mb-3 italic">
                    Left: All 53 matches from Lowe's ratio test (before RANSAC). 
                    Right: 40 inlier matches after RANSAC (75.5% inlier ratio, threshold = 3.0 pixels).
                  </p>
                  <div className="text-center mb-4">
                    <img src="/cs180-portfolio/project-3b/ransac_inliers_comparison.jpg" alt="Before and after RANSAC" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">RANSAC filtering: before (red, all matches) vs after (green, inliers only)</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Automatic Mosaics: Manual vs Automatic Comparison</h5>
                  <p className="text-sm text-black mb-4">
                    I applied this automatic feature matching and RANSAC pipeline to create three automatic panoramas, 
                    using the same image sets from Project 3A. Below are side-by-side comparisons of manual stitching 
                    (from Part A, using hand-selected correspondences) versus automatic stitching (from Part B, using 
                    detected features and RANSAC).
                  </p>

                  {/* Mosaic 1: Willard Park */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Mosaic 1: Willard Park (2 images)</h6>
                    <p className="text-sm text-black mb-3">
                      This mosaic was particularly challenging. I initially found 48 Lowe ratio matches, but with the 
                      standard RANSAC threshold of 3.0 pixels, I only got 20 inliers (41.7% inlier ratio). This low 
                      inlier ratio caused visible <strong>ghosting artifacts</strong> in the stitched result. To address 
                      this, I experimented with 4 different RANSAC thresholds (3.0, 7.0, 8.5, and 10.0 pixels) to find 
                      a better balance. Using a more generous threshold of 8.5 pixels, I was able to increase the inlier 
                      count to 36 (75.0% inlier ratio), which significantly reduced the ghosting and produced a cleaner mosaic.
                    </p>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-3b/willard_park_improvement_comparison.jpg" alt="Willard Park improvement comparison" className="w-full h-auto object-contain rounded-lg border-2 border-blue-300 mb-2" />
                      <p className="text-xs text-black">Willard Park: Manual (left), Original RANSAC with 41.7% inliers (center), Improved RANSAC with 75.0% inliers (right)</p>
                    </div>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-3b/mosaic_a2_comparison_manual_vs_auto.jpg" alt="Willard Park manual vs auto" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Willard Park: Manual stitching (left) vs Automatic stitching with RANSAC (right)</p>
                    </div>
                  </div>

                  {/* Mosaic 2: Statue Panorama */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Mosaic 2: Statue Panorama (3 images)</h6>
                    <p className="text-sm text-black mb-3">
                      This three-image panorama required two homographies: left-to-center and center-to-right. 
                      RANSAC found 41/53 inliers (77.4%) for the left-center pair and 34/39 inliers (87.2%) for 
                      the center-right pair. The high inlier ratios indicate very good match quality.
                    </p>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-3b/mosaic_statue_comparison_manual_vs_auto.jpg" alt="Statue manual vs auto" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Statue Panorama: Manual stitching (left) vs Automatic stitching with RANSAC (right)</p>
                    </div>
                  </div>

                  {/* Mosaic 3: Sunset Panorama */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Mosaic 3: Sunset Panorama (3 images)</h6>
                    <p className="text-sm text-black mb-3">
                      The sunset panorama was more challenging due to lower texture and fewer distinctive features. 
                      RANSAC found only 12/22 inliers (54.5%) for the left-center pair and 16/26 inliers (61.5%) 
                      for the center-right pair. Despite the lower inlier ratios, the automatic stitching still 
                      produced a good result.
                    </p>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/project-3b/mosaic_sunset_comparison_manual_vs_auto.jpg" alt="Sunset manual vs auto" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Sunset Panorama: Manual stitching (left) vs Automatic stitching with RANSAC (right)</p>
                    </div>
                  </div>
                </div>

                {/* Summary of all mosaics */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Summary: All Three Automatic Mosaics</h5>
                  <p className="text-sm text-black mb-3 italic">
                    All three panoramas created automatically using Harris corners, ANMS, feature descriptors, 
                    Lowe's ratio matching, and RANSAC homography estimation.
                  </p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-3b/all_automatic_mosaics_summary.jpg" alt="All automatic mosaics" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Three automatic panoramas: Willard Park, Statue, and Sunset</p>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Reflection & What I Learned</h4>
                <div className="space-y-3 text-black leading-relaxed">
                  <p>
                    The most interesting thing I learned from this project was how automatic feature detection and matching 
                    can produce results comparable to (or better than) manual correspondence selection. The RANSAC algorithm 
                    was particularly impressive in its ability to reject outlier matches and find accurate homographies even 
                    when a significant fraction of the initial matches were incorrect.
                  </p>
                  <p>
                    <strong>Key takeaways:</strong>
                  </p>
                  <ul className="text-sm text-black space-y-2 ml-4">
                    <li>• <strong>Harris corners</strong> provide robust, repeatable interest points that can be reliably detected across different views of the same scene</li>
                    <li>• <strong>ANMS</strong> is crucial for getting a well-distributed set of feature points rather than clusters concentrated in high-texture regions</li>
                    <li>• <strong>Feature descriptors</strong> must be normalized (bias/gain) to be robust to illumination changes between images</li>
                    <li>• <strong>Lowe's ratio test</strong> is very effective at filtering ambiguous matches by comparing to the second-nearest neighbor</li>
                    <li>• <strong>RANSAC</strong> is extremely powerful at filtering outliers - even with ~50% initial outliers, it can find the correct transformation</li>
                    <li>• <strong>Parameter tuning</strong> matters: different image pairs may need different RANSAC thresholds depending on alignment quality</li>
                    <li>• <strong>Automatic methods</strong> can be more accurate than manual selection because they use many more correspondences and robust statistical estimation</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Challenges:</strong> The sunset panorama was particularly challenging due to smooth gradients and fewer distinctive features. 
                    This resulted in fewer matches and lower inlier ratios, demonstrating that automatic methods work best on scenes with 
                    rich texture and distinctive features.
                  </p>
                </div>
              </div>

              
            </div>
          )}

          {activeTab === 'project4' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Project 4: Neural Radiance Field</h3>
                <p className="text-black italic">3D scene representation using neural networks and multi-view image synthesis</p>
              </div>

              {/* Overview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Overview</h4>
                <p className="text-black leading-relaxed mb-3">
                  In this project, I implemented a Neural Radiance Field (NeRF) to represent 3D scenes from multi-view images. 
                  The project involved camera calibration using ArUco markers, pose estimation, and training a neural network 
                  to learn a continuous volumetric scene representation that can render novel views.
                </p>
              </div>

              {/* Part 0: Camera Calibration */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 0: Camera Calibration and 3D Scanning</h4>
                <p className="text-black leading-relaxed mb-4">
                  I calibrated my camera using ArUco markers to compute intrinsic parameters (focal length, principal point) 
                  and distortion coefficients. Then I captured a 3D scan of my object with the ArUco tag as a reference, 
                  and estimated camera poses for each image using the Perspective-n-Point (PnP) algorithm.
                </p>
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-black mb-3">Example Calibration Images</h5>
                  <p className="text-sm text-black mb-3">
                    Some sample images captured for camera calibration using ArUco tags:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/IMG_9603.jpg" alt="Calibration image IMG_9603" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Calibration image IMG_9603</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/IMG_9604.jpg" alt="Calibration image IMG_9604" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Calibration image IMG_9604</p>
                    </div>
                  </div>
                </div>


                {/* Part 0.1 */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 0.1: Camera Calibration</h5>
                  <p className="text-sm text-black mb-3">
                    Captured 50 images of calibration ArUco tags from various angles and distances. Of these, the markers were detected in all 50 of the images.
                    Used OpenCV's ArUco detector to find corners in each image, then used <code>cv2.calibrateCamera()</code> 
                    to compute camera intrinsics and distortion coefficients.
                  </p>
                </div>

                {/* Part 0.2 */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 0.2: Capturing a 3D Object Scan</h5>
                  <p className="text-sm text-black mb-3">
                    Selected my object and captured 37 images from different angles with a single ArUco tag as reference. Of these, the tag was detected in 33 of the images. 
                    One limitation I had was that the bottle covered the ArUco tag in some of the images, which meant that I was missing one section of the 360 degree view. 
                    Maintained consistent camera settings and distance for optimal NeRF quality.
                  </p>
                </div>

                {/* Part 0.3 */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 0.3: Camera Pose Estimation</h5>
                  <p className="text-sm text-black mb-3">
                    For each image, detected the ArUco tag and used <code>cv2.solvePnP()</code> to estimate camera pose. 
                    Converted the world-to-camera transformation to camera-to-world (c2w) 
                    matrices for NeRF training.
                    When I did 2.6, I didn't get a good NeRf reconstruction. So, I went back and I reshot the data, and even though I used less images this time, I think changing the lighting, and putting the bottle ON the paper itself, as well as being more consistent with the angle of the camera helped a lot.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-010845.png" alt="Camera pose visualization 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Camera pose visualization - View 1</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-215358.png" alt="Camera pose visualization 2" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Camera pose visualization - View 2</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-215415.png" alt="Camera pose visualization 3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Camera pose visualization - View 3</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-215449.png" alt="Camera pose visualization 4" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Camera pose visualization - View 4</p>
                    </div>
                  </div>
                </div>

                {/* Part 0.4 */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 0.4: Undistorting Images and Creating Dataset</h5>
                  <p className="text-sm text-black mb-3">
                    Used <code>cv2.undistort()</code> to remove lens distortion from all images, handling black boundaries 
                    with optimal camera matrix computation. Saved the dataset in .npz format with training/validation/test splits, 
                    including images, c2w matrices, and focal length. I sanity checked this on the Lafufu dataset, and it looked like what I expected, so I concluded my calibration pipeline was valid.
                  </p>
                </div>
              </div>

              {/* Part 1: Neural Field for 2D Image */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 1: Fit a Neural Field to a 2D Image</h4>
                <p className="text-black leading-relaxed mb-4">
                  Started with a 2D version of NeRF. 
                  This helped me understand the core components: MLP architecture, positional encoding, and optimization.
                </p>

                {/* Implementation Approach */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Implementation Approach</h5>
                  <p className="text-sm text-black mb-3">
                    The neural field learns to map 2D coordinates (x, y) normalized to [0, 1] to RGB color values. 
                    The key components include:
                  </p>
                  <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                    <li>• <strong>Positional Encoding:</strong> Sinusoidal encoding with L=10 frequency levels. For each coordinate, 
                    we compute sin(2<sup>i</sup>πx) and cos(2<sup>i</sup>πx) for i ∈ [0, L-1], expanding the 2D input to 
                    2 + 4L = 42 dimensions. This helps the network learn high-frequency details.
                    <div className="mt-3 mb-2">
                      <img 
                        src="/cs180-portfolio/project-4/screenshot-2025-11-16-191727.png" 
                        alt="Positional Encoding Formula" 
                        className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 max-w-2xl mx-auto" 
                      />
                      <p className="text-xs text-black text-center italic mt-1">Positional Encoding (PE) formula</p>
                    </div>
                    </li>
                    <li>• <strong>Data Preparation:</strong> Each pixel's (x/W, y/H) coordinates are paired with its RGB color value. 
                    Training uses random batches of 10,000 pixels sampled from the full image.</li>
                    <li>• <strong>Loss Function:</strong> Mean Squared Error (MSE) between predicted and ground truth RGB values.</li>
                    <li>• <strong>Optimization:</strong> Adam optimizer with learning rate 1e-2, trained for 2000 iterations.</li>
                  </ul>
                </div>

                {/* Model Architecture */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Model Architecture</h5>
                  <p className="text-sm text-black mb-3">
                    <strong>Architecture:</strong> MLP with Sinusoidal Positional Encoding (PE)
                  </p>
                  <div className="mb-4">
                    <img 
                      src="/cs180-portfolio/project-4/screenshot-2025-11-16-181502.png" 
                      alt="Neural Network Architecture Diagram" 
                      className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2 max-w-3xl mx-auto" 
                    />
                    <p className="text-xs text-black text-center italic">Neural network architecture: 2D input → Positional Encoding → 3 hidden layers (256 units each) → 3D RGB output</p>
                  </div>
                  <ul className="text-sm text-black space-y-1 ml-4 mb-3">
                    <li>• <strong>Number of layers:</strong> 4 linear layers (3 hidden layers + 1 output layer)</li>
                    <li>• <strong>Width (channel size):</strong> 256 units per hidden layer</li>
                    <li>• <strong>Learning rate:</strong> 1e-2 (Adam optimizer)</li>
                    <li>• <strong>Max PE frequency (L):</strong> 10</li>
                    <li>• <strong>Batch size:</strong> 10,000 pixels</li>
                    <li>• <strong>Training iterations:</strong> 2000</li>
                    <li>• <strong>Activation functions:</strong> ReLU for hidden layers, Sigmoid for output</li>
                  </ul>
                </div>

                {/* Training Progression */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Training Progression</h5>
                  <p className="text-sm text-black mb-3 italic">Visualization of training process across different iterations</p>
                  
                  {/* Provided test image */}
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Provided Test Image (Fox)</h6>
                    <p className="text-xs text-black mb-3 italic">Training progression on a 689×1024 pixel fox image</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter1.png" alt="Iteration 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter50.png" alt="Iteration 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 50</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter200.png" alt="Iteration 200" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 200</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter500.png" alt="Iteration 500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 500</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter1k.png" alt="Iteration 1000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 1000</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/fox_iter2k.png" alt="Iteration 2000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 2000</p>
                      </div>
                    </div>
                  </div>

                  {/* Own image */}
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">My Own Image</h6>
                    <p className="text-xs text-black mb-3 italic">Training progression on a picture of me after running a half marathon (not so subtle flex :P)</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_it1.png" alt="Iteration 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_it50.png" alt="Iteration 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 50</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_it200.png" alt="Iteration 200" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 200</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_it500.png" alt="Iteration 500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 500</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_iter1k.png" alt="Iteration 1000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 1000</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/me_it2k.png" alt="Iteration 2000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteration 2000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hyperparameter Comparison */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Hyperparameter Tuning: Max PE Frequency vs Width</h5>
                  <p className="text-sm text-black mb-3 italic">4×4 grid showing effects of varying positional encoding frequency (L) and network width</p>
                  
                  {/* Provided Test Image (Fox) Hyperparameters */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Provided Test Image (Fox) - Hyperparameter Results</h6>
                    <div className="mb-4">
                      <img src="/cs180-portfolio/project-4/fox_hyperparams.png" alt="Fox hyperparameter tuning grid" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    </div>
                    <div className="bg-gray-50/50 rounded-lg p-4 mb-3">
                      <p className="text-sm text-black font-semibold mb-2">Final PSNR Values (after 400 iterations):</p>
                      <ul className="text-sm text-black space-y-1">
                        <li>• <strong>L=4, width=64:</strong> 21.54 dB</li>
                        <li>• <strong>L=4, width=256:</strong> 23.27 dB</li>
                        <li>• <strong>L=10, width=64:</strong> 24.29 dB</li>
                        <li>• <strong>L=10, width=256:</strong> 24.87 dB (Best)</li>
                      </ul>
                    </div>
                  </div>

                  {/* My Own Image Hyperparameters */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">My Own Image - Hyperparameter Results</h6>
                    <div className="mb-4">
                      <img src="/cs180-portfolio/project-4/me_hyperparams.png" alt="My image hyperparameter tuning grid" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    </div>
                    <div className="bg-gray-50/50 rounded-lg p-4 mb-3">
                      <p className="text-sm text-black font-semibold mb-2">Final PSNR Values (after 400 iterations):</p>
                      <ul className="text-sm text-black space-y-1">
                        <li>• <strong>L=4, width=64:</strong> 19.39 dB</li>
                        <li>• <strong>L=4, width=256:</strong> 19.71 dB</li>
                        <li>• <strong>L=10, width=64:</strong> 20.07 dB</li>
                        <li>• <strong>L=10, width=256:</strong> 21.29 dB (Best)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-black mb-2">
                    <strong>Key Observations:</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1 ml-4">
                    <li>• Higher positional encoding frequency (L=10) significantly improves reconstruction quality for both images</li>
                    <li>• Wider networks (256 units) provide better capacity for learning fine details</li>
                    <li>• Best configuration for both images: L=10, width=256</li>
                    <li>• The combination of high frequency encoding and wide network yields the best visual and quantitative results</li>
                    <li>• The fox image achieved higher PSNR (24.87 dB) compared to my own image (21.29 dB), likely due to image complexity and content differences</li>
                  </ul>
                </div>

                {/* Training Results */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Training Results</h5>
                  <p className="text-sm text-black mb-3">
                    Training on a 689×1024 pixel image (705,536 total pixels) with the optimal configuration (L=10, width=256):
                  </p>
                  <div className="bg-gray-50/50 rounded-lg p-4 mb-3">
                    <ul className="text-sm text-black space-y-1">
                      <li>• <strong>Iteration 100:</strong> Loss=0.005885, PSNR=22.30 dB</li>
                      <li>• <strong>Iteration 500:</strong> Loss=0.003257, PSNR=24.87 dB</li>
                      <li>• <strong>Iteration 1000:</strong> Loss=0.002766, PSNR=25.58 dB</li>
                      <li>• <strong>Iteration 2000 (Final):</strong> Loss=0.002211, PSNR=26.55 dB</li>
                    </ul>
                  </div>
                  <p className="text-sm text-black">
                    The model achieved a final PSNR of <strong>26.55 dB</strong> after 2000 iterations, demonstrating successful 
                    learning of the 2D image representation through the neural field approach.
                  </p>
                </div>

                {/* PSNR Curves */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">PSNR Curves</h5>
                  <p className="text-sm text-black mb-3 italic">Peak Signal-to-Noise Ratio over training iterations</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/fox_psnrcurve.png" alt="PSNR curve for fox image" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black font-semibold">Provided Test Image (Fox)</p>
                      <p className="text-xs text-black">Training PSNR progression showing steady improvement</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/me_psnrcurve.png" alt="PSNR curve for my own image" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black font-semibold">My Own Image</p>
                      <p className="text-xs text-black">Training PSNR progression showing steady improvement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: NeRF from Multi-view Images */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 2: Fit a Neural Radiance Field from Multi-view Images</h4>
                <p className="text-black leading-relaxed mb-4">
                  Extended the 2D neural field to 3D by implementing ray sampling, volume rendering, and a NeRF network 
                  that predicts density and view-dependent color for 3D points. Trained on the Lego dataset with 100 images.
                </p>

                {/* Implementation Description */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Detailed Implementation</h5>
                  
                  {/* Part 2.1 */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-2">Part 2.1: Create Rays from Cameras</h6>
                    <p className="text-sm text-black mb-2">
                      To render a 3D scene, we need to cast rays from each camera pixel into 3D space. This requires three coordinate transformations:
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                      <li>
                        <strong>Camera-to-World Transformation:</strong> Implemented <code>transform(c2w, x_c)</code> that converts 
                        3D points from camera coordinates to world coordinates using the camera-to-world matrix. The transformation 
                        uses homogeneous coordinates: x_w = c2w @ [x_c, 1]^T, where c2w is a 3×4 matrix containing rotation and translation.
                      </li>
                      <li>
                        <strong>Pixel-to-Camera Conversion:</strong> Implemented <code>pixel_to_camera(K, uv, s)</code> that inverts the 
                        pinhole camera projection. Given pixel coordinates (u, v) and intrinsic matrix K, we compute camera coordinates: 
                        x_c = (u - cx) / fx, y_c = (v - cy) / fy, z_c = s. This converts 2D pixel locations back to 3D camera space 
                        at a chosen depth s=1.0.
                      </li>
                      <li>
                        <strong>Pixel-to-Ray Conversion:</strong> Implemented <code>pixel_to_ray(K, c2w, uv)</code> and its batched 
                        version <code>pixel_to_ray_batch()</code>. The ray origin is the camera position (extracted from c2w[:3, 3]). 
                        The ray direction is computed by: (1) converting pixel to camera coordinates, (2) transforming to world space, 
                        (3) subtracting the camera origin, and (4) normalizing. The batched version supports both NumPy (for visualization) 
                        and PyTorch (for training) with optimized operations.
                      </li>
                    </ul>
                  </div>

                  {/* Part 2.2 */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-2">Part 2.2: Sampling</h6>
                    <p className="text-sm text-black mb-2">
                      Two levels of sampling are needed: sampling rays from images, and sampling points along each ray.
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                      <li>
                        <strong>Sampling Rays from Images:</strong> Implemented <code>sample_random_rays()</code> that performs global 
                        random sampling across all training images. It flattens all pixels (N × H × W total), randomly selects indices, 
                        then groups rays by image for efficient batched ray generation. Pixel centers are computed by adding 0.5 to 
                        integer coordinates (u = x + 0.5, v = y + 0.5) to account for the offset from image coordinates to pixel centers.
                      </li>
                      <li>
                        <strong>Sampling Points Along Rays:</strong> Implemented <code>sample_along_rays()</code> that discretizes each 
                        ray into 3D sample points. For the Lego scene, near=2.0 and far=6.0 define the sampling bounds. During training, 
                        I use stratified random sampling: divide the [near, far] interval into n_samples bins, then randomly sample within 
                        each bin to prevent overfitting to fixed locations. During rendering, uniform sampling is used (random=False). 
                        The 3D points are computed as: pts = ray_o + ray_d * t, where t are the sampled depth values. Supports both 
                        NumPy and PyTorch for flexibility.
                      </li>
                    </ul>
                  </div>

                  {/* Part 2.3 */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-2">Part 2.3: Dataloader Implementation</h6>
                    <p className="text-sm text-black mb-2">
                      Implemented the <code>RaysData</code> class that efficiently precomputes and stores all rays for fast training.
                    </p>
                    <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                      <li>
                        <strong>Precomputation:</strong> In the constructor, I precompute rays for all pixels across all training images. 
                        For each image, I create a meshgrid of pixel coordinates, convert them to rays using <code>pixel_to_ray_batch()</code>, 
                        and concatenate everything into arrays: <code>rays_o</code>, <code>rays_d</code>, and <code>pixels</code>. This 
                        trades memory for speed during training.
                      </li>
                      <li>
                        <strong>Random Sampling:</strong> The <code>sample_rays(B)</code> method randomly samples B rays from the 
                        precomputed arrays, returning ray origins, directions, and corresponding ground truth pixel colors. This enables 
                        efficient batch-based training with 10,000 rays per iteration.
                      </li>
                      <li>
                        <strong>Verification:</strong> Added assertions to verify that UV coordinates are correctly indexed (xy vs yx) 
                        to catch coordinate system bugs early.
                      </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-215949.png" alt="Part 2.3 Visualization 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Part 2.3 Visualization 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-220215.png" alt="Part 2.3 Visualization 2" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Part 2.3 Visualization 2</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-4/screenshot-2025-11-16-220322.png" alt="Part 2.3 Visualization 3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Part 2.3 Visualization 3</p>
                      </div>
                    </div>
                  </div>

                  {/* Part 2.4 */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-2">Part 2.4: Neural Radiance Field Network</h6>
                    <p className="text-sm text-black mb-2">
                      The NeRF network predicts density and view-dependent color for 3D points. Key architectural choices:
                    </p>
                    <div className="mb-3">
                      <img 
                        src="/cs180-portfolio/project-4/screenshot-2025-11-16-212904.png" 
                        alt="NeRF Network Architecture" 
                        className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2 max-w-3xl mx-auto" 
                      />
                      <p className="text-xs text-black text-center italic">NeRF network architecture showing the two-branch design with skip connections</p>
                    </div>
                    <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                      <li>
                        <strong>Input Encoding:</strong> 3D coordinates are encoded with positional encoding (L=10), expanding from 3D 
                        to 63 dimensions (3 + 2×3×10). View directions are encoded with L=4, expanding from 3D to 27 dimensions (3 + 2×3×4). 
                        This helps the network learn high-frequency details in geometry and view-dependent effects.
                      </li>
                      <li>
                        <strong>Network Architecture:</strong> Two-branch design: (1) <code>trunk1</code> processes encoded coordinates 
                        (256→256), (2) <code>trunk2</code> takes concatenated trunk1 output + original encoded coordinates (256+63→256), 
                        implementing skip connections to prevent information loss. Density is predicted from trunk2 output via a linear layer. 
                        RGB color is predicted by concatenating trunk2 output with encoded view direction, then passing through a small MLP 
                        (256+27→128→3) with Sigmoid activation.
                      </li>
                      <li>
                        <strong>Forward Pass:</strong> <code>nerf_forward_points()</code> processes individual 3D points, while 
                        <code>nerf_forward()</code> handles batched ray samples (N rays × S samples per ray). The view direction is 
                        expanded to match each sample point, enabling view-dependent color prediction.
                      </li>
                    </ul>
                  </div>

                  {/* Part 2.5 */}
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-2">Part 2.5: Volume Rendering</h6>
                    <p className="text-sm text-black mb-2">
                      Implemented the discrete volume rendering equation to composite colors and densities along rays.
                    </p>
                    <div className="mb-3">
                      <img 
                        src="/cs180-portfolio/project-4/screenshot-2025-11-16-212953.png"
                        alt="Volume Rendering Equation C(r)" 
                        className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2 max-w-2xl mx-auto" 
                      />
                      <p className="text-xs text-black text-center italic">Volume rendering equation C(r) for computing pixel colors</p>
                    </div>
                    <ul className="text-sm text-black space-y-2 ml-4 mb-3">
                      <li>
                        <strong>Transmittance and Alpha:</strong> For each sample point, compute alpha (opacity) as α = 1 - exp(-σ * dt), 
                        where σ is density and dt is the step size. Transmittance T represents the probability of a ray not terminating 
                        before reaching a point, computed as the cumulative product of (1 - α) values.
                      </li>
                      <li>
                        <strong>Weighted Summation:</strong> The final pixel color is computed as: C = Σ(T_i * α_i * c_i), where weights 
                        w_i = T_i * α_i represent the contribution of each sample. This implements alpha compositing along the ray, with 
                        closer, denser samples contributing more to the final color.
                      </li>
                      <li>
                        <strong>Implementation:</strong> Used <code>torch.cumprod()</code> to efficiently compute transmittance, and 
                        vectorized operations for the weighted sum. The implementation passes the provided test case with the correct 
                        numerical values, confirming correctness.
                      </li>
                      <li>
                        <strong>Rendering Function:</strong> <code>render_image()</code> renders a full image by: (1) generating rays 
                        for all pixels, (2) sampling points along rays, (3) querying the NeRF network, (4) volume rendering, and 
                        (5) reshaping to image dimensions. Used for validation and novel view synthesis.
                      </li>
                    </ul>
                  </div>

                  {/* Training Details */}
                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-2">Training Configuration</h6>
                    <ul className="text-sm text-black space-y-1 ml-4">
                      <li>• <strong>Batch size:</strong> 10,000 rays per iteration</li>
                      <li>• <strong>Samples per ray:</strong> 64 points</li>
                      <li>• <strong>Learning rate:</strong> 5e-4 (Adam optimizer)</li>
                      <li>• <strong>Training iterations:</strong> 1,750 iterations</li>
                      <li>• <strong>Near/Far bounds:</strong> 2.0 to 6.0 for Lego scene</li>
                      <li>• <strong>Validation:</strong> Evaluated every 50 iterations on 10 validation images</li>
                      <li>• <strong>Rendering:</strong> Saved intermediate renders every 250 iterations</li>
                    </ul>
                  </div>
                </div>

                {/* Ray and Sample Visualization */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Ray and Sample Visualization</h5>
                  <p className="text-sm text-black mb-3 italic">
                    Visualization of cameras, sampled rays (up to 100), and 3D sample points at a single training step
                  </p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/ray_sampling_viz.png" alt="Rays and samples visualization" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Camera frustums, rays, and 3D sample points</p>
                  </div>
                </div>

                {/* Training Progression */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Training Progression</h5>
                  <p className="text-sm text-black mb-3 italic">Novel view rendering at different training iterations</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/nerf_outputs/iter_750.png" alt="Iteration 750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 750</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/nerf_outputs/iter_1000.png" alt="Iteration 1000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1000</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/nerf_outputs/iter_1250.png" alt="Iteration 1250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1250</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/nerf_outputs/iter_1500.png" alt="Iteration 1500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1500</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/nerf_outputs/iter_1750.png" alt="Iteration 1750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1750 (Final)</p>
                    </div>
                  </div>
                </div>

                {/* PSNR Curve */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Validation PSNR Curve</h5>
                  <p className="text-sm text-black mb-3 italic">PSNR on validation set (6 images) over training</p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/lego_psnr.png" alt="NeRF validation PSNR curve" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Final validation PSNR: 23.620 dB</p>
                  </div>
                </div>

                {/* Spherical Rendering Video */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Spherical Rendering Video</h5>
                  <p className="text-sm text-black mb-3 italic">Novel view video rendered using test camera poses (c2ws_test)</p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/nerf_outputs/lego_spherical.gif" alt="Lego spherical rendering video" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2 max-w-2xl mx-auto" />
                    <p className="text-xs text-black">Novel view spherical rendering of Lego scene</p>
                  </div>
                </div>
              </div>

              {/* Part 2.6: Own Data */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 2.6: Training with My Own Data</h4>
                <p className="text-black leading-relaxed mb-4">
                  Trained a NeRF on my own captured object using the dataset created in Part 0. Adjusted hyperparameters 
                  (near/far bounds, number of samples) for the real-world capture conditions.
                </p>

                {/* Hyperparameter Changes */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Code and Hyperparameter Changes</h5>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="text-sm text-black mb-2">
                      <strong>Near/Far bounds:</strong> Changed from (2.0, 6.0) for synthetic Lego data to (0.03, 0.6) for real captures. 
                      The object is much closer to the camera in real-world captures, so the sampling bounds needed to be adjusted 
                      accordingly. These values define the minimum and maximum distance from the camera sensor where we start and stop 
                      sampling points along rays.
                    </p>
                    <p className="text-sm text-black mb-2">
                      <strong>Number of samples:</strong> Used 64 samples per ray consistently. Started with 32 samples during initial 
                      debugging to ensure the pipeline worked correctly, then increased to 64 for final quality. More samples improve 
                      visual quality but increase training time.
                    </p>
                    <p className="text-sm text-black mb-2">
                      <strong>Image resolution:</strong> Resized images from original resolution to 200×200 pixels to speed up training 
                      and reduce memory requirements. When resizing, I adjusted the camera intrinsics matrix K accordingly: scaled the 
                      focal length (fx, fy) and principal point (cx, cy) by the same scale factors (scale_x = 200/orig_W, scale_y = 200/orig_H). 
                      This ensures the camera model remains consistent after resizing.
                    </p>
                    <p className="text-sm text-black mb-2">
                      <strong>Training iterations:</strong> Trained for 5,000 iterations (compared to 1,750 for Lego) to achieve better 
                      quality on the real-world dataset, which has more complex lighting and geometry.
                    </p>
                    <p className="text-sm text-black">
                      <strong>Validation and rendering:</strong> Evaluated validation PSNR every 50 iterations and saved intermediate 
                      renders every 300 iterations to monitor training progress.
                    </p>
                  </div>
                </div>

                {/* Novel View GIF */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Novel View Rendering</h5>
                  <p className="text-sm text-black mb-3 italic">Camera circling the object showing novel views</p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/output-onlinegiftools.gif" alt="Novel views of my hydroflask" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2 max-w-2xl mx-auto" />
                    <p className="text-xs text-black">Novel view rendering of my captured object</p>
                  </div>
                </div>

                {/* Training Loss and PSNR */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Training Loss and PSNR</h5>
                  <p className="text-sm text-black mb-3 italic">Training loss and training PSNR over iterations</p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/hydro_psnr.png" alt="Training loss and PSNR curves" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Training loss and PSNR progression</p>
                  </div>
                </div>

                {/* Training Loss Only */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Training Loss (MSE)</h5>
                  <p className="text-sm text-black mb-3 italic">Hydro object mean squared error throughout optimization</p>
                  <div className="text-center">
                    <img src="/cs180-portfolio/project-4/hydro_loss.png" alt="Hydro training loss curve" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                    <p className="text-xs text-black">Hydro training loss vs iterations</p>
                  </div>
                </div>

                {/* Intermediate Renders */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Intermediate Renders During Training</h5>
                  <p className="text-sm text-black mb-3 italic">Visualization of scene reconstruction at different training stages</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_300.png" alt="Iteration 300" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 300</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_600.png" alt="Iteration 600" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 600</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_900.png" alt="Iteration 900" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 900</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_1200.png" alt="Iteration 1200" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1200</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_1500.png" alt="Iteration 1500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1500</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_1800.png" alt="Iteration 1800" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 1800</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_2100.png" alt="Iteration 2100" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 2100</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_2400.png" alt="Iteration 2400" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 2400</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_2700.png" alt="Iteration 2700" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 2700</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_3000.png" alt="Iteration 3000" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 3000</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_3300.png" alt="Iteration 3300" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 3300</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_3600.png" alt="Iteration 3600" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 3600</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_3900.png" alt="Iteration 3900" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 3900</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_4200.png" alt="Iteration 4200" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 4200</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_4500.png" alt="Iteration 4500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 4500</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-4/hydro_outputs/hydro_iter_4800.png" alt="Iteration 4800" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Iteration 4800</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Reflection & What I Learned</h4>
                <div className="space-y-3 text-black leading-relaxed">
                  <p>
                    Building a NeRF from scratch gave me hands-on experience with neural rendering, camera geometry, and the challenges 
                    of working with real-world data. The journey from 2D image fitting to full 3D scene reconstruction was both challenging 
                    and rewarding.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-3">
                    <p className="text-sm text-black font-semibold mb-2">GPU and Computational Challenges</p>
                    <p className="text-sm text-black">
                      One of the biggest challenges was managing GPU memory. Training NeRF models is extremely memory-intensive, and I had 
                      to carefully balance batch size, number of samples, and image resolution to fit within available GPU memory. This taught 
                      me the importance of optimization techniques like precomputing rays and strategically choosing hyperparameters that 
                      balance quality and computational cost.
                    </p>
                  </div>

                  <p>
                    <strong>Key Takeaways:</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1 ml-4 mb-3">
                    <li>• Positional encoding is crucial for learning high-frequency details - the choice of encoding frequency (L) significantly impacts reconstruction quality</li>
                    <li>• Volume rendering with transmittance and alpha compositing is fundamental to reconstructing 3D scenes from 2D images</li>
                    <li>• Real-world data requires careful camera calibration, consistent lighting, and hyperparameter tuning (especially near/far bounds)</li>
                    <li>• Stratified random sampling during training prevents overfitting while maintaining rendering quality</li>
                  </ul>

                  <p>
                    <strong>Future Improvements:</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1 ml-4">
                    <li>• Train on the entire dataset without partitioning to maximize available data</li>
                    <li>• Generate novel test views by interpolating between training camera positions rather than using predefined poses</li>
                    <li>• Sample validation rays from training images instead of holding out a separate validation set</li>
                    <li>• Explore hierarchical sampling and more efficient NeRF architectures like Instant-NGP</li>
                  </ul>
                </div>
              </div>

              
            </div>
          )}

          {activeTab === 'project5a' && (
            <div className="space-y-8 text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Project 5A: The Power of Diffusion Models</h3>
                <p className="text-black italic">Exploring diffusion models, sampling loops, inpainting, and optical illusions</p>
              </div>

              {/* Overview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Overview</h4>
                <p className="text-black leading-relaxed mb-3">
                  In this project, I explored diffusion models using the DeepFloyd IF model. I implemented diffusion sampling loops, 
                  experimented with classifier-free guidance, and used diffusion models for various tasks including inpainting, 
                  image-to-image translation, visual anagrams, and hybrid images.
                </p>
              </div>

              {/* Part 0: Setup */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 0</h4>

                <div className="mb-6">
                  <button
                    onClick={() => setPromptListExpanded(!promptListExpanded)}
                    className="w-full flex items-center justify-between text-left mb-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <h5 className="text-lg font-semibold text-black">Prompt List</h5>
                    <span className="text-black text-xl">
                      {promptListExpanded ? '−' : '+'}
                    </span>
                  </button>
                  {promptListExpanded && (
                    <div className="mt-2">
                      <p className="text-sm text-black mb-3">
                        Generated prompt embeddings for the following text prompts:
                      </p>
                      <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                        <ul className="text-sm text-black space-y-1 ml-4 list-disc">
                          <li>'a high quality photo'</li>
                          <li>'a quiet watercolor of a cat sitting by a window on a foggy morning'</li>
                          <li>'a soft pacific northwest landscape with tall pines and muted light'</li>
                          <li>'a peaceful beach scene in san diego with gentle afternoon waves'</li>
                          <li>'a runner passing through golden hour light on a coastal trail'</li>
                          <li>'a simple still life of matcha in a ceramic cup on a wooden table'</li>
                          <li>'a small bakery kitchen with warm light and cooling pastries'</li>
                          <li>'a calm rainy day reading nook with mystery novels stacked nearby'</li>
                          <li>'a watercolor palette with soft blues, greens, and warm browns'</li>
                          <li>'a soccer ball resting in grass on an overcast day'</li>
                          <li>'a field hockey stick leaning against a weathered bench'</li>
                          <li>'a quiet new york street in early morning light'</li>
                          <li>'a coastal watercolor painting with subtle brushstrokes and soft tones'</li>
                          <li>'a cat curled up on a knitted blanket beside an open book'</li>
                          <li>'a serene PNW shoreline with driftwood and calm water'</li>
                          <li>'' (empty prompt for unconditional guidance)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Random Seed</h5>
                  <p className="text-sm text-black mb-3">
                    <strong>Seed:</strong> 100 (used consistently throughout all parts)
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Generated Images</h5>
                  <p className="text-sm text-black mb-4">
                    Three selected prompts with generated images at different stage 1 and stage 2 inference step values. 
                    DeepFloyd IF is a two-stage model where stage 1 generates 64×64 images and stage 2 upsamples them to 256×256. 
                    I varied both stage 1 and stage 2 inference steps to see how each stage affects the final image. Stage 1 controls 
                    the overall composition and structure, while stage 2 refines details and texture. More stage 1 steps improved the 
                    initial layout, while more stage 2 steps enhanced fine details and sharpness.
                  </p>
                  <p className="text-sm text-black mb-4">
                    The model did a great job matching the text prompts. The New York street prompt consistently captured the urban 
                    morning atmosphere with soft lighting. The watercolor prompt produced the expected painterly look with soft 
                    brushstrokes, and higher stage 2 steps better preserved the watercolor blending. The cat prompt matched the scene 
                    well, with blanket and book details getting sharper with more stage 2 steps.
                  </p>
                  <p className="text-sm text-black mb-4">
                    Testing four combinations (50/20, 50/50, 20/50, 20/20), I found that stage 1 steps had the biggest impact on 
                    composition and prompt matching. With fewer stage 1 steps (20), images sometimes missed details or had less 
                    coherent layouts. Increasing stage 2 steps (20/50) could add detail but couldn't fix a weak foundation. The 50/50 
                    combination gave the best results overall, but 50/20 was often good enough and faster, showing that a strong stage 1 
                    doesn't always need maximum stage 2 refinement.
                  </p>
                  
                  <div className="space-y-6">
                    {/* Prompt 1: New York Street */}
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                      <h6 className="text-md font-semibold text-black mb-3">Prompt 1: "a quiet new york street in early morning light"</h6>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/newyork_5020.png" alt="New York - Stage 1: 50, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 20</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/newyork_5050.png" alt="New York - Stage 1: 50, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/newyork_2050.png" alt="New York - Stage 1: 20, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/newyork_2020.png" alt="New York - Stage 1: 20, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 20</p>
                        </div>
                      </div>
                    </div>

                    {/* Prompt 2: Watercolor */}
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                      <h6 className="text-md font-semibold text-black mb-3">Prompt 2: "a coastal watercolor painting with subtle brushstrokes and soft tones"</h6>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/watercolor_5020.png" alt="Watercolor - Stage 1: 50, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 20</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/watercolor_5050.png" alt="Watercolor - Stage 1: 50, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/watercolor_2050.png" alt="Watercolor - Stage 1: 20, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/watercolor_2020.png" alt="Watercolor - Stage 1: 20, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 20</p>
                        </div>
                      </div>
                    </div>

                    {/* Prompt 3: Cat */}
                    <div className="border-2 border-gray-300 rounded-lg p-4">
                      <h6 className="text-md font-semibold text-black mb-3">Prompt 3: "a cat curled up on a knitted blanket beside an open book"</h6>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/cat_5020.png" alt="Cat - Stage 1: 50, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 20</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/cat_5050.png" alt="Cat - Stage 1: 50, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 50, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/cat_2050.png" alt="Cat - Stage 1: 20, Stage 2: 50" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 50</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/cat_2020.png" alt="Cat - Stage 1: 20, Stage 2: 20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Stage 1: 20, Stage 2: 20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 1: Sampling Loops */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Part 1: Sampling Loops</h4>
                <p className="text-black leading-relaxed mb-4">
                  Implemented diffusion sampling loops and used them for various tasks including denoising, inpainting, and creating optical illusions.
                </p>

                {/* Part 1.1: Forward Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.1: Implementing the Forward Process</h5>
                  <p className="text-sm text-black mb-3">
                    Implemented the forward process that adds noise to clean images according to the diffusion model formulation.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-black mb-3 italic">Original Campanile and noisy versions at different timesteps:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original Campanile</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.1_250.jpg" alt="Noisy Campanile at t=250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noisy at t=250</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.1_500.jpg" alt="Noisy Campanile at t=500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noisy at t=500</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.1_750.jpg" alt="Noisy Campanile at t=750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noisy at t=750</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.2: Classical Denoising */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.2: Classical Denoising</h5>
                  <p className="text-sm text-black mb-3">
                    Attempted to denoise images using Gaussian blur filtering to compare with diffusion-based denoising.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-black mb-3 italic">Noisy images vs Gaussian-denoised versions at each timestep:</p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.1_250.jpg" alt="Noisy Campanile at t=250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Noisy at t=250</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.2_250.jpg" alt="Gaussian denoised at t=250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Gaussian Blur Denoised at t=250</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.1_500.jpg" alt="Noisy Campanile at t=500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Noisy at t=500</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.2_500.jpg" alt="Gaussian denoised at t=500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Gaussian Blur Denoised at t=500</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.1_750.jpg" alt="Noisy Campanile at t=750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Noisy at t=750</p>
                        </div>
                        <div className="text-center">
                          <img src="/cs180-portfolio/project-5/1.2_750.jpg" alt="Gaussian denoised at t=750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                          <p className="text-xs text-black">Gaussian Blur Denoised at t=750</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.3: One-Step Denoising */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.3: One-Step Denoising</h5>
                  <p className="text-sm text-black mb-3">
                    Used the pretrained diffusion UNet to denoise images in a single step.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-black mb-3 italic">Original, noisy, and one-step denoised Campanile images at each timestep:</p>
                    <div className="space-y-4">
                      <div>
                        <h6 className="text-md font-semibold text-black mb-2 text-center">Timestep t=250</h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.1_250.jpg" alt="Noisy at t=250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Noisy at t=250</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Original</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.3_250.jpg" alt="One-step denoised at t=250" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">One-Step Denoised at t=250</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-md font-semibold text-black mb-2 text-center">Timestep t=500</h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.1_500.jpg" alt="Noisy at t=500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Noisy at t=500</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Original</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.3_500.jpg" alt="One-step denoised at t=500" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">One-Step Denoised at t=500</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-md font-semibold text-black mb-2 text-center">Timestep t=750</h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.1_750.jpg" alt="Noisy at t=750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Noisy at t=750</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">Original</p>
                          </div>
                          <div className="text-center">
                            <img src="/cs180-portfolio/project-5/1.3_750.jpg" alt="One-step denoised at t=750" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                            <p className="text-xs text-black">One-Step Denoised at t=750</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.4: Iterative Denoising */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.4: Iterative Denoising</h5>
                  <p className="text-sm text-black mb-3">
                    Implemented iterative denoising using strided timesteps to generate clean images from noisy inputs.
                  </p>
                  
                  <div className="mt-4 mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Iterative Denoising Progression (Every 5th Loop)</h6>
                    <p className="text-sm text-black mb-3 italic">Noisy Campanile gradually becoming cleaner through iterative denoising:</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_90.jpg" alt="Iteration 5 (t=90)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Loop 5 (t=90)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_240.jpg" alt="Iteration 10 (t=240)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Loop 10 (t=240)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_390.jpg" alt="Iteration 15 (t=390)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Loop 15 (t=390)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_540.jpg" alt="Iteration 20 (t=540)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Loop 20 (t=540)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_690.jpg" alt="Iteration 25 (t=690)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Loop 25 (t=690)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="text-md font-semibold text-black mb-3">Comparison: Original vs Denoising Methods</h6>
                    <p className="text-sm text-black mb-3 italic">Comparing the original Campanile with different denoising approaches:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_iterative.jpg" alt="Iteratively Denoised Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Iteratively Denoised</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_onestep.jpg" alt="One-Step Denoised Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">One-Step Denoised</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.4_blur_filtered.jpg" alt="Gaussian Blurred Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Gaussian Blurred</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.5: Diffusion Model Sampling */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.5: Diffusion Model Sampling</h5>
                  <p className="text-sm text-black mb-3">
                    Generated images from scratch by denoising pure noise.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-black mb-3 italic">5 sampled images from the prompt "a high quality photo":</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.5a.jpg" alt="Sample 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.5b.jpg" alt="Sample 2" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 2</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.5c.jpg" alt="Sample 3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.5d.jpg" alt="Sample 4" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 4</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.5e.jpg" alt="Sample 5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 5</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.6: Classifier-Free Guidance */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.6: Classifier-Free Guidance (CFG)</h5>
                  <p className="text-sm text-black mb-3">
                    Implemented classifier-free guidance to improve image quality by combining conditional and unconditional noise estimates.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-black mb-3 italic">5 images generated with CFG scale of 7 for the prompt "a high quality photo":</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.6a.jpg" alt="CFG Sample 1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 1 with CFG</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.6b.jpg" alt="CFG Sample 2" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 2 with CFG</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.6c.jpg" alt="CFG Sample 3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 3 with CFG</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.6d.jpg" alt="CFG Sample 4" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 4 with CFG</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/1.6e.jpg" alt="CFG Sample 5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Sample 5 with CFG</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.7: Image-to-image Translation */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.7: Image-to-image Translation</h5>
                  <p className="text-sm text-black mb-3">
                    Used SDEdit algorithm to edit images by adding noise and projecting back onto the natural image manifold.
                  </p>
                  
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Part 1.7: SDEdit</h6>
                    <p className="text-sm text-black mb-3 italic">Edits of the Campanile at noise levels [1, 3, 5, 7, 10, 20] with prompt "a high quality photo":</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart1_17.jpg" alt="SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart3_17.jpg" alt="SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart5_17.jpg" alt="SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart7_17.jpg" alt="SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart10_17.jpg" alt="SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/istart20_17.jpg" alt="SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-3 italic">Example 2: Lotus edits at noise levels [1, 3, 5, 7, 10, 20]:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_1.png" alt="Lotus SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_3.png" alt="Lotus SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_5.png" alt="Lotus SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_7.png" alt="Lotus SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_10.png" alt="Lotus SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/lotus_edit_i_start_20.png" alt="Lotus SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-3 italic">Example 3: Penguin edits at noise levels [1, 3, 5, 7, 10, 20]:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_1.png" alt="Penguin SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_3.png" alt="Penguin SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_5.png" alt="Penguin SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_7.png" alt="Penguin SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_10.png" alt="Penguin SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/penguin_edit_i_start_20.png" alt="Penguin SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Part 1.7.1: Editing Hand-Drawn and Web Images</h6>
                    <p className="text-sm text-black mb-3 italic">Web image (Panda) edited at noise levels [1, 3, 5, 7, 10, 20]:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda.jpg" alt="Original Panda" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_1.png" alt="Panda SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_3.png" alt="Panda SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_5.png" alt="Panda SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_7.png" alt="Panda SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_10.png" alt="Panda SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/panda_edit_i_start_20.png" alt="Panda SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Hand-drawn image 1: In-N-Out burger and fries</p>
                    <p className="text-sm text-black mb-3">I chose this because I was hungry doing this project in Doe.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/myImage.png" alt="Original hand-drawn In-N-Out" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_1.png" alt="In-N-Out SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_3.png" alt="In-N-Out SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_5.png" alt="In-N-Out SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_7.png" alt="In-N-Out SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_10.png" alt="In-N-Out SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/innout_edit_i_start_20.png" alt="In-N-Out SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 20</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Hand-drawn image 2: Puppy</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/myImage2.png" alt="Original hand-drawn Puppy" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_1.png" alt="Puppy SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_3.png" alt="Puppy SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_5.png" alt="Puppy SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_7.png" alt="Puppy SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_10.png" alt="Puppy SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/puppy_edit_i_start_20.png" alt="Puppy SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Noise level 20</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Part 1.7.2: Inpainting</h6>
                    <p className="text-sm text-black mb-3 italic">Campanile inpainting using RePaint algorithm:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/172_image.png" alt="Resized Campanile" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Resized Campanile</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/172_mask.png" alt="Mask" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Mask</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/172_replace.png" alt="Hole to Fill" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Hole to Fill</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/172_campanile_inpaint.png" alt="Campanile Inpainted" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Campanile Inpainted</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Custom image 1: Torrey Pines beach in my beautiful hometown San Diego</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/sd.jpg" alt="Torrey Pines Beach Original" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/sdmask.png" alt="Torrey Pines Beach Mask" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Mask</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/sd_replace.png" alt="Torrey Pines Beach Hole to Fill" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Hole to Fill</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/sd_inpaint.png" alt="Torrey Pines Beach Inpainted" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Inpainted</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Custom image 2: Mount Rainier</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rainier.jpeg" alt="Mount Rainier Original" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rainier_mask.png" alt="Mount Rainier Mask" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Mask</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rainier_replace.png" alt="Mount Rainier Hole to Fill" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Hole to Fill</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rainier_inpaint.png" alt="Mount Rainier Inpainted" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Inpainted</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Part 1.7.3: Text-Conditional Image-to-image Translation</h6>
                    <p className="text-sm text-black mb-3 italic">Rocket ship edits with text prompt at noise levels [1, 3, 5, 7, 10, 20] (reference: original Campanile):</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_1.png" alt="Rocket SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_3.png" alt="Rocket SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_5.png" alt="Rocket SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_7.png" alt="Rocket SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_10.png" alt="Rocket SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/rocket_edit_i_start_20.png" alt="Rocket SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/campanile.jpg" alt="Original Campanile (Reference)" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original Campanile (Reference)</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Custom image 1: Space Needle with prompt "a pencil" at noise levels [1, 3, 5, 7, 10, 20]:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/spaceneedle.jpg" alt="Original Space Needle" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_1.png" alt="Space Needle SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_3.png" alt="Space Needle SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_5.png" alt="Space Needle SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_7.png" alt="Space Needle SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_10.png" alt="Space Needle SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/pencil_edit_i_start_20.png" alt="Space Needle SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-black mt-6 mb-2 italic">Custom image 2: Steps with prompt "a lithograph of waterfalls" at noise levels [1, 3, 5, 7, 10, 20]:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps.jpg" alt="Original Steps" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Original</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_1.png" alt="Steps SDEdit with i_start=1" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=1</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_3.png" alt="Steps SDEdit with i_start=3" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=3</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_5.png" alt="Steps SDEdit with i_start=5" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=5</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_7.png" alt="Steps SDEdit with i_start=7" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=7</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_10.png" alt="Steps SDEdit with i_start=10" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=10</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/steps_edit_i_start_20.png" alt="Steps SDEdit with i_start=20" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">SDEdit with i_start=20</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.8: Visual Anagrams */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.8: Visual Anagrams</h5>
                  <p className="text-sm text-black mb-3">
                    Created optical illusions where images appear different when flipped upside down by averaging noise estimates from two different prompts.
                  </p>
                  
                  <div className="mb-6">
                    <h6 className="text-md font-semibold text-black mb-3">Set 1</h6>
                    <p className="text-sm text-black mb-2">
                      <strong>Prompt 1:</strong> "a quiet new york street in early morning light"
                    </p>
                    <p className="text-sm text-black mb-3">
                      <strong>Prompt 2:</strong> "a calm rainy day reading nook with mystery novels stacked nearby"
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/anagramupright181.png" alt="Visual Anagram Set 1 Upright" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Upright</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/anagramflipped181.png" alt="Visual Anagram Set 1 Flipped" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Flipped Upside Down</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-md font-semibold text-black mb-3">Set 2</h6>
                    <p className="text-sm text-black mb-2">
                      <strong>Prompt 1:</strong> "a cat curled up on a knitted blanket beside an open book"
                    </p>
                    <p className="text-sm text-black mb-3">
                      <strong>Prompt 2:</strong> "a serene PNW shoreline with driftwood and calm water"
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/anagramupright182.png" alt="Visual Anagram Set 2 Upright" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Upright</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/project-5/anagramflipped182.png" alt="Visual Anagram Set 2 Flipped" className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                        <p className="text-xs text-black">Flipped Upside Down</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 1.9: Hybrid Images */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-black mb-3">Part 1.9: Hybrid Images</h5>
                  <p className="text-sm text-black mb-3">
                    Implemented Factorized Diffusion to create hybrid images by combining low and high frequencies from different prompts.
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-black mb-2">
                      <strong>Low Frequency (LF):</strong> "a peaceful beach scene in san diego with gentle afternoon waves"
                    </p>
                    <p className="text-sm text-black mb-3">
                      <strong>High Frequency (HF):</strong> "a simple still life of matcha in a ceramic cup on a wooden table"
                    </p>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-5/matcha_beach_hybrid2.png" alt="Hybrid Image: Matcha and Beach" className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Hybrid Image</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-black mb-2">
                      <strong>Low Frequency (LF):</strong> "a soft pacific northwest landscape with tall pines and muted light"
                    </p>
                    <p className="text-sm text-black mb-3">
                      <strong>High Frequency (HF):</strong> "a runner passing through golden hour light on a coastal trail"
                    </p>
                    <div className="text-center">
                      <img src="/cs180-portfolio/project-5/runner_trees_hybrid.png" alt="Hybrid Image: Runner and Trees" className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg border-2 border-gray-300 mb-2" />
                      <p className="text-xs text-black">Hybrid Image</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300 shadow-xl">
                <h4 className="text-xl font-bold text-black mb-4">Reflection & What I Learned</h4>
                <div className="space-y-3 text-black leading-relaxed">
                  <p>
                    [To be filled in after completing the project]
                  </p>
                </div>
              </div>

              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
