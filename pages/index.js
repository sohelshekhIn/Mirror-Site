import Hero from "../components/Home/Hero";
import HowUs from "../components/Home/How";
import WhyUs from "../components/Home/Why";
import { h1, h2, h3, h4, h5, h6, h7, h8 } from "../public/images/";

export default function Home() {
  return (<>
    <div className="p-5 pl-3 pt-16 lg:p-5 w-100 ">
      <Hero slides={[h1, h2, h3, h4, h5, h6, h7, h8]} />
      <WhyUs />
      <HowUs />
    </div>
  </>
  );
}
