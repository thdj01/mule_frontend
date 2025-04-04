"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ZoneSettings() {
  // State for zone parameters
  const [fastParams, setFastParams] = useState({
    maxRangeW2: "",
    maxSpeed: "",
    maxRangeL: ""
  });
  
  const [slowParams, setSlowParams] = useState({
    maxSpeed: "",
    maxRangeL: "",
    maxRangeW2: ""
  });

  // Handle fast mode parameter changes
  const handleFastParamChange = (param, value) => {
    setFastParams({
      ...fastParams,
      [param]: value
    });
  };

  // Handle slow mode parameter changes
  const handleSlowParamChange = (param, value) => {
    setSlowParams({
      ...slowParams,
      [param]: value
    });
  };

  // Handle save button click
  const handleSave = () => {
    // Save logic here - could be API call or localStorage
    console.log("Saving zone parameters:", { fastParams, slowParams });
    // You might want to add a success message or redirect
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Navigation tabs */}
      <div className="flex w-full border-b border-gray-300">
        <Link href="/setting" className="px-6 py-3 bg-gray-200 text-center font-bold">
          Settings
        </Link>
        <Link href="/setting/speed" className="px-6 py-3 bg-gray-200 text-center font-bold">
          Speed
        </Link>
        <Link href="/setting/zone" className="px-6 py-3 bg-blue-100 text-center font-bold">
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
          <h1 className="text-4xl font-bold">Zone Parameters</h1>
          <p className="text-lg mt-1">Set the parameters for different zones</p>
        </div>

        {/* Two-column layout for zone settings */}
        <div className="flex flex-row justify-around">
          {/* Fast Mode column */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-center">Fast Mode</h2>
            
            {/* Max Range (W/2) */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Range (W/2)</label>
              <input
                type="number"
                step="0.01"
                value={fastParams.maxRangeW2}
                onChange={(e) => handleFastParamChange("maxRangeW2", e.target.value)}
                placeholder="Enter max range for fast mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Max Speed */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Speed</label>
              <input
                type="number"
                step="0.01"
                value={fastParams.maxSpeed}
                onChange={(e) => handleFastParamChange("maxSpeed", e.target.value)}
                placeholder="Enter max speed for fast mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Max Range (L) */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Range (L)</label>
              <input
                type="number"
                step="0.01"
                value={fastParams.maxRangeL}
                onChange={(e) => handleFastParamChange("maxRangeL", e.target.value)}
                placeholder="Enter max range for slow mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Slow Mode column */}
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-center">Slow Mode</h2>
            
            {/* Max Speed */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Speed</label>
              <input
                type="number"
                step="0.01"
                value={slowParams.maxSpeed}
                onChange={(e) => handleSlowParamChange("maxSpeed", e.target.value)}
                placeholder="Enter max speed for slow mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Max Range (L) */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Range (L)</label>
              <input
                type="number"
                step="0.01"
                value={slowParams.maxRangeL}
                onChange={(e) => handleSlowParamChange("maxRangeL", e.target.value)}
                placeholder="Enter max range for fast mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Max Range (W/2) */}
            <div className="mb-6">
              <label className="block mb-2 font-bold">Max Range (W/2)</label>
              <input
                type="number"
                step="0.01"
                value={slowParams.maxRangeW2}
                onChange={(e) => handleSlowParamChange("maxRangeW2", e.target.value)}
                placeholder="Enter max range for slow mode..."
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
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