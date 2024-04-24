import Image from "next/image";
import React from "react";
import { Container, FullContainer } from "..";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: "url(/img/banner_image.jpg)" }}
      className="bg-cover bg-center bg-fixed h-[calc(100vh-130px)] w-full flex flex-col justify-between p-10"
    >
      <div className="flex items-center justify-center">
        <Image
          height={100}
          width={200}
          src="/img/logo.svg"
          alt="logo"
          className="ml-auto mr-auto"
        />
      </div>
      <FullContainer>
        <Container>
          <div className="w-full flex justify-end">
            <div className="bg-black p-6 lg:w-5/12">
              <p className="text-2xl font-bold underline text-red-300">
                Exclusive
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-white mt-4">
                One Love star weighs in on playing Bob Marley
              </p>
            </div>
          </div>
        </Container>
      </FullContainer>
    </div>
  );
}
