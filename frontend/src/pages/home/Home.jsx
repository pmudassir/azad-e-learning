import React from "react";
import Hero from "../../components/heroSection/Hero";
import Card from "../../components/card/Card";
import About from "../../components/about/About";
import ContactUs from "../../components/contactUs/ContactUs";
import Objectives from "../../components/objectives/Objectives";
import Mode from "../../components/mode/Mode";

const Home = () => {
  return (
    <>
      <Hero />
      <Mode/>
      <Card />
      <Objectives />
      <About />
      <ContactUs />
    </>
  );
};

export default Home;