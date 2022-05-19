import Hero from "../components/Home/Hero";
import HowUs from "../components/Home/How";
import Testimonial from "../components/Home/Testimonial";
import WhatWe from "../components/Home/What";
import WhyUs from "../components/Home/Why";
import { h1, h2, h3, h4, h5, h6, h7, h8, h9, h10 } from "../public/images/";

export default function Home() {
  return (
    <>
      <div className="page-layout">
        <Hero slides={[h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]} />
        <WhyUs />
        <HowUs />
        <WhatWe />
        <Testimonial />
      </div>
    </>
  );
}
