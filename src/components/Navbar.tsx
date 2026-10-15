"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "./icons";

const navLinks = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start gap-0 group flex-shrink-0"
          >
            <div className="flex items-center gap-1.5">
              {/* Graduation cap icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-200"
              >
                <path
                  d="M14 4L2 10L14 16L26 10L14 4Z"
                  fill="#3B82F6"
                />
                <path
                  d="M2 10V18"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 13V20C8 20 10 22 14 22C18 22 20 20 20 20V13"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-blue-500">Campus</span>
                <span className="text-slate-800">Pe</span>
              </span>
            </div>
            <span className="text-[9px] text-slate-400 font-normal tracking-wide ml-0.5 hidden sm:block">
              Connecting Students, Institutions &amp; Companies
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] font-medium text-slate-600 hover:text-blue-500 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#signin"
              className="text-[15px] font-medium text-slate-700 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Sign In
            </Link>
            <Link
              href="#signup"
              className="text-[15px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 list-none pt-2 border-t border-slate-100">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-[15px] font-medium text-slate-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-100 mt-1 flex flex-col gap-2">
              <Link
                href="#signin"
                className="block px-3 py-2.5 text-[15px] font-medium text-slate-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="#signup"
                className="block text-center text-[15px] font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-5 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
