
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenInicio from './components/ImagenInicio/ImagenInicio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenida/o al lugar que estiliza tu casa"}/>    
      <header className="App-header">
      <ImagenInicio/>
      </header>
    </div>
  );
}

export default App;

