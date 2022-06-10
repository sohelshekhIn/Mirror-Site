import Image from "next/image";
import { useEffect } from "react";
import { upArrrow } from "../public/images";
import { API_DOMAIN } from "./utilities/FetchData";
import logo from "../public/images/logo.png";
import Link from "next/link";

export function Footer({ Footer, FooterColumns, FooterCredits }) {
  useEffect(() => {
    // if page is scrolled more than 100px show the #stt else hide it
    const showStt = () => {
      if (window.scrollY > 540) {
        document.querySelector("#stt").style.display = "flex";
      } else {
        document.querySelector("#stt").style.display = "none";
      }
    };
    window.addEventListener("scroll", showStt);
  });
  return (
    <>
      <footer className="footer p-10 bg-secondary text-base-100">
        <div
          id="stt"
          className="tooltip btn hover:bg-base-100 outline-none border-0 transform hover:scale-105 bg-base-100 fixed right-10 bottom-10 rounded-sm shadow-xl z-40 hidden"
          data-tip="Scroll To Top"
        >
          <a href="#top" className="flex w-100 h-100">
            <span className="transfrom translate-y-2">
              <Image src={upArrrow} alt="Scroll To Top" />
            </span>
          </a>
        </div>
        <div className="max-w-sm">
          <span className="w-36">
            <Image
              src={API_DOMAIN + Footer.leftLogo.url}
              height={Footer.leftLogo.height}
              width={Footer.leftLogo.width}
            />
          </span>
          <p>{Footer.leftFooterDescription}</p>
        </div>
        {FooterColumns.map((column) => (
          <div key={column.id}>
            <span className="footer-title">{column.text}</span>
            {column.FooterLinks.map((link) => (
              <Link key={link.id} passHref href={link.href}>
                <a className="link link-hover">{link.text}</a>
              </Link>
            ))}
          </div>
        ))}
      </footer>
      <div className="bg-primary w-full text-base-100 flex justify-center p-5 text-center text-xs">
        {FooterCredits.CopyrightText} <br />
        {FooterCredits.CreditTexts}
      </div>
    </>
  );
}
