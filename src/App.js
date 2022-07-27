import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container">
        <NavBar />
        <section className='main-container'>
        <ItemList title="Nuestros Productos"/>
      </section>

    </div>
  );
}

export default App;
