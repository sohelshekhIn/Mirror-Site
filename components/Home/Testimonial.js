import Image from "next/image";
import { testimonial } from "../../public/images";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Testimonial() {
  const router = useRouter();
  useEffect(() => {
    var testimonialInterval;
    const startInterval = () => {
      testimonialInterval = setInterval(() => {
        const carousel = document.querySelector(".testimonial-carousel");
        carousel.scrollLeft += carousel.offsetWidth;
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.offsetWidth - 10
        ) {
          carousel.scrollLeft = 0;
        }
      }, 10000);
    };
    window.addEventListener("blur", () => {
      clearInterval(testimonialInterval);
    });
    window.addEventListener("focus", () => {
      startInterval();
    });
    router.events.on("routeChangeStart", (url, { shallow }) => {
      clearInterval(testimonialInterval);
      console.log("Testimonial stopped");
    });

    startInterval();
  });
  return (
    <>
      <div
        id="testimonials"
        className="flex flex-col items-center justify-center mt-24 mb-14"
      >
        <h2 className="text-heading text-center divider text-primary">
          Testimonials
        </h2>
        <p className="text-center">What our students have to say</p>
      </div>
      <div className="carousel testimonial-carousel w-full py-14 xl:pt-0">
        <Slides currSlide="1" prevSlide="4" nextSlide="2" image={testimonial} />
        <Slides currSlide="2" prevSlide="1" nextSlide="3" image={testimonial} />
        <Slides currSlide="3" prevSlide="2" nextSlide="4" image={testimonial} />
        <Slides currSlide="4" prevSlide="3" nextSlide="1" image={testimonial} />
      </div>
      <div className="flex justify-end opacity-75 lg:hidden relative bottom-10 px-5">
        {"Swipe >>"}
      </div>
    </>
  );
}

export function Slides({
  currSlide,
  nextSlide,
  prevSlide,
  name = "Adam L.",
  image,
  desc = "Student",
  testimonialText,
}) {
  return (
    <div
      id={"slide" + currSlide}
      className="carousel-item relative w-full mx-24"
    >
      <div className="card w-96 bg-base-100 shadow-2xl p-5 m-5 mx-auto">
        <div className="card-body flex flex-col">
          <div className="flex">
            <span className="w-16">
              <Image className="rounded-full" src={image} />
            </span>

            <span className="flex flex-col ml-5">
              <h2 className="card-title">{name}</h2>
              <p>{desc}</p>
            </span>
          </div>
          <div className="justify-center">
            <p>
              <span className="text-neutral mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget nisl id libero tincidunt egestas.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl p-5 m-5 mx-auto hidden lg:block">
        <div className="card-body flex flex-col">
          <div className="flex">
            <span className="w-16">
              <Image className="rounded-full" src={image} />
            </span>

            <span className="flex flex-col ml-5">
              <h2 className="card-title">{name}</h2>
              <p>{desc}</p>
            </span>
          </div>
          <div className="justify-center">
            <p>
              <span className="text-neutral mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget nisl id libero tincidunt egestas. Nulla euismod, urna eu
                tincidunt consectetur, nisi nisl elementum nisi, euismod
                consectetur nunc nisl euismod.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-2xl p-5 m-5 mx-auto hidden xl:block">
        <div className="card-body flex flex-col">
          <div className="flex">
            <span className="w-16">
              <Image className="rounded-full" src={image} />
            </span>

            <span className="flex flex-col ml-5">
              <h2 className="card-title">{name}</h2>
              <p>{desc}</p>
            </span>
          </div>
          <div className="justify-center">
            <p>
              <span className="text-neutral mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget nisl id libero tincidunt egestas. Nulla euismod, urna eu
                tincidunt consectetur, nisi nisl elementum nisi, euismod
                consectetur nunc nisl euismod.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={"#slide" + prevSlide} className="btn btn-circle">
          ❮
        </a>
        <a href={"#slide" + nextSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
