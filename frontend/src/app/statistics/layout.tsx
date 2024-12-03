"use client";

import Navbar from "../components/Navbar";

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col p-10 h-screen gap-5">
      <Navbar />
      {children}
    </div>
  );
}
