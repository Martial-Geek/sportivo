"use client";

import React, { useState } from "react";

import "../app/plainstyles.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeSidebar = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="header flex justify-between px-6 py-4">
        <div className="flex gap-6">
          <Image
            src={"/images/sportivo.gif"}
            width={50}
            height={50}
            className="size-12 rounded-full"
            alt="logo"
          />

          <a href="#" className="logo my-auto">
            Team <span>Sportivo</span>{" "}
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
        </nav>

        <Image
          src={"/images/futur.jpg"}
          width={50}
          height={50}
          alt="logo"
          className="size-12"
        />

        {/* Mobile Menu Bars */}
        <div
          id="menu-bars"
          className="menu-bars cursor-pointer md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FontAwesomeIcon icon={faBars} className="text-3xl text-white" />
        </div>
      </header>
      {showMobileMenu && <Sidebar closeSidebar={closeSidebar} />}
    </>
  );
};

export default Navbar;
