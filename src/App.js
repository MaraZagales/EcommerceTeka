import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="container">
      <NavBar />
      <section className="main-container">
        <ItemListContainer title="Nuestros Productos" />
        <ItemDetailContainer title= "Detalle" />
      </section>
      
    </div>
  );
}

export default App;
