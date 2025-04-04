"use client";
import React from "react";

export default function SettingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}