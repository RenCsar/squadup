import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Initial from "../pages/Inicial";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../utils/theme";
import DefaultPage from "../pages/Padrao";
import Talentos from "../pages/Talentos";
import AddTalentos from "../pages/AddTalentos";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import GlobalStyle from "../utils/globalStyles";
import EditarTalentos from "../pages/EditarTalentos";

function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route index element={<Initial />} />
          <Route path="/" element={<DefaultPage />}>
            <Route path="/home" element={<Home />} />
            <Route path="/talentos" element={<Talentos />} />
            <Route path="/talentos/editar" element={<EditarTalentos />} />
            <Route path="/talentos/adicionar" element={<AddTalentos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRouter;