export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">
          CS 180
        </h1>
        <h2 className="text-3xl font-semibold text-purple-700 mb-8">
          Intro to Computational Photography and Computer Vision
        </h2>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Project 0: Becoming Friends with Your Camera
          </h3>
        </div>
      </div>
    </div>
  );
}
