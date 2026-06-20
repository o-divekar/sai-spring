import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Make sure to import Navbar
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Products from "./components/Products";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Products component (the one with the grid and "View All" button) */}
            <Route path="/products" element={<Products />} />
            
            {/* ProductsPage component (the detailed view) */}
            <Route path="/products-page" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductsPage />} />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
         
          </Routes>
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </BrowserRouter>
  );
}

export default App;