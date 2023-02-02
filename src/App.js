import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Error from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import {MainStyle} from"./styles/MainStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OrderPage from "./Pages/OrderPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentPage from "./Pages/PaymentPage";
import YourPayment from "./Pages/YourPayment";

function App() {
  const theme = {
    colors: {
      heading : "rgb(0,144,0)",
      text : "rgba(29 , 29 , 29 , 0.8)",
      white : "#fff",
      black : "#212529",
      helper : "#8490ff",
      bg : "#F6F8FA",
      footer_bg : "#0a1435",
      btn : "rgb(98, 84, 243)",
      border : "rgba(98 , 84 , 273 , 0.5)",
      hr : "#ffffff",
      gradient:"linear-gradient(0deg , rgb(132 144 255 ) 0%, rgb(98 184 252 ) 100%",
      shadow : "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport : "rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media : {
      mobile : "768px",
      tab : "998px",
    }
  };
  return (
    <ThemeProvider theme={theme}>
   <Router>
   <MainStyle />
   <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart /> } />
      <Route path="/orders" element={<OrderPage /> } />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/loading" element={<YourPayment />} />
      <Route path="*" element={<Error />} />
    </Routes>
   
    <Footer />
   
   </Router>
   </ThemeProvider>
   
  );
}

export default App;
