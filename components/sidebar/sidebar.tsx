"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import Library from "./library";

function Sidebar() {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        name: "Home",
        href: "/",
        icon: <IoMdHome size={26} />,
        active: pathname !== "/search",
      },
      {
        name: "Search",
        href: "/search",
        icon: <IoSearch size={26} />,
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="hidden md:flex w-[300px] bg-neutral-900 h-full flex-col">
      <div className="p-4 rounded-md w-full border-x-8 border-b-4 border-black space-y-2 h-fit">
        {routes.map((route) => (
          <div key={route.name}>
            <Link
              className={twMerge(
                "text-neutral-400 hover:text-white transition flex items-center gap-4 p-2 rounded-md ",
                route.active && "text-white"
              )}
              href={route.href}
            >
              {route.icon}
              {route.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-md w-full border-8 border-black space-y-2 h-full">
        <Library />
      </div>
    </div>
  );
}
export default Sidebar;
