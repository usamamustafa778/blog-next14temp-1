import React from "react";
import { Container, FullContainer } from "..";
import { latestNews, mustRead } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../common/SectionHeading";

export default function Soaps() {
  return (
    <FullContainer className="py-10 md:py-16 lg:py-20">
      <Container>
        <SectionHeading title="SOAPS" tagline="WHERE THE DRAMA NEVER STOPS" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7 mt-10 w-full">
          {mustRead.map((item, index) => (
            <Link href="#" key={index} title={item.imageTitle}>
              <div className="overflow-hidden relative h-44 lg:h-80 w-full bg-black">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-2 lg:mt-3 text-lg md:text-xl lg:text-2xl font-bold text-center">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </Container>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 md:w-11/12 lg:w-10/12">
        <div className="bg-black p-5 text-white border-t-8 border-sky-400">
          <div className="pb-12 text-4xl font-extrabold">SHOWBIZ</div>
          {mustRead.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="grid grid-cols-2 gap-5 mb-5"
              title={item.imageTitle}
            >
              <div className="overflow-hidden relative h-44 w-full">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-3 text-xl font-bold">{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="bg-black p-5 text-white border-t-8 border-red-300">
          <div className="pb-12 text-4xl font-extrabold">TECH</div>
          {latestNews.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="grid grid-cols-2 gap-5 mb-5"
              title={item.imageTitle}
            >
              <div className="overflow-hidden relative h-44 w-full">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-3 text-xl font-bold">{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="bg-black p-5 text-white border-t-8 border-yellow-300">
          <div className="pb-12 text-4xl font-extrabold">DEALS</div>
          {mustRead.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="grid grid-cols-2 gap-5 mb-5"
              title={item.imageTitle}
            >
              <div className="overflow-hidden relative h-44 w-full">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-3 text-xl font-bold">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </FullContainer>
  );
}
