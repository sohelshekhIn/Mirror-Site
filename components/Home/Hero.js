import Image from "next/image";
import { useEffect, useState } from "react";
import { h1, h2, h3, h4, h5, h6 } from "../../public/images/";

export default function Hero({ slides }) {
  const [slidesState, setSlidesState] = useState([])
  useEffect(() => {
    let slideElems = []
    // for each slide in slides array, append a slide in carousel-item class
    slides.forEach((slide) => {
      slideElems.append(SlideItem(slide));
    })
    setSlidesState(slideElems)


  }, [])

  useEffect(() => {
    var carouselInterval
    const startInterval = () => {
      carouselInterval = setInterval(() => {
        const carousel = document.querySelector(".carousel");
        carousel.scrollLeft += carousel.offsetWidth;
        if (
          carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth - 1) {
          carousel.scrollLeft = 0;
        }
      }, 5000);
    }
    window.addEventListener("blur", () => {
      clearInterval(carouselInterval);
    });
    window.addEventListener("focus", () => {
      startInterval();
    });

    startInterval();
  });



  return (
    <div className="hero w-100 min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse lg:p-16">
        <div className="w-full lg:w-2/5 carousel rounded-box">
          {/* <div className="carousel-item w-full">
            <Image
              src={h1}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={h2}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={h3}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={h4}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={h5}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={h6}
              className="w-full"
              alt="Hero Image || mirror instutute"
            />
          </div> */}
          {slidesState}
        </div>
        <div className="w-full lg:w-3/5 lg:-mt-12 p-5">
          <span className="text-5xl font-bold flex flex-col">
            <p className="text-xl lg:text-3xl">Welcome to</p>
            <span className="flex flex-col text-primary text-[1.2em] lg:text-[2em]">
              <span className="flex mr-[1rem] lg:m-0">
                mir
                <p className="w-0 ml-6 lg:ml-11 transform -scale-x-100 scale-y-100">
                  r
                </p>
                or
              </span>
              institute
            </span>
          </span>
          <h5 className="py-6 lg:w-3/4 font-bold lg:text-lg">
            Most Experience Classes in Nadiad
            <br />(16+ Years of Experience in Teaching). <br />
            CBSE, ICSE, GSEB, JEE, AIPMT, GUJCET
          </h5>
          <button className="btn btn-primary">Enquire Now</button>
        </div>
      </div>
    </div>
  );
}

const SlideItem = ({ src }) => {
  return (
    <div className="carousel-item w-full">
      <Image
        src={src}
        className="w-full"
        alt="Hero Image || mirror instutute"
      />
    </div>
  )
}