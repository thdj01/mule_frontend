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


  const toggleIcon = () => {
    setIsActive(!isActive);
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
            <div className="text-4xl font-bold text-center">Live video stream</div>
          )}
        </div>
        
        {/* Bottom control bar inside the container */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 border-t border-gray-300 bg-gray-100">
          <div className="flex space-x-4">
            {/* Settings button */}
            <Link href="/setting/speed">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-gray-200 cursor-pointer">
              <img className={`flex items-center justify-center }`} 
               src={'/settings.svg'}>
              </img>
              </div>
            </Link>
            
            {/* Power button */}
            <div className="flex items-center justify-center w-15 h-15 rounded-full bg-gray-200 cursor-pointer"
              onClick={toggleStream}
            >
              <img className={`flex items-center justify-center }`} 
               src={'/frame.svg'}></img>
            </div>
            
            {/* Speed button */}
            <div onClick={toggleIcon} className="flex items-center justify-center w-15 h-15 rounded-full bg-gray-200 cursor-pointer">
            <img className={`flex items-center justify-center}`} 
               src={isActive ? '/fast-mode.svg' : '/slow-mode-svgrepo-com.svg'}>
            </img>
            </div>
          </div>
          
          <div className={`flex items-center justify-center rounded-lg ${!isFollowActive ? "bg-gray-300" : 'bg-green-600'} `}>
            {/* Vehicle and person detection icon */}
            <div onClick={toggleFollowmeIcon} className="flex space-x-2">
            <img className={`flex items-center justify-center i}`}
               src={isFollowActive ? '/followon.svg' : '/followoff.svg'}>
            </img>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}