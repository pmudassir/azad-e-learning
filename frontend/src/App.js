import { Route, Routes } from "react-router-dom";
import PageRouter from "./pageRouter";
// import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/*" element={<PageRouter />} />
      </Routes>
    </>
  );
}

export default App;
