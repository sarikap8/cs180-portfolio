'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('project0');

  const tabs = [
    { id: 'project0', label: 'Project 0', title: 'Becoming Friends with Your Camera' },
    { id: 'project1', label: 'Project 1', title: 'Images of the Russian Empire' },
    { id: 'project2', label: 'Project 2', title: 'Fun with Filters and Frequencies' },
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
                        src="/cs180-portfolio/proj2/convolveOut/before.jpg" 
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
                          src="/cs180-portfolio/proj2/convolveOut/im_box_scratch.jpg" 
                          alt="Box filter - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Slowest but clearest</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_box_fast.jpg" 
                          alt="Box filter - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Faster with numpy</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_box_lib.jpg" 
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
                          src="/cs180-portfolio/proj2/convolveOut/im_dx_scratch.jpg" 
                          alt="Dx - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Kernel: [[1, 0, -1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_dx_fast.jpg" 
                          alt="Dx - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Identical results</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_dx_lib.jpg" 
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
                          src="/cs180-portfolio/proj2/convolveOut/im_dy_scratch.jpg" 
                          alt="Dy - 4 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Four Loop Method</p>
                        <p className="text-xs text-black">Kernel: [[1], [0], [-1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_dy_fast.jpg" 
                          alt="Dy - 2 loops" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Two Loop Method</p>
                        <p className="text-xs text-black">Identical results</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/convolveOut/im_dy_lib.jpg" 
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
                        src="/cs180-portfolio/proj2/convolveOut/im_box_25_scratch.jpg" 
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
                          src="/cs180-portfolio/proj2/binaryOut/cameraman.png" 
                          alt="Original cameraman image" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Cameraman</p>
                        <p className="text-xs text-black">Original grayscale picture</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_dx.jpg" 
                          alt="Cameraman Dx derivative" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Dx Derivative</p>
                        <p className="text-xs text-black">Horizontal edges</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_dy.jpg" 
                          alt="Cameraman Dy derivative" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Dy Derivative</p>
                        <p className="text-xs text-black">Vertical edges</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_gradient_magnitude.jpg" 
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
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_edges_thresh_1.jpg" 
                          alt="Threshold 1" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 1</p>
                        <p className="text-xs text-black">70th percentile (0.0456) - Too low, noisy</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_edges_thresh_2.jpg" 
                          alt="Threshold 2" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 2</p>
                        <p className="text-xs text-black">80th percentile (0.0654) - Getting better</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_edges_thresh_3.jpg" 
                          alt="Threshold 3" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Threshold 3</p>
                        <p className="text-xs text-black">85th percentile (0.0789) - Good balance</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/binaryOut/cameraman_edges_thresh_4.jpg" 
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
                          src="/cs180-portfolio/proj2/gaussianOut/gaussian_filter.jpg" 
                          alt="2D Gaussian filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">2D Gaussian Filter</p>
                        <p className="text-xs text-black">15×15 kernel, σ = 2.0</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/gaussianOut/cameraman_blurred.jpg" 
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
                          src="/cs180-portfolio/proj2/gaussianOut/cameraman_dx_smoothed.jpg" 
                          alt="Dx after Gaussian smoothing" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dx After Gaussian Smoothing</p>
                        <p className="text-xs text-black">Much less noisy than raw finite differences</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/gaussianOut/cameraman_dy_smoothed.jpg" 
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
                          src="/cs180-portfolio/proj2/gaussianOut/dog_x_filter.jpg" 
                          alt="DoG X filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">DoG X Filter</p>
                        <p className="text-xs text-black">Gaussian ⊗ [[1, 0, -1]]</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/gaussianOut/dog_y_filter.jpg" 
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
                          src="/cs180-portfolio/proj2/gaussianOut/cameraman_dx_dog.jpg" 
                          alt="Dx using DoG filter" 
                          className="w-full h-80 object-contain rounded-lg shadow-md border-2 border-gray-200 mb-2 bg-white"
                        />
                        <p className="text-sm font-semibold text-black">Dx Using DoG Filter</p>
                        <p className="text-xs text-black">Single convolution approach</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/gaussianOut/cameraman_dy_dog.jpg" 
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
                    Part 2.1: Image "Sharpening"
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
                          src="/cs180-portfolio/proj2/sharpenOut/Taj (1).jpg" 
                          alt="Original Taj Mahal" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Taj Mahal</p>
                        <p className="text-xs text-black">Input image</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/taj_blurred.jpg" 
                          alt="Blurred Taj Mahal" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Gaussian Blur</p>
                        <p className="text-xs text-black">Low frequencies only</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/taj_high_frequencies.jpg" 
                          alt="High frequencies" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">High Frequencies</p>
                        <p className="text-xs text-black">Original - Blurred</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/taj_sharpened_1.5.jpg" 
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
                            src="/cs180-portfolio/proj2/sharpenOut/taj_sharpened_0.5.jpg" 
                            alt="Taj sharpened 0.5" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 0.5</p>
                          <p className="text-xs text-gray-600">Subtle enhancement</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/proj2/sharpenOut/taj_sharpened_1.0.jpg" 
                            alt="Taj sharpened 1.0" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 1.0</p>
                          <p className="text-xs text-gray-600">Moderate sharpening</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/proj2/sharpenOut/taj_sharpened_1.5.jpg" 
                            alt="Taj sharpened 1.5" 
                            className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                          />
                          <p className="text-sm text-black font-medium">α = 1.5</p>
                          <p className="text-xs text-gray-600">Strong sharpening</p>
                        </div>
                        <div className="text-center">
                          <img 
                            src="/cs180-portfolio/proj2/sharpenOut/taj_sharpened_2.0.jpg" 
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
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate.jpg" 
                          alt="Original Golden Gate" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Golden Gate</p>
                        <p className="text-xs text-black">Input image</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_blurred.jpg" 
                          alt="Blurred Golden Gate" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Gaussian Blur</p>
                        <p className="text-xs text-black">Low frequencies</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_high_frequencies.jpg" 
                          alt="Golden Gate high frequencies" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">High Frequencies</p>
                        <p className="text-xs text-black">Bridge cables and details</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_sharpened_1.5.jpg" 
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
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_eval_original.jpg" 
                          alt="Original sharp image" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Original Sharp</p>
                        <p className="text-xs text-black">Ground truth</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_eval_blurred.jpg" 
                          alt="Artificially blurred" 
                          className="w-full h-48 object-cover rounded-lg shadow-md border-2 border-gray-200 mb-2"
                        />
                        <p className="text-sm font-semibold text-black">Artificially Blurred</p>
                        <p className="text-xs text-black">Stronger Gaussian blur</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src="/cs180-portfolio/proj2/sharpenOut/golden-gate_eval_resharpened_1.5.jpg" 
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
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_high_input.jpg" alt="Derek (high input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-frequency input</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_low_input.jpg" alt="Nutmeg (low input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-frequency input</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_high_aligned.jpg" alt="Derek aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High image (aligned & cropped)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_low_aligned.jpg" alt="Nutmeg aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low image (aligned & cropped)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_high_only.jpg" alt="High-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_low_only.jpg" alt="Low-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_hybrid.jpg" alt="Hybrid image" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Final hybrid</p>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/proj2/hybrid_python/derek_nutmeg_fourier_process.jpg" alt="Derek+Nutmeg Fourier process" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200" />
                    </div>
                  </div>

                  {/* Pigeon + Akki (full process with Fourier) */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 shadow mb-6">
                    <h6 className="text-lg font-semibold text-black mb-3">Pigeon + Akki (Full Process)</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_high_input.jpg" alt="Pigeon (high input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-frequency input</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_low_input.jpg" alt="Akki (low input)" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-frequency input</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_high_aligned.jpg" alt="Pigeon aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High image (aligned & cropped)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_low_aligned.jpg" alt="Akki aligned" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low image (aligned & cropped)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_high_only.jpg" alt="High-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">High-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_low_only.jpg" alt="Low-pass result" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Low-pass result</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_hybrid.jpg" alt="Hybrid image" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
                        <p className="text-xs text-black">Final hybrid</p>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <img src="/cs180-portfolio/proj2/hybrid_python/pigeon_akki_fourier_process.jpg" alt="Pigeon+Akki Fourier process" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200" />
                    </div>
                  </div>

                  {/* Beach + City (final only) */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 shadow">
                    <h6 className="text-lg font-semibold text-black mb-3">Beach + City (Final Hybrid)</h6>
                    <div className="text-center">
                      <img src="/cs180-portfolio/proj2/hybrid_python/beach_city_result.jpg" alt="Beach+City hybrid" className="w-full h-96 object-contain bg-white rounded-lg border-2 border-gray-200 mb-2" />
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
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_gaussian_A.jpg" alt="Oraple A Gaussian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_gaussian_B.jpg" alt="Oraple B Gaussian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_laplacian_A.jpg" alt="Oraple A Laplacian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_laplacian_B.jpg" alt="Oraple B Laplacian stack" className="w-full h-64 object-contain bg-white rounded-lg border-2 border-gray-200" />
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
                      <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_blend_vertical.jpg" alt="Oraple vertical seam" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Vertical seam</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_blend_horizontal.jpg" alt="Oraple horizontal seam" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Horizontal seam</p>
                    </div>
                    <div className="text-center">
                      <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/oraple_blend_circular.jpg" alt="Oraple circular mask" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                      <p className="text-xs text-black mt-1">Irregular/circular mask</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-black font-medium mb-3">Additional Creative Blends</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/flowers_space_blend_circular.jpg" alt="Flowers+Space circular" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
                        <p className="text-xs text-black mt-1">Flowers + Space (circular)</p>
                      </div>
                      <div className="text-center">
                        <img src="/cs180-portfolio/proj2/gaussianLaplacianBlendOut/mountain_borealis_blend_horizontal.jpg" alt="Mountain+Borealis horizontal" className="w-full h-56 object-contain bg-white rounded-lg border-2 border-gray-200" />
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
        </div>
      </div>
    </div>
  );
}
