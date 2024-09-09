"use client";

import React, { useState } from "react";
import "../app/plainstyles.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); // Get the session data
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeSidebar = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="header flex h-36 justify-between px-6 py-4">
        <div className="flex gap-6">
          <Image
            src={"/images/sportivo.gif"}
            width={50}
            height={50}
            className="size-14 rounded-full sm:size-20"
            alt="logo"
            unoptimized
          />
          <a href="#" className="logo my-auto">
            Team <span>Sportivo</span>
          </a>
        </div>

        <nav className="navbar">
          <a href="/#home" className="active">
            Home
          </a>
          <a href="/#aboutus">About Us</a>
          <a href="/#xaplotes">Xaplotes</a>
          <a href="/#vibgyor">Vibgyor</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#events">Events</a>
          <a href="/#sponsers">Sponsors</a>
          <a href="/#contact">Contact Us</a>

          {/* Sign In/Sign Out Button */}
          {session ? (
            <button onClick={() => signOut()} className="hover:bg-[#3867d6]">
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()} className="hover:bg-[#3867d6]">
              Sign In
            </button>
          )}
        </nav>

        <div className="relative size-14 sm:size-20">
          <Image
            src={"/images/future-logo.jpg"}
            fill
            alt="logo"
            className="size-14 object-contain sm:size-20"
          />
        </div>

        {/* Mobile Menu Bars */}
        <div
          id="menu-bars"
          className="menu-bars cursor-pointer sm:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="mr-8 flex text-5xl text-white sm:hidden"
          />
        </div>
      </header>

      {showMobileMenu && <Sidebar closeSidebar={closeSidebar} />}
    </>
  );
};

export default Navbar;
