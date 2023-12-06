import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;