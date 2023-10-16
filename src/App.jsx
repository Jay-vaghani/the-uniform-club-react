import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/Navbar/NavBar.jsx";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Loading from "./components/Utils/Loading";
const Home = lazy(() => import("./components/pages/Home/Home"));
const Product = lazy(() => import("./components/pages/Product/Product"));
const Contact = lazy(() => import("./components/pages/Contact.jsx"));

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
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loading />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
