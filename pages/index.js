import Banner from "@/components/containers/Banner";
import Feature from "@/components/containers/Feature";
import Footer from "@/components/containers/Footer";
import LatestNew from "@/components/containers/LatestNew";
import MostRecent from "@/components/containers/MostRecent";
import MustRead from "@/components/containers/MustRead";
import NavMenu from "@/components/containers/NavMenu";
import Soaps from "@/components/containers/Soaps";
import TopShops from "@/components/containers/TopShops";
import TopTv from "@/components/containers/TopTv";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Spy</title>
      </Head>
      <Banner />
      <NavMenu />
      <MustRead />
      <LatestNew />
      <Feature />
      <TopShops />
      <TopTv />
      <Feature />
      <Soaps />
      <MostRecent />
      <Footer />
    </div>
  );
}
