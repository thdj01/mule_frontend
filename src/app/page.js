"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [isStreamOn, setIsStreamOn] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isFollowActive, setIsFollowActive] = useState(false);
  const [isPowerActive, setIsPowerActive] = useState(false);

  const toggleIcon = () => {
    setIsActive(!isActive);
  };
  const togglePowerIcon = () => {
    setIsPowerActive(!isPowerActive);
  };
  const toggleFollowmeIcon = () => {
    setIsFollowActive(!isFollowActive);
  };
  const toggleStream = () => {
    setIsStreamOn(!isStreamOn);
  };

  return (
    <div className="flex flex-col h-screen w-full  ">
      {/* Main video container with border */}
      <div className="relative flex-1 border border-gray-300 overflow-hidden">
        <div className="flex items-center justify-center h-full bg-white">
          {isStreamOn ? (
            <img
              src="http://192.168.0.29:8000/video"
              alt="Live video stream"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-4xl font-bold text-center">
              Live video stream
            </div>
          )}
        </div>

        {/* Bottom control bar inside the container */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 border-t border-gray-300 bg-gray-100">
          <div className="flex space-x-4">
            {/* Settings button */}
            <Link href="/setting/speed">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 cursor-pointer">
                <img
                  className={`flex items-center justify-center }`}
                  src={"/settings.svg"}
                ></img>
              </div>
            </Link>

            {/* Power button */}
            <button
              onClick={() => togglePowerIcon(!isPowerActive)}
              className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                isPowerActive
                  ? "bg-gradient-to-br from-green-400 to-green-600 text-white scale-105"
                  : "bg-gradient-to-br from-red-400 to-red-600 text-white"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-black opacity-0 hover:opacity-10 transition-opacity"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
              </svg>
            </button>
            {/* <span className="font-medium text-sm">{isPowerActive ? 'ON' : 'OFF'}</span> */}

            {/* Speed button */}
            <div
              onClick={toggleIcon}
              className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-red-400 to-red-600 text-white scale-105"
                  : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-black opacity-0 hover:opacity-10 transition-opacity"></div>

              {isActive ? (
                // Fast mode - Tire with speed/smoke lines
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 4v2" />
                  <path d="M12 18v2" />
                  <path d="M4 12h2" />
                  <path d="M18 12h2" />
                  {/* Speed/smoke lines */}
                  <path d="M19 8l3-3" strokeDasharray="1,1" />
                  <path d="M19 16l3 3" strokeDasharray="1,1" />
                  <path d="M5 16l-3 3" strokeDasharray="1,1" />
                  <path d="M5 8l-3-3" strokeDasharray="1,1" />
                  <path d="M16 5l2-2" strokeDasharray="1,1" />
                  <path d="M16 19l2 2" strokeDasharray="1,1" />
                  <path d="M8 19l-2 2" strokeDasharray="1,1" />
                  <path d="M8 5l-2-2" strokeDasharray="1,1" />
                </svg>
              ) : (
                // Slow mode - Steady tire
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 4v2" />
                  <path d="M12 18v2" />
                  <path d="M4 12h2" />
                  <path d="M18 12h2" />
                  <path d="M6.34 6.34l1.42 1.42" />
                  <path d="M16.24 16.24l1.42 1.42" />
                  <path d="M6.34 17.66l1.42-1.42" />
                  <path d="M16.24 7.76l1.42-1.42" />
                </svg>
              )}
            </div>
          </div>

          <div
            className={`flex items-center justify-center rounded-lg ${
              !isFollowActive ? "bg-gray-300" : "bg-green-600"
            } `}
          >
            {/* Vehicle and person detection icon */}
            <div onClick={toggleFollowmeIcon} className="flex space-x-2">
              <img
                className={`flex items-center justify-center i}`}
                src={isFollowActive ? "/followon.svg" : "/followoff.svg"}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
