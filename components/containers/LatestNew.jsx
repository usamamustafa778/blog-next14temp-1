import React from "react";
import { Container, FullContainer } from "..";
import SectionHeading from "../common/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { latestNews, mustRead } from "@/data/blogs";

export default function LatestNew() {
  return (
    <FullContainer>
      <Container>
        <SectionHeading title="LATEST NEWS" tagline="THIS JUST IN…" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-latestNews md:gap-7 mt-9">
          <div className="bg-black p-5 text-white border-t-8 border-sky-400">
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
                <p className="mt-3 text-lg md:text-xl font-bold">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="bg-black p-5 text-white border-t-8 border-red-300">
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
                <p className="mt-3 text-lg md:text-xl font-bold">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
