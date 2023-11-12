import React from "react";
import Hero from "../../components/heroSection/Hero";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import ContactUs from "../../components/contactUs/ContactUs";
import Objectives from "../../components/objectives/Objectives";
import Mode from "../../components/mode/Mode";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mode/>
      <Card />
      <Objectives />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;