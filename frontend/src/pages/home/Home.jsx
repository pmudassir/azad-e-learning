import React from "react";
import Hero from "../../components/heroSection/Hero";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import ContactUs from "../../components/contactUs/ContactUs";
import Objectives from "../../components/objectives/Objectives";
import Mode from "../../components/mode/Mode";
import CourseTime from "../../components/courseTimeline/CourseTime";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mode/>
      <Card />
      <Objectives />
      <About />
      <CourseTime />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
