import './App.css';
import { Route, Routes } from "react-router-dom";
import BeerList from './components/BeerList'
import Navbar from './components/HomePage';
import HomePage from './components/HomePage';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    </>
  );
}

export default App;
