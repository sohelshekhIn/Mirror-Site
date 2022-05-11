import Image from "next/image";
import { useEffect } from "react";
import { upArrrow } from "../public/images";
import logo from "../public/images/logo.png";

export function Footer() {

  useEffect(() => {
    // if page is scrolled more than 100px show the #stt else hide it
    const showStt = () => {
      if (window.scrollY > 540) {
        document.querySelector("#stt").style.display = "flex";
      } else {
        document.querySelector("#stt").style.display = "none";
      }
    }
    window.addEventListener("scroll", showStt);
  })
  return (
    <>
      <footer className="footer p-10 bg-secondary text-base-100">
        <div id="stt" className="tooltip btn hover:bg-base-100 outline-none border-0 transform hover:scale-105 bg-base-100 fixed right-10 bottom-10 rounded-sm shadow-xl z-40 hidden" data-tip="Scroll To Top">
          <a href="#head" className="flex w-100 h-100">
            <span className="transfrom translate-y-2">
              <Image src={upArrrow} alt="Scroll To Top" />
            </span>
          </a>
        </div>
        <div>
          <span className="w-36">
            <Image src={logo} />
          </span>
          <p>
            Mirror institute has been established in the year 2005
            <br /> under the guideline of parents, for their ward,
            <br /> since then we are catering needs of the parents
            <br /> as well as students to give them the state
            <br /> of the art education.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Gallery</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="bg-primary w-full text-base-100 flex justify-center p-5 text-center text-xs">
        Copyright © Mirror Institue {new Date().getFullYear()}. All Right
        Reserved. <br />
        Developed by Sohel Shekh
      </div>
    </>
  );
}
