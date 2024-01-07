import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Layout/Navbar/NavBar.jsx";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Loading from "./components/Utils/Loading";


import CorporateUniform from "./components/pages/Product/Page/Corporate-Uniform/CorporateUniform.jsx";
import HospitalUniform from "./components/pages/Product/Page/Hospital-Uniform/HospitalUniform.jsx";
import HotelRestaurantUniform from "./components/pages/Product/Page/Hotel-Restaurant-Uniform/HotelRestaurantUniform.jsx";
import HousekeepingUniforms from "./components/pages/Product/Page/Housekeeping-Uniforms/HousekeepingUniforms.jsx";
import IndustrialUniform from "./components/pages/Product/Page/Industrial-Uniform/IndustrialUniform.jsx";
import SecurityUniforms from "./components/pages/Product/Page/Security-Uniforms/SecurityUniforms.jsx";
import TShirts from "./components/pages/Product/Page/T-Shirts/TShirts.jsx";



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
        >
          <Route path="corporate-uniform" element={<CorporateUniform />}></Route>
          <Route path="housekeeping-uniforms" element={<HousekeepingUniforms />}></Route>
          <Route path="hotel-restaurant-uniform" element={<HotelRestaurantUniform />}></Route>
          <Route path="security-uniforms" element={<SecurityUniforms />}></Route>
          <Route path="industrial-uniform" element={<IndustrialUniform />}></Route>
          <Route path="hospital-uniform" element={<HospitalUniform />}></Route>
          <Route path="t-shirts" element={<TShirts />}></Route>
        </Route>
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



