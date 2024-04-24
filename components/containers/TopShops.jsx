import React from "react";
import { Container, FullContainer } from "..";
import { mustRead } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../common/SectionHeading";

export default function TopShops() {
  return (
    <FullContainer className="py-12 lg:py-16">
      <Container>
        <SectionHeading title="TOP OF THE SHOPS" tagline={"WHAT'S THE DEAL?"} />
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
    </FullContainer>
  );
}
