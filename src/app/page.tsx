import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white">
            Welcome to Sanjana Airlines
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 dark:text-gray-300">
            Fly with Comfort
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-md">
            Experience luxury and convenience with our world-class airline services.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          {/* Empty space for your idea */}
        </div>
      </div>
    </BackgroundLines>
  );
}
