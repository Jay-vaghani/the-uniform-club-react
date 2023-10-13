import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import "./App.css";
import NavBar from "./components/Layout/Navbar/NavBar.jsx";
import { Box, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeddcc",
      },
      secondary: {
        main: "#34251f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
