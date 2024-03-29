"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";

function Header() {
  const router = useRouter();
  return (
    <div className=" bg-gradient-to-b from-emerald-600 py-10 px-6 space-y-5">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="bg-neutral-900 p-1 flex items-center justify-center rounded-full hover:opacity-90 transition"
          >
            <RiArrowLeftSLine size={28} />
          </button>
          <button
            onClick={() => router.push("")} // add href here
            className="bg-neutral-900 p-1 flex justify-center items-center  rounded-full hover:opacity-90 transition"
          >
            <RiArrowRightSLine size={28} />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={"/"}
            className="bg-white p-[6px] flex items-center justify-center rounded-full hover:opacity-90 transition"
          >
            <IoMdHome className="text-black" size={26} />
          </Link>
          <Link
            href={"/search"}
            className="bg-white p-[6px] flex items-center justify-center rounded-full hover:opacity-90 transition"
          >
            <IoMdSearch className="text-black" size={26} />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-white/90 hover:text-white/80 transition">
            Sign up
          </button>
          <button className="text-black px-6 py-2 rounded-full bg-white hover:opacity-75 transition font-semibold">
            Log in
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <div className="group relative cursor-pointer w-[300px] rounded-md bg-neutral-50/10 hover:bg-neutral-50/20 transition flex items-center gap-3 overflow-hidden">
          <Image
            src={"/liked.png"}
            width={64}
            height={64}
            alt="liked image"
            className="object-cover"
          />
          <p> Liked Songs</p>
          <div className="absolute opacity-0 group-hover:opacity-100 right-5 p-2 bg-green-500 transition text-black rounded-full items-center justify-center flex drop-shadow hover:scale-110 ">
            <BiPlay size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
