import Image from "next/image";
import { useEffect } from "react";
import { map } from "../public/images/";

export default function ContactUs() {
  useEffect(() => {
    let gMaps = document.getElementById("gmap_canvas");
    let mapSkeleton = document.getElementById("map-skeleton");
    // Show mapSkeleton till the iframe loads
    mapSkeleton.style.display = "block";
    gMaps.style.display = "none";
    gMaps.style.opacity = "0";
    gMaps.style.transitionDuration = "1s";
    // Hide mapSkeleton when iframe loads
    gMaps.onload = () => {
      mapSkeleton.style.display = "none";
      gMaps.style.display = "block";
      gMaps.style.opacity = "1";
    };
  }, []);

  return (
    <div className="page-layout">
      <div className="flex flex-col md:flex-row my-16 lg:my-32">
        <div className="w-full md:w-1/2 3xl:w-8/12 p-5 md:p-10 3xl:pl-32">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                className="h-96"
                id="gmap_canvas"
                loading="lazy"
                src="https://maps.google.com/maps?q=Mirror%20Institue%20Nadiad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <div
                id="map-skeleton"
                className="w-full h-96 border-2 rounded-md mx-auto"
              >
                <div className="flex animate-pulse-fast flex-col items-center h-full justify-center space-x-5">
                  <Image priority src={map} alt="Map Loading" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <div className="flex flex-col mb-5">
            <h1 className="text-heading text-primary align-middle">
              Contact Us
            </h1>
            <span className="underline w-4/12"></span>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex flex-col w-full sm:w-6/12 pr-10">
              <h1 className="text-lg font-semibold pt-4">Address:</h1>
              <p className="">
                S/3,Chanakya Complex, Vaniyavad Circle, Collage Road,
                Nadiad.387001
              </p>
              <h1 className="text-lg font-semibold pt-4">Phone:</h1>
              <a href="tel:268-2529149" className="w-1/2">
                268-2529149
              </a>
              <h1 className="text-lg font-semibold pt-4">Mobile:</h1>
              <a href="tel:+919227429149" className="w-1/2">
                +91 92274 29149
              </a>
              <h1 className="text-lg font-semibold pt-4">Email:</h1>
              <a href="mailto:info@mirrorinstitute.com" className="w-1/2">
                info@mirrorinstitute.com
              </a>

              <a href="mailto:cbsemirror@gmail.com" className="w-1/2">
                cbsemirror@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold pt-4">Opening Hours:</h1>
              <p className="">
                Monday - Saturday: <br />
                10:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
