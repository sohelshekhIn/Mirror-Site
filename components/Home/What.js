import { cbseLogo, gsebLogo, icseLogo, } from "../../public/images"
import Image from "next/image"

export default function WhatWe() {
    return (
        <div className="h-100 lg:px-32 mt-20" >
            <h1 className="text-heading text-primary text-center divider">Courses</h1>
            <p className="text-center">Std. 1 to 12</p>
            <div className="flex flex-wrap lg:px-32">
                <Card logo={cbseLogo} text="CBSE" />
                <Card logo={icseLogo} text="ICSE" />
                <Card logo={gsebLogo} text="GSEB" />
                <Card logo={cbseLogo} text="JEE" />
                <Card logo={cbseLogo} text="NEET" />
                <Card logo={gsebLogo} text="GUJCET" />
                <Card logo={cbseLogo} text="AIMPT" />
                <Card logo={cbseLogo} modClass="text-4xl" text="JEE-NEET Foundation" />
            </div>
        </div>
    )
}

export function Card({ logo, text, modClass }) {
    let classes = "card-title my-auto justify-center text-base-100 font-bold "
    return (
        <div class="card w-64 bg-base-100 shadow-xl image-full m-10  mx-auto select-none" >
            <figure className="p-10"><Image src={logo} alt="CBSE Tution Classes in Nadiad" /></figure>
            <div class="card-body bg-primary bg-opacity-10 hover:bg-opacity-90 transition-bg-opacity duration-200">
                <h1 class={modClass == undefined ? classes = classes + "text-5xl" : classes = classes + modClass} >{text}</h1>
            </div>
        </div >
    )
}