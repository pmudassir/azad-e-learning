import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import CompetitiveGoals from "./pages/competitiveGoals/CompetitiveGoals";
import { useSelector } from "react-redux";
import Auth from "./pages/auth/Auth";
import Form from "./pages/form/Form";
import Admin from "./pages/admin/Admin";

const PageRouter = () => {
  const user = useSelector((state) => state.user.email);
  const admin = useSelector((state) => state.user.admin);

  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/ppttc" element={<Form />} />
          <Route path="/mttc" element={<Form />} />
          <Route path="/httc" element={<Form />} />
          <Route path="/competitive-goals" element={<CompetitiveGoals />} />
          <Route
            path="/auth"
            element={user ? <Navigate replace to="/" /> : <Auth />}
          />
          <Route path="/admin" element={admin ? <Admin /> : <Home />} /> 
        </Routes>
      </>
      <Footer />
    </>
  );
};

export default PageRouter;
