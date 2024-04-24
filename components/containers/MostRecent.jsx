import React from "react";
import { Container, FullContainer } from "..";
import { latestNews, mustRead } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../common/SectionHeading";

export default function MostRecent() {
  return (
    <FullContainer className="pb-16">
      <Container>
        <SectionHeading title="MOST RECENT" tagline="ONE MORE THING..." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7 mt-10 w-full">
          {mustRead.map((item, index) => (
            <Link href="#" key={index} title={item.imageTitle}>
              <div className="overflow-hidden relative h-44 lg:h-64 w-full bg-black">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-2 lg:mt-3 text-lg md:text-xl font-bold text-center">
                {item.title}
              </p>
            </Link>
          ))}
          {latestNews.map((item, index) => (
            <Link href="#" key={index} title={item.imageTitle}>
              <div className="overflow-hidden relative h-44 lg:h-64 w-full bg-black">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-2 lg:mt-3 text-lg md:text-xl font-bold text-center">
                {item.title}
              </p>
            </Link>
          ))}
          {mustRead.map((item, index) => (
            <Link href="#" key={index} title={item.imageTitle}>
              <div className="overflow-hidden relative h-44 lg:h-64 w-full bg-black">
                <Image
                  title={item.imageTitle}
                  src={item.image}
                  fill={true}
                  loading="lazy"
                  alt="blog"
                  className="w-full h-full object-cover absolute top-0 scale-125"
                />
              </div>
              <p className="mt-2 lg:mt-3 text-lg md:text-xl font-bold text-center">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
