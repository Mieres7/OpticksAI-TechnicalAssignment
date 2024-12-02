import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full text-black text-lg p-10 ">
      <span className="text-3xl">Welcome .</span>

      <div className="links">
        <Link href="/">inicio</Link>
      </div>
    </div>
  );
}
