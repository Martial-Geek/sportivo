"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ closeSidebar }) => {
  return (
    <section className="fixed left-0 top-0 z-50 h-screen w-2/5 bg-[#333]">
      <div className="flex flex-col gap-6 p-6">
        {sidebarLinks.map((item) => {
          return (
            <Link
              href={item.route}
              key={item.label}
              onClick={closeSidebar}
              className="flex items-center justify-start gap-4 bg-transparent p-4"
            >
              <p className="base-bold base-medium text-white">{item.label}</p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3 p-6">
          <Link href="/sign-in" onClick={closeSidebar}>
            <button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </button>
          </Link>
          <Link href="/sign-up" onClick={closeSidebar}>
            <button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default Sidebar;
