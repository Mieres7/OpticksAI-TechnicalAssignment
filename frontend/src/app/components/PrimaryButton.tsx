import Link from "next/link";

const PrimaryButton = () => {
  return (
    <button className="rounded-md border-rose-500 bg-black text-white p-3 px-10 text-l 3xl:text-lg 3xl:rounded-4xl w-auto fade-in">
      <Link href="/statistics">Ingresar</Link>
    </button>
  );
};

export default PrimaryButton;
