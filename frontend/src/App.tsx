import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Listing from './routes/Listing';

const App = () => {

  console.log("web app is loaded");

  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/listing' element={<Listing />} />
   </Routes>
  )
}

export default App