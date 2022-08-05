import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Checkout from "./pages/CheckOut";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/productos" element={<ItemListContainer title="Nuestros Productos" />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/cart' element={<Checkout />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
