import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "./App.css";
import NavBar from "./components/Layout/Navbar/NavBar.jsx";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Contact from "./components/pages/Contact.jsx";
import Product from "./components/pages/Product/Product";

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
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
