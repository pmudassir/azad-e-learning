import React from "react";
import Hero from "../../components/heroSection/Hero";
import Navbar from "../../components/navbar/Navbar"
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <About />
      <Footer />
    </>
  );
};

export default Home;