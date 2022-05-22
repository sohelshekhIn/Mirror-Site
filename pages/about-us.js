import Image from "next/image";
import { aboutImageRight, aboutImageBottom } from "../public/images/";
import { useEffect, useState, useCallback } from "react";

export default function AboutUs() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
      return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery("1024");
  return (
    <>
      <div className="page-layout">
        <div className="flex flex-row min-h-100 my-16 lg:my-32 flex-wrap">
          <div className="w-ful mx-auto xl:mx-0 px-0 md:px-28 lg:px-0 lg:w-6/12  xl:pl-[10%] 2xl:pl-[15%] 3xl:pl-[20%]">
            {/* if targetReached is true show aboutImageRIght or else show aboutImageBottom */}
            {isBreakpoint ? (
              <Image src={aboutImageBottom} alt="about-us-image" />
            ) : (
              <Image src={aboutImageRight} alt="about-us-image" />
            )}
          </div>
          <div className="flex flex-col lg:w-6/12 2xl:w-1/2 px-5 md:px-28 lg:px-0 pt-0 -mt-8 lg:mt-0 xl:mt-5">
            <h1 className="text-heading text-5xl text-primary mb-0">
              About Us
            </h1>
            <span className="bg-accent w-64 h-1 lg:-mt-5 xl:mt-0"></span>
            <p className="lg:py-2 xl:py-10 mt-10 lg:mt-0 w-full lg:w-9/12 2xl:w-8/12 text-lg">
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
