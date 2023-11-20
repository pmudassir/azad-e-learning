import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Form from "./pages/form/Form";
import CompetitiveGoals from "./pages/competitiveGoals/CompetitiveGoals";
import Auth from "./pages/auth/Auth";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/ppttc" element={<Form />} />
          <Route path="/mttc" element={<Form />} />
          <Route path="/httc" element={<Form />} />
          <Route path="/competitive-goals" element={<CompetitiveGoals />} />
          <Route path="/auth" element={user ? (<Navigate replace to="/" />) : < Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;