import Home from "./pages/home/Home";
import Course from "./pages/home/course/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
