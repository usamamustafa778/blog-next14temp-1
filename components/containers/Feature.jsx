import React from "react";
import { Container, FullContainer } from "..";
import { feature } from "@/data/blogs";
import Image from "next/image";

export default function Feature() {
  return (
    <FullContainer className="mt-6 md:mt-16">
      <div className="flex flex-col-reverse md:grid grid-cols-2 lg:w-10/12">
        <div className="bg-sky-100 px-7 lg:px-10 py-10 lg:py-28 flex flex-col items-center justify-center text-center">
          <p className="text-sm md:text-base text-white uppercase bg-black font-bold w-fit px-2 tracking-widest">
            features
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold my-5 md:my-8">
            {feature.title}
          </h2>
          <p className="md:text-lg lg:text-xl">{feature.tagline}</p>
          <p className="font-bold uppercase mt-3 md:mt-5 text-xs md:text-sm lg:text-base">
            BY {feature.author}
          </p>
        </div>
        <div className="overflow-hidden relative min-h-72 w-full">
          <Image
            title={feature.imageTitle}
            src={feature.image}
            fill={true}
            loading="lazy"
            alt="blog"
            className="w-full h-full object-cover absolute top-0 md:scale-110 lg:scale-150"
          />
        </div>
      </div>
    </FullContainer>
  );
}
