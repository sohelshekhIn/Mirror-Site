import Image from "next/image";
import { h10 } from "../public/images";

export default function SucccesStory() {
  return (
    <div className="page-layout">
      <div className="min-h-screen my-16 lg:my-32 flex flex-col p-5">
        <div className="flex flex-col w-2/6 mx-auto">
          <h1 className="text-heading text-primary align-middle mx-auto">
            Success Stories
          </h1>
          <span className="underline w-8/12 mx-auto"></span>
        </div>
        <div className="flex flex-wrap mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export function Card() {
  return (
    <div className="card w-96 mx-auto my-5 bg-base-100 duration-200 hover:shadow-xl">
      <figure>
        <Image src={h10} alt="Shoes" />
      </figure>
      <div className="card-body min-h-16">
        <h2 className="card-title">Anvi Parekh</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          amet repellendus voluptatum ipsa, deleniti magnam! Blanditiis
          repudiandae facilis molestias sequi illum deleniti unde repellendus.
          Inventore!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}
