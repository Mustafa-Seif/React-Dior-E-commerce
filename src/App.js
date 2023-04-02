import "./App.css";
import Home from "./components/Home";
import About from "../src/components/About";
import Products from "../src/components/Products";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer/Footer";
import NoPage from "../src/components/NoPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProjectsDetails from "./components/projectDetails/ProjectsDetails";
import Cart from "./components/Cart/Cart.jsx";
import CheckOut from "./components/CheckOut";
import ScrollToTop from "./components/ScrollToTop";
import WishList from "./components/WishList/WishList";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/buttons/register";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <ScrollToTop />
        <NavBar />
        <div style={{minHeight:'90vh'}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProjectsDetails />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/wishlist" element={<WishList />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
