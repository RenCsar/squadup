import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Initial from "../pages/Inicial";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../utils/theme";

function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRouter;