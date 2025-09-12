'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('project0');

  const tabs = [
    { id: 'project0', label: 'Project 0', title: 'Becoming Friends with Your Camera' },
    { id: 'project1', label: 'Project 1', title: 'Images of the Russian Empire' },
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
            </div>          )}
        </div>
      </div>
    </div>
  );
}
