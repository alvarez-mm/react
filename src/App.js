
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenInicio from './components/ImagenInicio/ImagenInicio';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartWidget from './components/CartWidget/CartWidget';
import { CartContext } from './Context/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <NavBar/>
          </header>
          <Routes>
            <Route path='/' element= {<ImagenInicio/>}/>
            <Route path='/productos' element= {<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
            <Route path='/cart' element= {<CartWidget/>}/>
          </Routes>              
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;

