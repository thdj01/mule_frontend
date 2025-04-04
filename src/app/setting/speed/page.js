"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function SpeedSettings() {
  // State for storing drive speeds
  const [fastSpeeds, setFastSpeeds] = useState({
    drive1: 2.40,
    drive2: "",
    drive3: "",
    drive4: ""
  });
  
  const [slowSpeeds, setSlowSpeeds] = useState({
    drive1: "",
    drive2: "",
    drive3: "",
    drive4: ""
  });

  // Handle fast mode speed changes
  const handleFastSpeedChange = (drive, value) => {
    setFastSpeeds({
      ...fastSpeeds,
      [drive]: value
    });
  };

  // Handle slow mode speed changes
  const handleSlowSpeedChange = (drive, value) => {
    setSlowSpeeds({
      ...slowSpeeds,
      [drive]: value
    });
  };

  // Handle save button click
  const handleSave = () => {
    // Save logic here - could be API call or localStorage
    console.log("Saving speeds:", { fastSpeeds, slowSpeeds });
    // You might want to add a success message or redirect
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Navigation tabs */}
      <div className="flex w-full border-b border-gray-300">
        <Link href="/setting" className="px-6 py-3 bg-gray-200 text-center font-bold">
          Settings
        </Link>
        <Link href="/setting/speed" className="px-6 py-3 bg-blue-100 text-center font-bold">
          Speed
        </Link>
        <Link href="/setting/zone" className="px-6 py-3 bg-gray-200 text-center font-bold">
          Zone
        </Link>
        <div className="flex-grow"></div>
        <Link href="/" className="px-6 py-3 bg-gray-200 text-center font-bold">
          Home
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Speed Parameters</h1>
          <p className="text-lg mt-1">Set the Speed for different Drives</p>
        </div>

        {/* Two-column layout for speed settings */}
        <div className="flex flex-row justify-around">
          {/* Fast Mode column */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-center">Fast Mode</h2>
            
            {/* Drive inputs for Fast Mode */}
            {[1, 2, 3, 4].map((driveNum) => (
              <div key={`fast-drive-${driveNum}`} className="mb-6">
                <label className="block mb-2 font-bold">Drive {driveNum}</label>
                <input
                  type="number"
                  step="0.01"
                  value={fastSpeeds[`drive${driveNum}`]}
                  onChange={(e) => handleFastSpeedChange(`drive${driveNum}`, e.target.value)}
                  placeholder={`Set max speed for drive ${driveNum}`}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          {/* Slow Mode column */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-center">Slow Mode</h2>
            
            {/* Drive inputs for Slow Mode */}
            {[1, 2, 3, 4].map((driveNum) => (
              <div key={`slow-drive-${driveNum}`} className="mb-6">
                <label className="block mb-2 font-bold">Drive {driveNum}</label>
                <input
                  type="number"
                  step="0.01"
                  value={slowSpeeds[`drive${driveNum}`]}
                  onChange={(e) => handleSlowSpeedChange(`drive${driveNum}`, e.target.value)}
                  placeholder={`Set max speed for drive ${driveNum}`}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSave}
            className="px-16 py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}