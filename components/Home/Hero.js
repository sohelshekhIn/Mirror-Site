import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { design_triangle } from "../../public/images";
import Link from "next/link"

export default function Hero({ slides }) {
  const router = useRouter();
  const [slidesState, setSlidesState] = useState([]);

  useEffect(() => {
    let slideElems = [];
    slides.forEach((slide) => {
      slideElems.push(SlideItem(slide, slide.src));
    });
    setSlidesState(slideElems);
  }, []);

  useEffect(() => {
    var carouselInterval;
    const startInterval = () => {
      carouselInterval = setInterval(() => {
        const carousel = document.querySelector(".hero-carousel");
        if (carousel != null) {
          carousel.scrollLeft += carousel.offsetWidth;
          if (
            carousel.scrollLeft >=
            carousel.scrollWidth - carousel.offsetWidth - 10
          ) {
            carousel.scrollLeft = 0;
          }
        }
      }, 10000);
    };
    window.addEventListener("blur", () => {
      clearInterval(carouselInterval);
    });
    window.addEventListener("focus", () => {
      startInterval();
    });
    router.events.on("routeChangeStart", () => {
      clearInterval(carouselInterval);
    });

    startInterval();
  }, []);
  return (
    <div className="hero w-100 min-h-screen bg-base-100 mx-auto flex flex-col">
      <div className="hero-content flex-col lg:flex-row-reverse lg:mt-0 lg:p-16 lg:pb-0 h-100 my-auto">
        <div className="w-full lg:w-2/5 carousel hero-carousel rounded-box hero-circle">
          {slidesState}
        </div>
        <div className="w-full lg:w-3/5 lg:-mt-12 p-5">
          <span className="text-5xl font-bold flex flex-col hero-zigzag">
            <p className="text-xl lg:text-3xl text-accent">Welcome to</p>
            <span className="flex flex-col text-primary text-[1.2em] lg:text-[2em]  select-none">
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
            <br />
            (16+ Years of Experience in Teaching). <br />
            CBSE, ICSE, GSEB, JEE, AIPMT, GUJCET
          </h5>
          <Link href="/admission-enquiry">
            <a className="btn btn-primary">Enquire Now</a>
          </Link>
        </div>
      </div>
      <div className="w-full mb-3 lg:mb-5 flex flex-row-reverse lg:flex-row">
        <span className="">
          <Image
            className="lg:scale-x-[-1] scale-y-[-1]"
            src={design_triangle}
          />
        </span>
      </div>
    </div>
  );
}

const SlideItem = (src, key) => {
  return (
    <div className="carousel-item w-full" key={key}>
      {/* Single line if else  */}
      {key == 0 ? (
        <Image
          src={src}
          className="w-full"
          alt="Hero Image || mirror instutute"
        />
      ) : (
        <Image
          src={src}
          priority="true"
          className="w-full"
          alt="Hero Image || mirror instutute"
        />
      )}
    </div>
  );
};
