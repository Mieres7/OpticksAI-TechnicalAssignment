"use client";

import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-14 h-screen">
      <span className="text-black text-5xl fade-in">W e l c o m e .</span>
      <PrimaryButton />
    </div>
  );
}
