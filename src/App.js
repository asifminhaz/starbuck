import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Rewards from './components/Rewards/Rewards';
import GFift from './components/Gift/Gift';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Featured from './components/Featured/Featured';
import Previous from './components/previous/Previous';
import Favourite from './components/Favourite/Favourite';
import Coffee from './components/Coffee/Coffee';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path = '/menu' element={<Menu></Menu>}></Route>
      <Route path ='/rewards' element={<Rewards></Rewards>}></Route>
      <Route path='/gift' element={<GFift></GFift>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='/featured' element={<Featured></Featured>}></Route>
      <Route path='/previous' element={<Previous></Previous>}></Route>
      <Route path='/favourite' element={<Favourite></Favourite>}></Route>
      {/* <Route path='/coffee' element={<Coffee></Coffee>}></Route> */}
     
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
