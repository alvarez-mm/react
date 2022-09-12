
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenInicio from './components/ImagenInicio/ImagenInicio';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <NavBar/>
        </header>
        <Routes>
          <Route path='/' element= {<ImagenInicio/>}/>
          <Route path='/productos' element= {<ItemListContainer/>}/>
          <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
        </Routes>
        <ItemCount stock={5} initial= {1} onAdd />                     
      </div>
    </BrowserRouter>
  );
}

export default App;

