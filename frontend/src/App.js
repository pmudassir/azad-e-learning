import { Route, Routes } from "react-router-dom";
import PageRouter from "./pageRouter";
import EmailVerification from "./pages/auth/mailVerification/EmailVerification";


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<PageRouter />} />
        <Route path="/email-verification/:token" element={<EmailVerification />} /> 
      </Routes>
    </>
  );
}

export default App;