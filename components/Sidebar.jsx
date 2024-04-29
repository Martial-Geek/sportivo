"use client";

import React from "react";
import Link from "next/link";
import { SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ closeSidebar }) => {
  return (
    <section className="fixed left-0 top-[77px] z-50 h-screen w-2/5 border-x-0 border-t border-solid border-white bg-[#333]">
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
      <SignedOut>
        <div className="flex flex-col gap-3 p-6">
          <Link href="/sign-in" onClick={closeSidebar}>
            <button className="min-h-[41px] w-full rounded-lg bg-fuchsia-300 px-4 py-3 shadow-none">
              <span className="text-3xl font-semibold text-slate-900">
                Log In
              </span>
            </button>
          </Link>
          <Link href="/sign-up" onClick={closeSidebar}>
            <button className="min-h-[41px] w-full rounded-lg bg-fuchsia-300 px-4 py-3 shadow-none">
              <span className="text-3xl font-semibold text-slate-900">
                Sign Up
              </span>
            </button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-around gap-4 p-4">
          <p className="text-4xl font-semibold text-white">Profile</p>
          {/* Increase the size of the user profile icon  */}
          <UserButton />
        </div>
      </SignedIn>
    </section>
  );
};

export default Sidebar;
