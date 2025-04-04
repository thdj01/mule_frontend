"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SettingIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to speed settings by default
    router.push("/setting/speed");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to settings...</p>
    </div>
  );
}