"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ closeSidebar }) => {
  const { data: session } = useSession();

  return (
    <section className="fixed right-0 top-[5%] z-50 h-screen w-1/2 border-x-0 border-t border-solid border-white bg-[#333] sm:hidden">
      <div className="flex flex-col gap-6 p-6">
        {sidebarLinks.map((item) => {
          return (
            <Link
              href={item.route}
              key={item.label}
              onClick={closeSidebar}
              className="flex items-center justify-start gap-4 border-x-0 border-b border-t-0 border-solid border-[#222] bg-transparent p-4 hover:rounded-xl hover:bg-slate-700"
            >
              <p className="base-bold base-medium text-white">{item.label}</p>
            </Link>
          );
        })}
      </div>
      {session ? (
        <div className="flex items-center space-x-4">
          <p className="text-gray-300">Email: {session.user.email}</p>
          <button
            type="button"
            className="rounded-full bg-orange-500 px-5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-orange-600"
            onClick={async () =>
              await signOut({ callbackUrl: "http://localhost:3000/sign-in" })
            }
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link href="/sign-in">
          <button
            type="button"
            className="rounded-full bg-orange-500 px-5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-orange-600"
          >
            Sign In
          </button>
        </Link>
      )}
    </section>
  );
};

export default Sidebar;
