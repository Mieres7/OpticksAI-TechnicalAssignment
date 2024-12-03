import { useState } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  EnvelopeIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-between w-full text-black text-lg">
      <div className="flex gap-3">
        <Bars3Icon className="w-8 " />
        <span className="text-3xl">Welcome .</span>
      </div>

      <div className="links flex gap-3">
        <EnvelopeIcon className="w-8" />
        <BellIcon className="w-8" />
        <UserCircleIcon className="w-8" />
      </div>
    </div>
  );
}
