export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center p-8 font-mono">
      <div className="text-center space-y-8 max-w-4xl">
        <h1 className="text-6xl font-black text-purple-800 mb-4 tracking-wider drop-shadow-lg">
          CS 180 ✨
        </h1>
        <h2 className="text-3xl font-bold text-purple-700 mb-6 italic">
          Intro to Computational Photography and Computer Vision
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-purple-300 mb-8">
          <p className="text-lg text-purple-600 font-medium leading-relaxed">
             Welcome to my portfolio! 💜
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-purple-300">
          <h3 className="text-3xl font-black text-purple-800 mb-6 tracking-wide">
            📸 Project 0: Becoming Friends with Your Camera
          </h3>
          <div className="space-y-6 text-left">
            <div className="border-l-4 border-purple-400 pl-6 bg-purple-50/50 rounded-r-lg py-4">
              <h4 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                Part 1: Selfie: The Wrong Way vs. The Right Way
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <img 
                    src="/cs180-portfolio/closeup.png" 
                    alt="Close-up selfie showing distortion" 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-purple-200 mb-2"
                  />
                  <p className="text-sm font-semibold text-purple-700">The Wrong Way: Close-up</p>
                  <p className="text-xs text-purple-600 italic">Distorted perspective from being too close</p>
                </div>
                <div className="text-center">
                  <img 
                    src="/cs180-portfolio/zoomedin.png" 
                    alt="Zoomed-in photo from distance showing better proportions" 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-purple-200 mb-2"
                  />
                  <p className="text-sm font-semibold text-purple-700">The Right Way: Step Back & Zoom</p>
                  <p className="text-xs text-purple-600 italic">Less distorted and better portrait</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-purple-400 pl-6 bg-purple-50/50 rounded-r-lg py-4">
              <h4 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                Part 2: Architectural Perspective Compression
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <img 
                    src="/cs180-portfolio/zoomtree.png" 
                    alt="Zoomed-in view of street scene showing compression" 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-purple-200 mb-2"
                  />
                  <p className="text-sm font-semibold text-purple-700">Zoomed In: Compressed Perspective</p>
                  <p className="text-xs text-purple-600 italic">Flattened depth from zoom</p>
                </div>
                <div className="text-center">
                  <img 
                    src="/cs180-portfolio/fartree.png" 
                    alt="Close-up wide angle view showing natural depth" 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-purple-200 mb-2"
                  />
                  <p className="text-sm font-semibold text-purple-700">Wide Angle: Natural Depth</p>
                  <p className="text-xs text-purple-600 italic">Preserved perspective and depth perception</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-purple-400 pl-6 bg-purple-50/50 rounded-r-lg py-4">
              <h4 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                Part 3: The Dolly Zoom
              </h4>
              <p className="text-purple-600 font-medium mb-6 leading-relaxed">
                The lipbalm family 💜💜💜💜💜💜 
              </p>
              <div className="flex justify-center">
                <div className="text-center max-w-md">
                  <img 
                    src="/cs180-portfolio/Image from Imgflip.gif" 
                    alt="Dolly zoom effect animation showing perspective distortion" 
                    className="w-full h-auto rounded-lg shadow-lg border-2 border-purple-300 mb-3"
                  />
                  <p className="text-sm font-semibold text-purple-700">Dolly Zoom Effect</p>
                  <p className="text-xs text-purple-600 italic">Camera moves back while zooming in, creating the &quot;Vertigo&quot; effect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
