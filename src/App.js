
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenInicio from './components/ImagenInicio/ImagenInicio';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenida/o al lugar que estiliza tu casa"}/>
      <ItemCount/>   
      <header className="App-header">
      <ImagenInicio/>
      </header>
    </div>
  );
}

export default App;

