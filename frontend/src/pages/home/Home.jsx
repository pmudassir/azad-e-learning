import React from "react";
import Hero from "../../components/heroSection/Hero";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
};

export default Home;
