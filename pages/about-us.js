import Image from "next/image";
import { h3 } from "../public/images/";

export default function AboutUs() {
  return (
    <>
      <div className="page-layout">
        <div className="flex flex-row min-h-100 mt-28 flex-wrap">
          <div className="w-10/12 px-5 md:px-28 lg:w-1/2">
            <Image
              src={h3}
              alt="h3"
              className="rounded-lg lg:rounded-tr-full lg:rounded-br-none lg:rounded-bl-none lg:rounded-tl-none"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col px-5 md:px-28 lg:pl-24 pt-20 aboutus-polkadots2">
            <h1 className="text-heading text-5xl text-primary">About Us</h1>
            <span className="bg-accent w-64 h-1"></span>
            <p className="lg:py-14 mt-10 lg:mt-0 w-full lg:w-9/12 text-lg">
              mirror institute has been started to render the academic need of
              the central board students. We are trying to keep this institute
              upgraded to satisfy the need of the students. Our objective is to
              realize students their potential within. Our methodology has been
              motivational and encouraging. We always try to simplify the
              complicacy of the subject by spurring lateral thinking. Our
              mission is to impart every parents and students honest and
              transparent way of education. We are trying to be most accountable
              to our parents and students and at the same time expecting same
              from them for us and for each other.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
