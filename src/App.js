
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenInicio from './components/ImagenInicio/ImagenInicio';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemCount stock={5} initial= {1} onAdd />   
      <header className="App-header">
      <ImagenInicio/>
      <ItemListContainer greeting={"Bienvenida/o al lugar que estiliza tu casa"}/>
      <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;

