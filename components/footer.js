import Image from "next/image";
import logo from "../public/images/logo.png";

export function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-secondary text-base-100">
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
