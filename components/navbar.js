import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.querySelector(".dropdown-content").onclick = function (e) {
      document.activeElement.blur();
    };
  });

  return (
    <div className="navbar rounded-xl bg-primary text-base-100 px-5 3xl:px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-secondary rounded-md w-52"
          >
            <li className="my-1">
              <Link href="/">
                <a className="w-full p-4">Home</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/about-us">
                <a className="w-full p-4">About Us</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/success-story">
                <a className="w-full p-4">Success Story</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/Admission-Enquiry">
                <a className="w-full p-4">Admission Enquiry</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href="/contact-us">
                <a className="w-full p-4">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-link w-28 p-1 my-2 lg:w-32 lg:mx-2">
            <Image
              src={logo}
              priority="true"
              alt="Mirror Institute Nadiad - Best Tution Classes in Nadiad, Mirror Institute Logo"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mx-1">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="mx-1">
            <Link href="/success-story">Success Story</Link>
          </li>
          <li className="mx-1">
            <Link href="/Admission-Enquiry">Admission Enquiry</Link>
          </li>
          <li className="mx-1">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost text-accent">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}
