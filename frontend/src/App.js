import { Route, Routes } from "react-router-dom";
import PageRouter from "./pageRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PageRouter />} />
      </Routes>
    </>
  );
}

export default App;