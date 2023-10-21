import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/form/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/ppttc" element={<Form />} />
          <Route path="/mttc" element={<Form />} />
          <Route path="/httc" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;