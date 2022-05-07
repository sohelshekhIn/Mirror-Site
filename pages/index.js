import Image from "next/image";
import Hero from "../components/Home/Hero";
import { h1, h2, h3, h4, h5, h6 } from "../public/images/";


export default function Home() {
  return (
    <div className="p-5 pl-3 lg:p-5 w-100">
      <Hero slides={[h1, h2, h3, h4, h5, h6]} />
    </div>
  );
}
